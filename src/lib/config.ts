// Public client-side configuration
// These values are safe to expose — Loops contact creation API is publishable
export const config = {
  loops: {
    apiKey: process.env.NEXT_PUBLIC_LOOPS_API_KEY || "a7f41f48071ff4c996a13ed36fb9dd03",
    endpoint: "https://app.loops.so/api/v1/contacts/create",
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ayoddvbqnnpxmqxxjgkw.supabase.co",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
} as const;
