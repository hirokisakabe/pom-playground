"use client";

import { CircleHelp, Search } from "lucide-react";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface ElementInfo {
  name: string;
  description: string;
  attributes: string;
}

interface Section {
  title: string;
  elements: ElementInfo[];
}

const SECTIONS: Section[] = [
  {
    title: "レイアウト",
    elements: [
      {
        name: "VStack",
        description: "縦並びレイアウト",
        attributes: "gap, alignItems, justifyContent",
      },
      {
        name: "HStack",
        description: "横並びレイアウト",
        attributes: "gap, alignItems, justifyContent",
      },
      {
        name: "Box",
        description: "コンテナ（単一子要素）",
        attributes: "shadow",
      },
      {
        name: "Layer",
        description: "絶対位置配置",
        attributes: "子要素に x, y が必要",
      },
    ],
  },
  {
    title: "コンテンツ",
    elements: [
      {
        name: "Text",
        description: "テキスト",
        attributes:
          "fontPx, color, bold, italic, underline, strike, alignText, bullet",
      },
      {
        name: "Image",
        description: "画像",
        attributes: "src, sizing, shadow",
      },
      {
        name: "Table",
        description: "テーブル",
        attributes: "columns, rows, defaultRowHeight",
      },
      {
        name: "Shape",
        description: "シェイプ",
        attributes: "shapeType, text, fill, line, shadow",
      },
      {
        name: "Line",
        description: "線",
        attributes: "x1, y1, x2, y2, color, lineWidth, beginArrow, endArrow",
      },
    ],
  },
  {
    title: "図表",
    elements: [
      {
        name: "Chart",
        description: "チャート",
        attributes:
          "chartType (line/pie/bar/area/doughnut/radar), data, showLegend, title",
      },
      {
        name: "Timeline",
        description: "タイムライン",
        attributes: "direction, items",
      },
      {
        name: "Matrix",
        description: "2x2 マトリクス",
        attributes: "axes, quadrants, items",
      },
      {
        name: "Tree",
        description: "ツリー/組織図",
        attributes: "layout, nodeShape, data",
      },
      {
        name: "Flow",
        description: "フローチャート",
        attributes: "direction, nodes, connections",
      },
      {
        name: "ProcessArrow",
        description: "プロセス矢印",
        attributes: "direction, steps",
      },
    ],
  },
];

interface CommonAttribute {
  name: string;
  type: string;
  description: string;
}

const COMMON_ATTRIBUTES: CommonAttribute[] = [
  { name: "w", type: 'number | "max" | "%"', description: "幅" },
  { name: "h", type: 'number | "max" | "%"', description: "高さ" },
  {
    name: "padding",
    type: "number | {top,right,bottom,left}",
    description: "パディング",
  },
  {
    name: "backgroundColor",
    type: "string",
    description: "背景色（16進数）",
  },
  {
    name: "border",
    type: "{color, width, dashType}",
    description: "枠線",
  },
  { name: "borderRadius", type: "number", description: "角丸" },
  { name: "opacity", type: "number", description: "不透明度" },
];

export function XmlReferencePanel() {
  const [search, setSearch] = useState("");

  const lowerSearch = search.toLowerCase();

  const filteredSections = SECTIONS.map((section) => ({
    ...section,
    elements: section.elements.filter(
      (el) =>
        el.name.toLowerCase().includes(lowerSearch) ||
        el.description.toLowerCase().includes(lowerSearch) ||
        el.attributes.toLowerCase().includes(lowerSearch),
    ),
  })).filter((section) => section.elements.length > 0);

  const filteredCommonAttributes = COMMON_ATTRIBUTES.filter(
    (attr) =>
      attr.name.toLowerCase().includes(lowerSearch) ||
      attr.type.toLowerCase().includes(lowerSearch) ||
      attr.description.toLowerCase().includes(lowerSearch),
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="text-muted-foreground hover:text-foreground flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors"
          aria-label="XML リファレンスを開く"
          title="XML リファレンス"
        >
          <CircleHelp className="size-4" />
          <span>リファレンス</span>
        </button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md" side="right">
        <SheetHeader>
          <SheetTitle>XML リファレンス</SheetTitle>
          <SheetDescription>
            pom がサポートする XML 要素と属性の一覧
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-6 overflow-y-auto px-4 pb-4">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-2.5 left-2.5 size-4" />
            <input
              type="text"
              placeholder="要素名や属性で検索..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border py-2 pr-3 pl-9 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden"
            />
          </div>

          {filteredSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-sm font-semibold">{section.title}</h3>
              <div className="flex flex-col gap-2">
                {section.elements.map((el) => (
                  <div key={el.name} className="rounded-md border p-3 text-sm">
                    <div className="flex items-baseline gap-2">
                      <code className="bg-muted rounded px-1.5 py-0.5 text-xs font-semibold">
                        {el.name}
                      </code>
                      <span className="text-muted-foreground text-xs">
                        {el.description}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1.5 text-xs">
                      {el.attributes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCommonAttributes.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold">共通属性</h3>
              <div className="flex flex-col gap-2">
                {filteredCommonAttributes.map((attr) => (
                  <div
                    key={attr.name}
                    className="rounded-md border p-3 text-sm"
                  >
                    <div className="flex items-baseline gap-2">
                      <code className="bg-muted rounded px-1.5 py-0.5 text-xs font-semibold">
                        {attr.name}
                      </code>
                      <span className="text-muted-foreground text-xs">
                        {attr.description}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-1.5 font-mono text-xs">
                      {attr.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredSections.length === 0 &&
            filteredCommonAttributes.length === 0 && (
              <p className="text-muted-foreground py-8 text-center text-sm">
                一致する要素が見つかりません
              </p>
            )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
