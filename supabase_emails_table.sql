-- Create the emails table to store user emails with Supabase IDs
CREATE TABLE IF NOT EXISTS public.emails (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    supabase_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    source TEXT DEFAULT 'newsletter'::text,
    ip_address INET,
    user_agent TEXT,
    is_active BOOLEAN DEFAULT true,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_emails_email ON public.emails (email);
CREATE INDEX IF NOT EXISTS idx_emails_supabase_id ON public.emails (supabase_id);
CREATE INDEX IF NOT EXISTS idx_emails_created_at ON public.emails (created_at DESC);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
DROP TRIGGER IF EXISTS update_emails_updated_at ON public.emails;
CREATE TRIGGER update_emails_updated_at
    BEFORE UPDATE ON public.emails
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE public.emails ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access" ON public.emails;
DROP POLICY IF EXISTS "Allow public insert access" ON public.emails;

-- Create RLS policies
CREATE POLICY "Allow public read access" ON public.emails
    FOR SELECT USING (true);

CREATE POLICY "Allow public insert access" ON public.emails
    FOR INSERT WITH CHECK (true);

-- Grant necessary permissions
GRANT ALL ON public.emails TO anon;
GRANT ALL ON public.emails TO authenticated;
GRANT ALL ON public.emails TO service_role;

-- Create a function to insert or update email with Supabase ID
CREATE OR REPLACE FUNCTION upsert_email_with_supabase_id(
    p_email TEXT,
    p_supabase_id UUID,
    p_source TEXT DEFAULT 'newsletter',
    p_ip_address INET DEFAULT NULL,
    p_user_agent TEXT DEFAULT NULL,
    p_metadata JSONB DEFAULT '{}'::jsonb
)
RETURNS UUID AS $$
DECLARE
    v_email_id UUID;
BEGIN
    INSERT INTO public.emails (email, supabase_id, source, ip_address, user_agent, metadata)
    VALUES (p_email, p_supabase_id, p_source, p_ip_address, p_user_agent, p_metadata)
    ON CONFLICT (email) DO UPDATE SET
        supabase_id = EXCLUDED.supabase_id,
        updated_at = NOW(),
        metadata = public.emails.metadata || EXCLUDED.metadata
    RETURNING id INTO v_email_id;
    
    RETURN v_email_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;