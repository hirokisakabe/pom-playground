"use client";

import { useEffect, useRef, useState } from "react";

import { downloadPptx } from "../lib/downloadPptx";
import { honoClient } from "../lib/honoClient";
import { SlidePreview } from "./SlidePreview";
import { DEFAULT_XML, XmlEditor } from "./XmlEditor";

const DEBOUNCE_MS = 500;

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_XML);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isInitialRenderRef = useRef(true);

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

  async function executePreview() {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);

    try {
      const res = await honoClient.api.preview.$post(
        { json: { xml: xmlValue } },
        { init: { signal: controller.signal } },
      );

      const data = await res.json();

      if ("error" in data) {
        setError(data.error.message);
        return;
      }

      setSvgs(data.svgs);
      setCurrentPage(1);
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") {
        return;
      }
      setError("プレビューの生成に失敗しました");
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
          onClick={handleManualPreview}
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
    </div>
  );
}
