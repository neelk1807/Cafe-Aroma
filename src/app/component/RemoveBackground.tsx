"use client";

import { useState } from "react";

export default function RemoveBackground() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [outputs, setOutputs] = useState<{ name: string; image: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setLoading(true);
    const results: { name: string; image: string }[] = [];

    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch("/api/remove-bg", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (res.ok) {
          results.push({ name: file.name, image: data.image });
        } else {
          alert(
            `Error processing ${file.name}: ${data.error || "Unknown error"}`
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        alert(`Faild to remove background from ${file.name}`);
      }
    }

    setOutputs(results);
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 10) {
      alert("Please select a maximum of 10 images.");
      return;
    }
    setSelectedFiles(files);
    setOutputs([]);
  };

  return (
    <div className="imgbackremover my-15 grid justify-center">
      <div className="fileupload border-dashed border-gray-600 border-2 rounded-lg p-8 shadow-lg">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="file-input cursor-pointer border-blue-500 border-1 rounded-lg w-max p-2 bg-blue-500 text-white"
        />
        {""}
        <div className="btnremove mt-5">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-[#4b2e1e] text-white px-4 py-2 rounded-lg hover:bg-[#3a2417] transition-colors cursor-pointer"
          >
            {loading ? "Processing..." : "Remove Backgrounds"}
          </button>
        </div>
      </div>
      {outputs.length > 0 && (
        <div>
          <h3 className="my-3 text-green-700 font-bold">Processed Images:</h3>
          {outputs.map((output, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <p>{output.name}</p>
              <img
                src={output.image}
                alt={`output-${index}`}
                style={{ maxWidth: "100%" }}
              />
              <a href={output.image} download={`bg-removed-${output.name}`}>
                <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors cursor-pointer my-5">
                  Download
                </button>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
