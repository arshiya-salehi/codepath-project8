import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ejbbzjmprlnhgbpujnyl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqYmJ6am1wcmxuaGdicHVqbnlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxOTQ3NjQsImV4cCI6MjA2MDc3MDc2NH0.oKp3H1bKIgnB0_LXzUwsikv54c2-v9S5vCA7oHFO96c'
export const supabase = createClient(supabaseUrl, supabaseKey)
