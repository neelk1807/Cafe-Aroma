// src/app/api/remove-bg/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const apiKey = process.env.REMOVE_BG_API_KEY; // ← Your API key

  const buffer = Buffer.from(await file.arrayBuffer());

  const response = await fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey ?? "",
    },
    body: (() => {
      const body = new FormData();
      body.append("image_file", new Blob([buffer]), file.name);
      body.append("size", "auto");
      return body;
    })(),
  });

  if (!response.ok) {
    const error = await response.text();
    return NextResponse.json({ error }, { status: response.status });
  }

  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  return NextResponse.json({ image: `data:image/png;base64,${base64}` });
}
