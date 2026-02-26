"use client";

import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface SlidePreviewProps {
  svgs: string[];
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export function SlidePreview({
  svgs,
  isLoading,
  error,
  currentPage,
  onPageChange,
}: SlidePreviewProps) {
  const totalPages = svgs.length;

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
      <div className="bg-muted flex min-h-0 flex-1 items-center justify-center p-4">
        <div
          className="h-full w-full [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svgs[currentPage - 1] }}
        />
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
