"use client";

import { xml } from "@codemirror/lang-xml";
import { EditorState } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";
import { useEffect, useRef } from "react";

export const DEFAULT_XML = `<VStack w="100%" h="max" padding="40" gap="16">
  <VStack gap="8" alignItems="center">
    <Text fontPx="40" bold="true" color="1A237E">pom プレイグラウンド</Text>
    <Text fontPx="20" color="666666">XML でプレゼンテーションスライドを作成しよう</Text>
  </VStack>
  <Shape shapeType="rect" w="100%" h="4" fill='{"color":"42A5F5"}' />
  <ProcessArrow
    steps='[{"label":"XML を記述","color":"42A5F5","textColor":"FFFFFF"},{"label":"プレビュー確認","color":"66BB6A","textColor":"FFFFFF"},{"label":"スタイル調整","color":"FFA726","textColor":"FFFFFF"},{"label":"PPTX 出力","color":"EF5350","textColor":"FFFFFF"}]'
    itemWidth="260" itemHeight="50" fontPx="14" bold="true" />
  <HStack w="100%" gap="24">
    <VStack gap="12">
      <Text fontPx="22" bold="true" color="1A237E">サポート要素</Text>
      <Text fontPx="14" color="333333" lineSpacingMultiple="1.5" bullet='{"type":"bullet"}'>レイアウト: VStack, HStack, Box, Layer
コンテンツ: Text, Image, Table, Shape
データ可視化: Chart, Timeline, Matrix
図表: Flow, ProcessArrow, Tree</Text>
    </VStack>
    <Chart chartType="bar" h="280"
      data='[{"name":"2024","labels":["Q1","Q2","Q3","Q4"],"values":[65,80,95,110]}]'
      title="売上推移" showTitle="true" chartColors='["42A5F5"]' />
  </HStack>
</VStack>`;

interface XmlEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function XmlEditor({ value, onChange }: XmlEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!editorRef.current) return;

    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        xml(),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChangeRef.current(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={editorRef}
      className="h-full overflow-auto rounded-md border [&_.cm-editor]:h-full [&_.cm-scroller]:overflow-auto"
    />
  );
}
