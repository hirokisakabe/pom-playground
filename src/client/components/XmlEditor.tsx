"use client";

import { xml } from "@codemirror/lang-xml";
import { EditorState } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";
import { useEffect, useRef } from "react";

export const DEFAULT_XML = `<VStack w="max" h="max" padding="24" backgroundColor="F8F9FC" gap="16">
  <HStack w="max" gap="0" alignItems="center">
    <Shape w="8" h="48" shapeType="rect" fill='{"color":"0E0D6A"}' />
    <VStack padding='{"top":0,"right":0,"bottom":0,"left":16}' gap="2">
      <Text fontPx="28" color="0E0D6A" bold="true">2025年度 第3四半期 決算サマリー</Text>
      <Text fontPx="12" color="5A5A8A">Financial Results Summary for Q3 FY2025｜2025年10月1日～12月31日</Text>
    </VStack>
  </HStack>
  <HStack w="max" gap="16" alignItems="start">
    <VStack w="48%" gap="12">
      <Box w="max" padding="12" backgroundColor="0E0D6A" border='{"color":"0E0D6A","width":1}'>
        <Text fontPx="14" color="FFFFFF" alignText="center" bold="true">主要経営指標（連結）</Text>
      </Box>
      <Table w="max" columns='[{"width":140},{"width":110},{"width":110},{"width":80}]' rows='[{"cells":[{"text":"項目","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A1980"},{"text":"当期実績","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A1980"},{"text":"前年同期","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A1980"},{"text":"増減率","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A1980"}]},{"cells":[{"text":"売上高","fontPx":11,"color":"0E0D6A","bold":true,"backgroundColor":"E8EAF6"},{"text":"4,285億円","fontPx":11,"color":"1A1A1A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"3,892億円","fontPx":11,"color":"5A5A5A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"+10.1%","fontPx":11,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"}]},{"cells":[{"text":"営業利益","fontPx":11,"color":"0E0D6A","bold":true,"backgroundColor":"E8EAF6"},{"text":"512億円","fontPx":11,"color":"1A1A1A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"438億円","fontPx":11,"color":"5A5A5A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"+16.9%","fontPx":11,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"}]},{"cells":[{"text":"経常利益","fontPx":11,"color":"0E0D6A","bold":true,"backgroundColor":"E8EAF6"},{"text":"498億円","fontPx":11,"color":"1A1A1A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"421億円","fontPx":11,"color":"5A5A5A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"+18.3%","fontPx":11,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"}]},{"cells":[{"text":"当期純利益","fontPx":11,"color":"0E0D6A","bold":true,"backgroundColor":"E8EAF6"},{"text":"328億円","fontPx":11,"color":"1A1A1A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"276億円","fontPx":11,"color":"5A5A5A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"+18.8%","fontPx":11,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"}]},{"cells":[{"text":"営業利益率","fontPx":11,"color":"0E0D6A","bold":true,"backgroundColor":"E8EAF6"},{"text":"11.9%","fontPx":11,"color":"1A1A1A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"11.3%","fontPx":11,"color":"5A5A5A","alignText":"right","backgroundColor":"FFFFFF"},{"text":"+0.6pt","fontPx":11,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"}]}]' defaultRowHeight="38" />
      <Box w="max" padding="10" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}'>
        <VStack gap="6">
          <Text fontPx="11" color="0E0D6A" bold="true">【セグメント別売上構成】</Text>
          <HStack gap="8">
            <Box padding="6" backgroundColor="E8EAF6" border='{"color":"0E0D6A","width":1}'>
              <VStack gap="2" alignItems="center">
                <Text fontPx="9" color="0E0D6A">デジタル事業</Text>
                <Text fontPx="11" color="0E0D6A" bold="true">1,842億円</Text>
                <Text fontPx="9" color="5A5A8A">43.0%</Text>
              </VStack>
            </Box>
            <Box padding="6" backgroundColor="FFF8E1" border='{"color":"F9A825","width":1}'>
              <VStack gap="2" alignItems="center">
                <Text fontPx="9" color="E65100">ソリューション</Text>
                <Text fontPx="11" color="E65100" bold="true">1,285億円</Text>
                <Text fontPx="9" color="FF8F00">30.0%</Text>
              </VStack>
            </Box>
            <Box padding="6" backgroundColor="E8F5E9" border='{"color":"2E7D32","width":1}'>
              <VStack gap="2" alignItems="center">
                <Text fontPx="9" color="1B5E20">その他</Text>
                <Text fontPx="11" color="1B5E20" bold="true">1,158億円</Text>
                <Text fontPx="9" color="388E3C">27.0%</Text>
              </VStack>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </VStack>
    <VStack w="52%" gap="12">
      <Box w="max" padding="12" backgroundColor="0E0D6A" border='{"color":"0E0D6A","width":1}'>
        <Text fontPx="14" color="FFFFFF" alignText="center" bold="true">前年同期比推移（四半期別）</Text>
      </Box>
      <Box w="max" padding="12" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}'>
        <Chart w="480" h="180" chartType="bar" data='[{"name":"売上高（億円）","labels":["Q1","Q2","Q3","Q4予想"],"values":[3980,4120,4285,4450]},{"name":"営業利益（億円）","labels":["Q1","Q2","Q3","Q4予想"],"values":[465,488,512,535]}]' showLegend="true" chartColors='["0E0D6A","5C6BC0"]' />
      </Box>
      <Box w="max" padding="10" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}'>
        <Table w="max" columns='[{"width":100},{"width":90},{"width":90},{"width":90},{"width":90}]' rows='[{"cells":[{"text":"指標","fontPx":10,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"3949AB"},{"text":"Q1","fontPx":10,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"3949AB"},{"text":"Q2","fontPx":10,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"3949AB"},{"text":"Q3","fontPx":10,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"3949AB"},{"text":"通期予想","fontPx":10,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"3949AB"}]},{"cells":[{"text":"売上高成長率","fontPx":10,"color":"0E0D6A","backgroundColor":"E8EAF6"},{"text":"+8.2%","fontPx":10,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"+9.5%","fontPx":10,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"+10.1%","fontPx":10,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"},{"text":"+9.8%","fontPx":10,"color":"E65100","alignText":"center","backgroundColor":"FFF3E0"}]},{"cells":[{"text":"営業利益率","fontPx":10,"color":"0E0D6A","backgroundColor":"E8EAF6"},{"text":"11.7%","fontPx":10,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"11.8%","fontPx":10,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"11.9%","fontPx":10,"color":"0D7A3E","bold":true,"alignText":"center","backgroundColor":"E3F2E8"},{"text":"12.0%","fontPx":10,"color":"E65100","alignText":"center","backgroundColor":"FFF3E0"}]}]' defaultRowHeight="28" />
      </Box>
    </VStack>
  </HStack>
  <Box w="max" padding="12" backgroundColor="0E0D6A">
    <Text fontPx="14" color="FFFFFF" alignText="center" bold="true">第3四半期 主要トピックス</Text>
  </Box>
  <HStack w="max" gap="12">
    <Box w="25%" padding="10" backgroundColor="FFFFFF" border='{"color":"0E0D6A","width":2}'>
      <VStack gap="6" alignItems="center">
        <Shape w="36" h="36" shapeType="ellipse" fill='{"color":"E8EAF6"}' fontPx="12" color="0E0D6A">01</Shape>
        <Text fontPx="11" color="0E0D6A" alignText="center" bold="true">新規事業の収益寄与</Text>
        <Text fontPx="9" color="3C3C3C" alignText="center">AI・クラウド事業が前年比+42%成長、売上構成比15%に拡大。SaaS型サービスのARR（年間経常収益）が280億円を突破</Text>
      </VStack>
    </Box>
    <Box w="25%" padding="10" backgroundColor="FFFFFF" border='{"color":"0E0D6A","width":2}'>
      <VStack gap="6" alignItems="center">
        <Shape w="36" h="36" shapeType="ellipse" fill='{"color":"E8EAF6"}' fontPx="12" color="0E0D6A">02</Shape>
        <Text fontPx="11" color="0E0D6A" alignText="center" bold="true">コスト最適化の進展</Text>
        <Text fontPx="9" color="3C3C3C" alignText="center">全社DX推進により販管費率が前年比1.2pt改善。物流拠点統合で年間45億円のコスト削減を実現</Text>
      </VStack>
    </Box>
    <Box w="25%" padding="10" backgroundColor="FFFFFF" border='{"color":"0E0D6A","width":2}'>
      <VStack gap="6" alignItems="center">
        <Shape w="36" h="36" shapeType="ellipse" fill='{"color":"E8EAF6"}' fontPx="12" color="0E0D6A">03</Shape>
        <Text fontPx="11" color="0E0D6A" alignText="center" bold="true">主力製品の成長加速</Text>
        <Text fontPx="9" color="3C3C3C" alignText="center">フラッグシップ製品「NEXUS Pro」が累計導入社数5,000社突破。大企業向けエンタープライズ版の受注が好調</Text>
      </VStack>
    </Box>
    <Box w="25%" padding="10" backgroundColor="FFFFFF" border='{"color":"0E0D6A","width":2}'>
      <VStack gap="6" alignItems="center">
        <Shape w="36" h="36" shapeType="ellipse" fill='{"color":"E8EAF6"}' fontPx="12" color="0E0D6A">04</Shape>
        <Text fontPx="11" color="0E0D6A" alignText="center" bold="true">海外展開の加速</Text>
        <Text fontPx="9" color="3C3C3C" alignText="center">ASEAN地域売上が前年比+28%。シンガポール拠点を起点に東南アジア6カ国での事業展開を本格化</Text>
      </VStack>
    </Box>
  </HStack>
  <HStack w="max" gap="0" alignItems="center" justifyContent="spaceBetween">
    <Text fontPx="9" color="7A7A9A">※本資料に記載の数値はダミーデータです。実際の企業業績とは関係ありません。</Text>
    <Text fontPx="9" color="0E0D6A">株式会社サンプルホールディングス｜IR資料｜2025年1月発表</Text>
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
