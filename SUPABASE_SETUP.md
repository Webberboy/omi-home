# Supabase Database Setup for Email Subscriptions

## SQL Script to Create Email Subscriptions Table

Run this SQL script in your Supabase SQL editor to create the email_subscriptions table:

```sql
-- Create email_subscriptions table
CREATE TABLE email_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  user_agent TEXT,
  source TEXT DEFAULT 'newsletter',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_email_subscriptions_email ON email_subscriptions(email);
CREATE INDEX idx_email_subscriptions_created_at ON email_subscriptions(created_at);
CREATE INDEX idx_email_subscriptions_source ON email_subscriptions(source);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_email_subscriptions_updated_at 
    BEFORE UPDATE ON email_subscriptions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (optional)
CREATE POLICY "Allow public read access" ON email_subscriptions
    FOR SELECT USING (true);

-- Create policy to allow public insert access
CREATE POLICY "Allow public insert access" ON email_subscriptions
    FOR INSERT WITH CHECK (true);

-- Create policy to prevent public updates (admin only)
CREATE POLICY "Prevent public updates" ON email_subscriptions
    FOR UPDATE USING (false);

-- Create policy to prevent public deletes (admin only)
CREATE POLICY "Prevent public deletes" ON email_subscriptions
    FOR DELETE USING (false);
```

## Environment Variables

Make sure your `.env.local` file contains:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Usage Instructions

1. **Choose your storage backend** by modifying the `STORAGE_BACKEND` variable in `src/lib/emailStorage.ts`:
   - `'csv'` - Only use CSV file storage
   - `'supabase'` - Only use Supabase database
   - `'both'` - Use both CSV and Supabase (recommended for migration)

2. **Switch storage methods** by changing this line:
```typescript
export const STORAGE_BACKEND: StorageBackend = 'both'; // Change to 'csv' or 'supabase'
```

3. **Test the new API endpoint**:
```bash
curl -X POST http://localhost:3001/api/subscribe-supabase \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com", "source": "newsletter"}'
```

## Benefits of Each Method

### CSV Storage
- ✅ Simple and lightweight
- ✅ No database required
- ✅ Easy to export/import
- ❌ No querying capabilities
- ❌ No duplicate prevention
- ❌ Not scalable for large datasets

### Supabase Storage
- ✅ Full database capabilities
- ✅ Duplicate prevention
- ✅ Scalable and performant
- ✅ Query and filtering support
- ✅ Better security with RLS
- ❌ Requires database setup
- ❌ Slightly more complex

### Both Storage (Recommended for Migration)
- ✅ Redundant backup
- ✅ Easy migration path
- ✅ Gradual transition
- ✅ Data consistency check

## Migration Strategy

1. Start with `STORAGE_BACKEND = 'both'`
2. Verify data is being saved to both locations
3. Export existing CSV data to Supabase if needed
4. Test thoroughly with both storage methods
5. Switch to `STORAGE_BACKEND = 'supabase'` when confident
6. Optionally remove CSV code after full migration