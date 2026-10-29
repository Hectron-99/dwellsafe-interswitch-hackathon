// shared/supabase.js

// 1. Replace these with your actual Supabase project details from your notes
const SUPABASE_URL = 'https://obfeamgcbxbzedilnywi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VG_b67vfQSRnPQl0Ht4AnA_1rjPtzz';

// 2. Initialize the Supabase client (requires the Supabase CDN script loaded in your HTML)
const { createClient } = supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
