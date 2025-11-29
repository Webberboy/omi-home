import { NextRequest, NextResponse } from 'next/server';
import { emailStorage } from '@/lib/emailStorage';

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
    await emailStorage.saveEmail(email, userAgent, source || 'newsletter');
    
    console.log('✅ Email successfully saved to CSV:', email);
    
    return NextResponse.json(
      { success: true, message: 'Email subscribed successfully' },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('💥 API subscription error:', error);
    
    if (error.message === 'Email already exists') {
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
    const emails = await emailStorage.getAllEmails();
    
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