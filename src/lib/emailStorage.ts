// Email storage utility with multiple backend options
import { supabase } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFileAsync = promisify(fs.writeFile);
const appendFileAsync = promisify(fs.appendFile);
const readFileAsync = promisify(fs.readFile);
const existsAsync = promisify(fs.exists);

const CSV_FILE_PATH = path.join(process.cwd(), 'email_subscriptions.csv');

export type EmailSubscription = {
  email: string;
  timestamp: string;
  source: string;
  userAgent?: string;
};

export type StorageBackend = 'csv' | 'supabase' | 'both';

// Configuration - change this to switch storage backends
export const STORAGE_BACKEND: StorageBackend = 'supabase'; // Options: 'csv', 'supabase', 'both'

// Initialize CSV file if it doesn't exist
async function initializeCSV(): Promise<void> {
  try {
    const exists = await existsAsync(CSV_FILE_PATH);
    if (!exists) {
      const headers = 'Email,Timestamp,Source,UserAgent\n';
      await writeFileAsync(CSV_FILE_PATH, headers, 'utf8');
      console.log('✅ CSV file initialized');
    }
  } catch (error) {
    console.error('Error initializing CSV file:', error);
    throw error;
  }
}

// CSV Storage Functions
export async function saveEmailToCSV(email: string, source: string = 'newsletter', userAgent?: string): Promise<void> {
  try {
    await initializeCSV();
    
    const timestamp = new Date().toISOString();
    const escapedEmail = escapeCSV(email);
    const escapedUserAgent = userAgent ? escapeCSV(userAgent) : '';
    
    const csvLine = `${escapedEmail},${timestamp},${source},${escapedUserAgent}\n`;
    await appendFileAsync(CSV_FILE_PATH, csvLine, 'utf8');
    
    console.log('✅ Email saved to CSV:', email);
  } catch (error) {
    console.error('Error saving email to CSV:', error);
    throw error;
  }
}

export async function getEmailsFromCSV(): Promise<EmailSubscription[]> {
  try {
    const exists = await existsAsync(CSV_FILE_PATH);
    if (!exists) {
      return [];
    }
    
    const csvContent = await readFileAsync(CSV_FILE_PATH, 'utf8');
    const lines = csvContent.trim().split('\n');
    
    if (lines.length <= 1) {
      return [];
    }
    
    const headers = lines[0].split(',');
    const emails: EmailSubscription[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const values = parseCSVLine(lines[i]);
      if (values.length >= 3) {
        emails.push({
          email: values[0],
          timestamp: values[1],
          source: values[2],
          userAgent: values[3] || undefined
        });
      }
    }
    
    return emails;
  } catch (error) {
    console.error('Error reading emails from CSV:', error);
    return [];
  }
}

// Supabase Storage Functions
export async function saveEmailToSupabase(email: string, source: string = 'newsletter', userAgent?: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('email_subscriptions')
      .insert([
        {
          email,
          user_agent: userAgent || null,
          source: source || 'newsletter',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ]);

    if (error) {
      throw error;
    }
    
    console.log('✅ Email saved to Supabase:', email);
  } catch (error) {
    console.error('Error saving email to Supabase:', error);
    throw error;
  }
}

export async function getEmailsFromSupabase(): Promise<EmailSubscription[]> {
  try {
    const { data, error } = await supabase
      .from('email_subscriptions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return (data || []).map(item => ({
      email: item.email,
      timestamp: item.created_at,
      source: item.source,
      userAgent: item.user_agent || undefined
    }));
  } catch (error) {
    console.error('Error reading emails from Supabase:', error);
    return [];
  }
}

// Combined Storage Functions
export async function saveEmail(email: string, source: string = 'newsletter', userAgent?: string): Promise<void> {
  const errors: string[] = [];
  
  if (STORAGE_BACKEND === 'csv' || STORAGE_BACKEND === 'both') {
    try {
      await saveEmailToCSV(email, source, userAgent);
    } catch (error) {
      errors.push(`CSV: ${error}`);
    }
  }
  
  if (STORAGE_BACKEND === 'supabase' || STORAGE_BACKEND === 'both') {
    try {
      await saveEmailToSupabase(email, source, userAgent);
    } catch (error) {
      errors.push(`Supabase: ${error}`);
    }
  }
  
  if (errors.length > 0) {
    console.warn('⚠️ Some storage backends failed:', errors);
    if (errors.length === (STORAGE_BACKEND === 'both' ? 2 : 1)) {
      throw new Error(`All storage backends failed: ${errors.join(', ')}`);
    }
  }
}

export async function getEmails(): Promise<EmailSubscription[]> {
  if (STORAGE_BACKEND === 'supabase') {
    return await getEmailsFromSupabase();
  } else if (STORAGE_BACKEND === 'csv') {
    return await getEmailsFromCSV();
  } else if (STORAGE_BACKEND === 'both') {
    // For 'both', prioritize Supabase data
    const supabaseEmails = await getEmailsFromSupabase();
    return supabaseEmails.length > 0 ? supabaseEmails : await getEmailsFromCSV();
  }
  
  return [];
}

// Helper functions
function escapeCSV(value: string): string {
  if (!value) return '';
  
  // Escape quotes and wrap in quotes if contains comma or quotes
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
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

// Check if email exists
export async function emailExists(email: string): Promise<boolean> {
  try {
    if (STORAGE_BACKEND === 'supabase' || STORAGE_BACKEND === 'both') {
      const { data } = await supabase
        .from('email_subscriptions')
        .select('email')
        .eq('email', email)
        .single();
      
      return !!data;
    }
    
    if (STORAGE_BACKEND === 'csv') {
      const emails = await getEmailsFromCSV();
      return emails.some(item => item.email.toLowerCase() === email.toLowerCase());
    }
    
    return false;
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false;
  }
}