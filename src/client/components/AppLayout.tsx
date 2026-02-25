"use client";

import { useState } from "react";

import { SlidePreview } from "./SlidePreview";
import { DEFAULT_XML, XmlEditor } from "./XmlEditor";

export function AppLayout() {
  const [xmlValue, setXmlValue] = useState(DEFAULT_XML);

  return (
    <div className="flex h-screen flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-2 gap-4 p-4">
        <XmlEditor value={xmlValue} onChange={setXmlValue} />
        <SlidePreview />
      </div>
      <div className="flex gap-2 border-t p-4">
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm">
          プレビュー更新
        </button>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-md px-4 py-2 text-sm">
          ダウンロード
        </button>
      </div>
    </div>
  );
}
