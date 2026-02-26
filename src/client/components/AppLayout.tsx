"use client";

import { ChevronDown, Download, ExternalLink, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { downloadPptx } from "../lib/downloadPptx";
import { honoClient } from "../lib/honoClient";
import type { SampleTemplate } from "../lib/sampleTemplates";
import { DEFAULT_TEMPLATE, SAMPLE_TEMPLATES } from "../lib/sampleTemplates";
import type { StructuredError } from "./SlidePreview";
import { SlidePreview } from "./SlidePreview";
import { XmlEditor } from "./XmlEditor";
import { XmlReferencePanel } from "./XmlReferencePanel";

const DEBOUNCE_MS = 500;

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_TEMPLATE.xml);
  const [svgs, setSvgs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errors, setErrors] = useState<StructuredError[] | null>(null);
  const [pendingTemplate, setPendingTemplate] = useState<SampleTemplate | null>(
    null,
  );
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

  function handleSelectTemplate(template: SampleTemplate) {
    if (xmlValue === template.xml) {
      return;
    }
    if (xmlValue.trim() !== "") {
      setPendingTemplate(template);
    } else {
      setXmlValue(template.xml);
    }
  }

  function handleConfirmTemplate() {
    if (pendingTemplate) {
      setXmlValue(pendingTemplate.xml);
      setPendingTemplate(null);
    }
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b px-4 py-2">
        <span className="text-lg font-semibold">pom playground</span>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors">
                <ChevronDown className="size-4" />
                <span>サンプル</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {SAMPLE_TEMPLATES.map((template) => (
                <DropdownMenuItem
                  key={template.id}
                  onClick={() => {
                    handleSelectTemplate(template);
                  }}
                >
                  {template.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <a
            href="https://github.com/hirokisakabe/pom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors"
          >
            <ExternalLink className="size-4" />
            <span>pom</span>
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
      <AlertDialog
        open={pendingTemplate !== null}
        onOpenChange={(open) => {
          if (!open) setPendingTemplate(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>サンプルに置き換えますか？</AlertDialogTitle>
            <AlertDialogDescription>
              現在のエディタの内容が失われます。サンプルテンプレートに置き換えてもよろしいですか？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmTemplate}>
              置き換える
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
