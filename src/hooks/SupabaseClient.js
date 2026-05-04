// src/supabase/client.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cjqayrjbkhpistiwcqjr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcWF5cmpia2hwaXN0aXdjcWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODI3NTgsImV4cCI6MjA5Mjk1ODc1OH0.Am9zn6XEuA-bODl8FhMDeGRPePMBJqvX5X-_qzKE4E0"

export const supabase = createClient(supabaseUrl, supabaseKey)