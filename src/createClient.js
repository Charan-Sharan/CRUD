import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
    "https://czkvkcnlhpjnjdzppcbk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a3ZrY25saHBqbmpkenBwY2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxODcxMDUsImV4cCI6MjA1MDc2MzEwNX0.TND7fXTqVE34eHJSnv3saAb4LfstwrGT6aCeaRY443k"
)

export default supabase