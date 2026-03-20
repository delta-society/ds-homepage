import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const results = await Promise.allSettled([
      // Supabase — CRM record (service_role bypasses RLS)
      (async () => {
        if (!supabaseUrl || !supabaseServiceKey) return null;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);
        const { error } = await supabase
          .from("newsletter_subscribers")
          .upsert({ email, source: "ds-homepage", subscribed_at: new Date().toISOString() }, { onConflict: "email" });
        if (error) throw error;
        return "supabase_ok";
      })(),

      // Loops — newsletter delivery
      (async () => {
        const loopsKey = process.env.LOOPS_API_KEY;
        if (!loopsKey) return null;
        const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loopsKey}`,
          },
          body: JSON.stringify({ email, source: "ds-homepage", subscribed: true }),
        });
        if (!res.ok && res.status !== 409) throw new Error(`Loops: ${res.status}`);
        return "loops_ok";
      })(),
    ]);

    const anySuccess = results.some((r) => r.status === "fulfilled" && r.value !== null);

    if (anySuccess) {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
