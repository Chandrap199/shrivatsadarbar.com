// ======================================================
// ShriVatsaDarbar — Supabase Authentication
// ======================================================

const SUPABASE_URL =
    "https://yqzolpymrwzcwbkwykrq.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_Zj1lpCfeU-nPv5VdsedWeA_MfKpDmIf";


// Create Supabase client
window.supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );
