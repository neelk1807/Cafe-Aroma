import { NextResponse } from "next/server";
import { franc } from "franc";
import langs from "langs";

export const runtime = "nodejs";

function detectTwoLetter(text: string): string {
  const code3 = franc(text || "", { minLength: 3 });   // 'eng', 'guj', 'hin', etc.
  if (code3 === "und") return "en";
  let two = "";
  try {
    const hit = langs.where("3", code3);
    two = (hit?.["1"] ?? "").toLowerCase();            // 'en', 'gu', 'hi', ...
  } catch {}
  // Handle Chinese specially for MyMemory
  if (two === "zh" || code3 === "cmn" || code3 === "zho") two = "zh-CN";
  return two || "en";
}

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json();
    if (!text?.trim() || !targetLang) {
      return NextResponse.json({ error: "Text and target language are required" }, { status: 400 });
    }

    const sourceLang = detectTwoLetter(text);

    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", text);
    url.searchParams.set("langpair", `${sourceLang}|${targetLang}`);
    url.searchParams.set("mt", "1");                   // machine-translation only

    const r = await fetch(url.toString());
    const data = await r.json();

    const translatedText = data?.responseData?.translatedText;
    if (!translatedText) {
      return NextResponse.json({ error: "Translation failed", details: data }, { status: 502 });
    }

    return NextResponse.json({ translatedText, detected: sourceLang });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return NextResponse.json({ error: "Internal server error", details: String(e) }, { status: 500 });
  }
}
