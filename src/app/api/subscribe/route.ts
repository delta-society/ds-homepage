import { NextRequest, NextResponse } from "next/server";

const LOOPS_API_KEY = process.env.LOOPS_API_KEY || "a7f41f48071ff4c996a13ed36fb9dd03";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOOPS_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        source: "ds-homepage",
        subscribed: true,
      }),
    });

    if (res.ok || res.status === 409) {
      return NextResponse.json({ success: true });
    }

    const error = await res.text();
    return NextResponse.json({ error }, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
