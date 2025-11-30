import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { email, userAgent, source = 'newsletter' } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const { data: existingEmail } = await supabase
      .from('email_subscriptions')
      .select('email')
      .eq('email', email)
      .single();

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      );
    }

    // Insert new email subscription
    const { data, error } = await supabase
      .from('email_subscriptions')
      .insert([
        {
          email,
          user_agent: userAgent || null,
          source: source || 'newsletter',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to save email subscription' },
        { status: 500 }
      );
    }

    console.log('✅ Email saved to Supabase:', email);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email subscribed successfully',
        data: data[0]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Supabase API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('email_subscriptions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch email subscriptions' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { emails: data || [] },
      { status: 200 }
    );

  } catch (error) {
    console.error('Supabase API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}