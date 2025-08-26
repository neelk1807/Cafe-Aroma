"use client";
import { useState } from "react";

export default function Translator() {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("es");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, targetLang }),
      });

      const data = await res.json();

      if (res.ok) {
        // <-- was `data.translated`; your API returns { translatedText }
        setResult(data.translatedText);
      } else {
        alert(data?.error ?? "Translation failed");
        console.error(data?.details);
      }
    } catch (e) {
      alert("Error connecting to translation API");
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-container p-4 bg-white rounded shadow-md max-w-md mx-auto">
      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full p-2 border rounded mb-4 cursor-pointer"
        value={targetLang}
        onChange={(e) => setTargetLang(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="hi">Hindi</option>
        <option value="gu">Gujarati</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese (simplified)</option>
      </select>

      <button
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 cursor-pointer"
        onClick={handleTranslate}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}
      </button>

      {result && (
        <div className="mt-4">
          <h4 className="font-semibold mb-1">Translated Text:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
