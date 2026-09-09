import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const title =
    typeof body === "object" && body !== null && "title" in body
      ? (body as { title?: unknown }).title
      : undefined;

  if (typeof title !== "string" || title.trim().length === 0 || title.length > 50) {
    return NextResponse.json(
      { error: "Title must be between 1 and 50 characters" },
      { status: 400 },
    );
  }

  return NextResponse.json({ title: title.trim() }, { status: 201 });
}
