'use server'

// This file is now deprecated since we're using direct Supabase client integration
// Kept for reference but not used in the current implementation

// import { supabase } from '@/lib/supabase'

export interface EmailSubmissionResult {
  success: boolean
  message: string
  emailId?: string
  supabaseId?: string
}

// Legacy function - not used in direct client integration
export async function submitEmail(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  email: string 
  // source: string = 'newsletter', // Commented out - unused
  // metadata: Record<string, unknown> = {} // Commented out - unused
): Promise<EmailSubmissionResult> {
  console.warn('submitEmail function is deprecated. Using direct Supabase client integration instead.')
  
  return {
    success: false,
    message: 'This function is deprecated. Use direct Supabase client integration.'
  }
}