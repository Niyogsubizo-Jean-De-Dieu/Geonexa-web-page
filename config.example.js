// GeoNEXA AI — Supabase config
// ⚠️ DO NOT commit real keys to version control!
// Copy this file to config.js and fill in your values.
// Find them in Supabase Dashboard → Project Settings → API

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
