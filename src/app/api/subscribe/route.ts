import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);
const appendFileAsync = promisify(fs.appendFile);
const readFileAsync = promisify(fs.readFile);
const existsAsync = promisify(fs.exists);

const CSV_FILE_PATH = path.join(process.cwd(), 'email_subscriptions.csv');

async function initializeCSV(): Promise<void> {
  try {
    const fileExists = await existsAsync(CSV_FILE_PATH);
    if (!fileExists) {
      // Create CSV with headers
      const headers = 'Email,Timestamp,User Agent,Source\n';
      await writeFileAsync(CSV_FILE_PATH, headers, 'utf8');
      console.log('📁 CSV file created with headers');
    }
  } catch (error) {
    console.error('❌ Error initializing CSV file:', error);
    throw error;
  }
}

async function checkDuplicate(email: string): Promise<boolean> {
  try {
    const fileExists = await existsAsync(CSV_FILE_PATH);
    if (!fileExists) return false;

    const csvContent = await readFileAsync(CSV_FILE_PATH, 'utf8');
    const lines = csvContent.split('\n');
    
    // Skip header row, check each email
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const columns = parseCSVLine(line);
      if (columns[0] && columns[0].toLowerCase() === email.toLowerCase()) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('❌ Error checking duplicate:', error);
    return false;
  }
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++; // Skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current);
  return result;
}

function escapeCSV(value: string): string {
  // Escape quotes and wrap in quotes if contains comma or quotes
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return value.replace(/"/g, '""');
  }
  return value;
}

async function saveEmailToCSV(email: string, userAgent: string, source: string): Promise<void> {
  try {
    await initializeCSV();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }

    // Check for duplicate
    const isDuplicate = await checkDuplicate(email);
    if (isDuplicate) {
      throw new Error('Email already exists');
    }

    // Create CSV entry
    const timestamp = new Date().toISOString();
    const csvEntry = `"${email.toLowerCase()}","${timestamp}","${escapeCSV(userAgent)}","${source}"\n`;

    // Append to file
    await appendFileAsync(CSV_FILE_PATH, csvEntry, 'utf8');
    
    console.log('✅ Email saved to CSV:', {
      email: email.toLowerCase(),
      timestamp,
      source
    });

  } catch (error) {
    console.error('❌ Error saving email to CSV:', error);
    throw error;
  }
}

async function getAllEmailsFromCSV(): Promise<{email: string, timestamp: string, userAgent: string, source: string}[]> {
  try {
    const fileExists = await existsAsync(CSV_FILE_PATH);
    if (!fileExists) return [];

    const csvContent = await readFileAsync(CSV_FILE_PATH, 'utf8');
    const lines = csvContent.split('\n');
    const emails: {email: string, timestamp: string, userAgent: string, source: string}[] = [];

    // Skip header row
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const columns = parseCSVLine(line);
      if (columns.length >= 4) {
        emails.push({
          email: columns[0],
          timestamp: columns[1],
          userAgent: columns[2],
          source: columns[3]
        });
      }
    }

    return emails;
  } catch (error) {
    console.error('❌ Error reading emails from CSV:', error);
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email, userAgent, source } = await request.json();
    
    console.log('📧 API subscription request received:', { email, source });
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Save to CSV
    await saveEmailToCSV(email, userAgent, source || 'newsletter');
    
    console.log('✅ Email successfully saved to CSV:', email);
    
    return NextResponse.json(
      { success: true, message: 'Email subscribed successfully' },
      { status: 200 }
    );
    
  } catch (error: unknown) {
    console.error('💥 API subscription error:', error);
    
    if (error instanceof Error && error.message === 'Email already exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed' },
        { status: 409 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log('📋 Fetching all email subscriptions...');
    const emails = await getAllEmailsFromCSV();
    
    return NextResponse.json(
      { 
        success: true, 
        count: emails.length,
        emails 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('💥 API fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch email subscriptions' },
      { status: 500 }
    );
  }
}