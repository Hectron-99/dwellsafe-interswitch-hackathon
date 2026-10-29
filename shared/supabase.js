const SUPABASE_URL = 'https://obfeamgcbxbzedilnywi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZmVhbWdjYnhiemVkaWxueXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNTY5MjYsImV4cCI6MjEwODgzMjkyNn0.3AEhclYgiGmRheN-99Xvv6DEpSSBbE4cTwnDQG3pEYU';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
