"use client";

import { useState } from "react";

import { downloadPptx } from "../lib/downloadPptx";
import { honoClient } from "../lib/honoClient";
import { SlidePreview } from "./SlidePreview";
import { DEFAULT_XML, XmlEditor } from "./XmlEditor";

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_XML);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setIsDownloading(true);
    setError(null);

    try {
      await downloadPptx(xmlValue);
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "ダウンロードに失敗しました";
      setError(message);
    } finally {
      setIsDownloading(false);
    }
  }

  async function handlePreview() {
    setIsLoading(true);
    setError(null);

    try {
      const res = await honoClient.api.preview.$post({
        json: { xml: xmlValue },
      });

      const data = await res.json();

      if ("error" in data) {
        setError(data.error.message);
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
        <button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-4 py-2 text-sm disabled:opacity-50"
          onClick={() => void handleDownload()}
          disabled={isDownloading}
        >
          ダウンロード
        </button>
      </div>
      <footer className="text-muted-foreground flex items-center justify-center border-t px-4 py-2 text-xs">
        <span>
          Powered by{" "}
          <a
            href="https://github.com/hirokisakabe/pom"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            pom
          </a>
        </span>
      </footer>
    </div>
  );
}
