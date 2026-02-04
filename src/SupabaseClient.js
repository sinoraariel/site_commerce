// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsguswscfrgasixhyiwp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZ3Vzd3NjZnJnYXNpeGh5aXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTM4ODEsImV4cCI6MjA1ODcyOTg4MX0.e9unl5Fo-CNlW8bEFqJnZAq7b-ulYg3ZwsfMsVZA9RM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)