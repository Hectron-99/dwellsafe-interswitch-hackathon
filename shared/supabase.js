// DWELLSAFE - Shared Supabase connection
// Replace the two values below with your Project URL and publishable (anon) key

const SUPABASE_URL = 'https://obfeamgcbxbzedilnywi.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_VG_b67vfQSRnPQl0Ht4AnA_1rjPtzz-'
// Load the Supabase client from CDN (add this script tag in every HTML page before this file):
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
