# Email Collection Setup with Supabase

## Overview
This setup enables email collection on your website with Supabase integration, storing emails with unique Supabase IDs.

## Setup Instructions

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Once created, go to your project settings
3. Copy the following values:
   - Project URL (for `NEXT_PUBLIC_SUPABASE_URL`)
   - Anon Key (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Service Role Key (for `SUPABASE_SERVICE_ROLE_KEY`)

### 2. Update Environment Variables
Replace the placeholder values in `.env.local` with your actual Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_actual_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key
```

### 3. Create Database Table
Run the SQL script in your Supabase SQL editor:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase_emails_table.sql`
4. Click "Run" to execute the script

### 4. Verify Setup
The email collection is now active on the CTA section form. When users submit their email:

- Email is validated
- Unique Supabase ID is generated
- Data is stored in the `emails` table
- User gets immediate feedback (success/error)

## Features

- ✅ Email validation
- ✅ Duplicate email prevention
- ✅ Supabase ID generation
- ✅ IP address and user agent tracking
- ✅ Error handling and user feedback
- ✅ Row Level Security (RLS) enabled
- ✅ Automatic timestamp updates

## Database Schema

The `emails` table includes:
- `id`: Primary key (UUID)
- `email`: User's email address
- `supabase_id`: Unique Supabase identifier
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp
- `source`: Form source (default: 'newsletter')
- `ip_address`: User's IP address
- `user_agent`: Browser user agent
- `is_active`: Active status (default: true)
- `metadata`: Additional JSON data

## API Endpoints

- `POST /api/submit-email`: Submit email for collection

## Usage

The email collection is automatically integrated into the CTA section form. Users can submit their email and it will be stored with a unique Supabase ID.

## Security Notes

- RLS policies are enabled for security
- Email validation is performed both client and server-side
- IP addresses and user agents are logged for security monitoring
- Duplicate email prevention is implemented