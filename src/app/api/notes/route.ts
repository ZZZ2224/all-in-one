import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const payload =
    typeof body === "object" && body !== null && !Array.isArray(body)
      ? (body as { title?: unknown; content?: unknown })
      : {};

  const title = payload.title;
  const content = payload.content;
  const normalizedTitle = typeof title === "string" ? title.trim() : "";

  if (normalizedTitle.length === 0 || normalizedTitle.length > 50) {
    return NextResponse.json(
      { error: "Title must be between 1 and 50 characters" },
      { status: 400 },
    );
  }

  if (content !== undefined && typeof content !== "string") {
    return NextResponse.json({ error: "Content must be a string" }, { status: 400 });
  }

  return NextResponse.json(
    { title: normalizedTitle, content: content ?? "" },
    { status: 201 },
  );
}
