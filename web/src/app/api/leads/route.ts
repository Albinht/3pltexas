import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "company", "notes"] as const;

function hasRequiredFields(payload: Record<string, unknown>) {
  return requiredFields.every((field) => typeof payload[field] === "string" && (payload[field] as string).trim().length > 0);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { intent, payload } = body as {
    intent?: "contact" | "quote";
    payload?: Record<string, unknown>;
  };

  if (!intent || !payload || !hasRequiredFields(payload)) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const lead = {
    intent,
    payload,
    submittedAt: new Date().toISOString(),
  };

  // Placeholder for future HubSpot or email service integration.
  console.info("Lead received", lead);

  return NextResponse.json({ message: "Received" }, { status: 202 });
}
