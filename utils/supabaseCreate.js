import { createClient } from '@supabase/supabase-js'

const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL

export const supabase = createClient(supabase_url, supabase_key)