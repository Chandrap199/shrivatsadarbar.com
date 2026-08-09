// ============================================
// ShriVatsaDarbar — Supabase Authentication
// ============================================

const SUPABASE_URL = "https://yqzolpymrwzcwbkykrq.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Zj1lpCfeU-nPv5VdsedWeA_MfKpDmIf";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
