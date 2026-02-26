"use client";

import { Download, ExternalLink, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { downloadPptx } from "../lib/downloadPptx";
import { honoClient } from "../lib/honoClient";
import type { StructuredError } from "./SlidePreview";
import { SlidePreview } from "./SlidePreview";
import { DEFAULT_XML, XmlEditor } from "./XmlEditor";
import { XmlReferencePanel } from "./XmlReferencePanel";

const DEBOUNCE_MS = 500;

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_XML);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errors, setErrors] = useState<StructuredError[] | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialRenderRef = useRef(true);

  async function handleDownload() {
    setIsDownloading(true);
    setErrors(null);

    try {
      await downloadPptx(xmlValue);
    } catch (e) {
      const message =
        e instanceof Error ? e.message : "ダウンロードに失敗しました";
      setErrors([{ type: "unknown", message }]);
    } finally {
      setIsDownloading(false);
    }
  }

  async function executePreview() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setErrors(null);

    try {
      const res = await honoClient.api.preview.$post(
        { json: { xml: xmlValue } },
        { init: { signal: controller.signal } },
      );

      const data = await res.json();

      if ("error" in data) {
        setErrors([data.error]);
        return;
      }

      setSvgs(data.svgs);
      setCurrentPage(1);
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") {
        return;
      }
      setErrors([
        { type: "unknown", message: "プレビューの生成に失敗しました" },
      ]);
    } finally {
      if (!controller.signal.aborted) {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    if (isInitialRenderRef.current) {
      isInitialRenderRef.current = false;
      return;
    }

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      void executePreview();
    }, DEBOUNCE_MS);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [xmlValue]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleManualPreview() {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    void executePreview();
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-lg font-semibold">pom playground</span>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/hirokisakabe/pom"
            target="_blank"
            rel="noopener noreferrer"
            title="XML→PPTX 変換ライブラリ"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors"
          >
            <ExternalLink className="size-4" />
            <span>pom</span>
          </a>
          <a
            href="https://github.com/hirokisakabe/pptx-glimpse"
            target="_blank"
            rel="noopener noreferrer"
            title="PPTX→SVG 変換ライブラリ"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors"
          >
            <ExternalLink className="size-4" />
            <span>pptx-glimpse</span>
          </a>
          <button
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors disabled:opacity-50"
            onClick={handleManualPreview}
            disabled={isLoading}
          >
            <RefreshCw className="size-4" />
            <span>プレビュー更新</span>
          </button>
          <button
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors disabled:opacity-50"
            onClick={() => void handleDownload()}
            disabled={isDownloading}
          >
            <Download className="size-4" />
            <span>ダウンロード</span>
          </button>
          <XmlReferencePanel />
        </div>
      </header>
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-4 p-4">
        <div className="min-h-0">
          <XmlEditor value={xmlValue} onChange={setXmlValue} />
        </div>
        <SlidePreview
          svgs={svgs}
          isLoading={isLoading}
          errors={errors}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
