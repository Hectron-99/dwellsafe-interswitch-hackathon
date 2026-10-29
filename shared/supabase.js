const SUPABASE_URL = 'https://obfeamgcbxbzedilnywi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VG_b67vfQSRnPQl0Ht4AnA_1rjPtzz';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
