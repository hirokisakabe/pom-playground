"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Loader2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { copySvgAsPng } from "../lib/copySvgAsPng";

type CopyStatus = "idle" | "copying" | "success" | "error";

interface SlidePreviewProps {
  xml: string;
  svgs: string[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function SlidePreview({
  xml,
  svgs,
  isLoading,
  error,
  currentPage,
  onPageChange,
}: SlidePreviewProps) {
  const totalPages = svgs.length;
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  async function handleCopyAsPng() {
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
      copyTimerRef.current = null;
    }
    setCopyStatus("copying");
    try {
      await copySvgAsPng(xml, currentPage);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
    copyTimerRef.current = setTimeout(() => {
      setCopyStatus("idle");
      copyTimerRef.current = null;
    }, 2000);
  }

  if (isLoading) {
    return (
      <div className="bg-muted flex h-full items-center justify-center rounded-md border">
        <div className="text-muted-foreground flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>プレビューを生成中...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-muted flex h-full items-center justify-center rounded-md border">
        <p className="text-destructive text-sm">{error}</p>
      </div>
    );
  }

  if (totalPages === 0) {
    return (
      <div className="bg-muted flex h-full items-center justify-center rounded-md border">
        <p className="text-muted-foreground">
          XML を編集するとプレビューが自動的に表示されます
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-md border">
      <div className="bg-muted relative flex min-h-0 flex-1 items-center justify-center p-4">
        <div
          className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svgs[currentPage - 1] }}
        />
        <button
          className="bg-background/80 hover:bg-background absolute top-2 right-2 rounded-md p-2 backdrop-blur-sm transition-colors disabled:opacity-50"
          onClick={() => void handleCopyAsPng()}
          disabled={copyStatus === "copying"}
          title="画像をコピー"
          aria-label="画像をコピー"
        >
          {copyStatus === "idle" && <Copy className="h-4 w-4" />}
          {copyStatus === "copying" && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          {copyStatus === "success" && (
            <Check className="h-4 w-4 text-green-600" />
          )}
          {copyStatus === "error" && <X className="text-destructive h-4 w-4" />}
        </button>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 border-t px-4 py-2">
          <button
            className="hover:bg-muted rounded p-1 disabled:opacity-50"
            disabled={currentPage <= 1}
            onClick={() => {
              onPageChange(currentPage - 1);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm">
            {currentPage} / {totalPages}
          </span>
          <button
            className="hover:bg-muted rounded p-1 disabled:opacity-50"
            disabled={currentPage >= totalPages}
            onClick={() => {
              onPageChange(currentPage + 1);
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
