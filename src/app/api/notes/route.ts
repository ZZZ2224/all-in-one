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
      ? (body as { title?: unknown; link?: unknown })
      : {};

  const normalizedTitle =
    typeof payload.title === "string" ? payload.title.trim() : "";
  const link = typeof payload.link === "string" ? payload.link.trim() : "";

  if (normalizedTitle.length === 0 || normalizedTitle.length > 50) {
    return NextResponse.json(
      { error: "Title must be between 1 and 50 characters" },
      { status: 400 },
    );
  }

  if (!/^https?:\/\//i.test(link)) {
    return NextResponse.json(
      { error: "Link must start with http:// or https://" },
      { status: 400 },
    );
  }

  return NextResponse.json({ title: normalizedTitle, link }, { status: 201 });
}
