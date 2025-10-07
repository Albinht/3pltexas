const requiredFields = ["name", "email", "company", "notes"] as const;

function hasRequiredFields(payload: Record<string, unknown>) {
  return requiredFields.every((field) => typeof payload[field] === "string" && (payload[field] as string).trim().length > 0);
}

export const onRequestPost = async ({ request }: { request: Request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { intent, payload } = body as {
    intent?: "contact" | "quote";
    payload?: Record<string, unknown>;
  };

  if (!intent || !payload || !hasRequiredFields(payload)) {
    return Response.json({ message: "Missing required fields" }, { status: 400 });
  }

  const lead = {
    intent,
    payload,
    submittedAt: new Date().toISOString(),
  };

  console.info("Lead received", lead);

  return Response.json({ message: "Received" }, { status: 202 });
};
