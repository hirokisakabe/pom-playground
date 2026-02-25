"use client";

import { useState } from "react";

import { honoClient } from "../lib/honoClient";
import { SlidePreview } from "./SlidePreview";
import { DEFAULT_XML, XmlEditor } from "./XmlEditor";

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_XML);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePreview() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await honoClient.api.preview.$post({
        json: { xml: xmlValue },
      });

      const data = await res.json();

      if ("error" in data) {
        setError(data.error);
        return;
      }

      setSvgs(data.svgs);
      setCurrentPage(1);
    } catch {
      setError("プレビューの生成に失敗しました");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-4 p-4">
        <XmlEditor value={xmlValue} onChange={setXmlValue} />
        <SlidePreview
          svgs={svgs}
          isLoading={isLoading}
          error={error}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="flex gap-2 border-t p-4">
        <button
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm disabled:opacity-50"
          onClick={() => void handlePreview()}
          disabled={isLoading}
        >
          プレビュー更新
        </button>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-4 py-2 text-sm">
          ダウンロード
        </button>
      </div>
    </div>
  );
}
