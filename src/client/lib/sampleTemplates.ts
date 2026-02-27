export interface SampleTemplate {
  id: string;
  name: string;
  xml: string;
}

export const SAMPLE_TEMPLATES: SampleTemplate[] = [
  {
    id: "financial-summary",
    name: "決算サマリー",
    xml: `<VStack w="max" h="max" padding="24" backgroundColor="F8F9FC" gap="16">
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
      <Table w="max" defaultRowHeight="38">
        <Column width="140" />
        <Column width="110" />
        <Column width="110" />
        <Column width="80" />
        <Row>
          <Cell fontPx="11" color="FFFFFF" bold="true" alignText="center" backgroundColor="1A1980">項目</Cell>
          <Cell fontPx="11" color="FFFFFF" bold="true" alignText="center" backgroundColor="1A1980">当期実績</Cell>
          <Cell fontPx="11" color="FFFFFF" bold="true" alignText="center" backgroundColor="1A1980">前年同期</Cell>
          <Cell fontPx="11" color="FFFFFF" bold="true" alignText="center" backgroundColor="1A1980">増減率</Cell>
        </Row>
        <Row>
          <Cell fontPx="11" color="0E0D6A" bold="true" backgroundColor="E8EAF6">売上高</Cell>
          <Cell fontPx="11" color="1A1A1A" alignText="right" backgroundColor="FFFFFF">4,285億円</Cell>
          <Cell fontPx="11" color="5A5A5A" alignText="right" backgroundColor="FFFFFF">3,892億円</Cell>
          <Cell fontPx="11" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+10.1%</Cell>
        </Row>
        <Row>
          <Cell fontPx="11" color="0E0D6A" bold="true" backgroundColor="E8EAF6">営業利益</Cell>
          <Cell fontPx="11" color="1A1A1A" alignText="right" backgroundColor="FFFFFF">512億円</Cell>
          <Cell fontPx="11" color="5A5A5A" alignText="right" backgroundColor="FFFFFF">438億円</Cell>
          <Cell fontPx="11" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+16.9%</Cell>
        </Row>
        <Row>
          <Cell fontPx="11" color="0E0D6A" bold="true" backgroundColor="E8EAF6">経常利益</Cell>
          <Cell fontPx="11" color="1A1A1A" alignText="right" backgroundColor="FFFFFF">498億円</Cell>
          <Cell fontPx="11" color="5A5A5A" alignText="right" backgroundColor="FFFFFF">421億円</Cell>
          <Cell fontPx="11" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+18.3%</Cell>
        </Row>
        <Row>
          <Cell fontPx="11" color="0E0D6A" bold="true" backgroundColor="E8EAF6">当期純利益</Cell>
          <Cell fontPx="11" color="1A1A1A" alignText="right" backgroundColor="FFFFFF">328億円</Cell>
          <Cell fontPx="11" color="5A5A5A" alignText="right" backgroundColor="FFFFFF">276億円</Cell>
          <Cell fontPx="11" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+18.8%</Cell>
        </Row>
        <Row>
          <Cell fontPx="11" color="0E0D6A" bold="true" backgroundColor="E8EAF6">営業利益率</Cell>
          <Cell fontPx="11" color="1A1A1A" alignText="right" backgroundColor="FFFFFF">11.9%</Cell>
          <Cell fontPx="11" color="5A5A5A" alignText="right" backgroundColor="FFFFFF">11.3%</Cell>
          <Cell fontPx="11" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+0.6pt</Cell>
        </Row>
      </Table>
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
        <Chart w="480" h="180" chartType="bar" showLegend="true" chartColors='["0E0D6A","5C6BC0"]'>
          <Series name="売上高（億円）">
            <DataPoint label="Q1" value="3980" />
            <DataPoint label="Q2" value="4120" />
            <DataPoint label="Q3" value="4285" />
            <DataPoint label="Q4予想" value="4450" />
          </Series>
          <Series name="営業利益（億円）">
            <DataPoint label="Q1" value="465" />
            <DataPoint label="Q2" value="488" />
            <DataPoint label="Q3" value="512" />
            <DataPoint label="Q4予想" value="535" />
          </Series>
        </Chart>
      </Box>
      <Box w="max" padding="10" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}'>
        <Table w="max" defaultRowHeight="28">
          <Column width="100" />
          <Column width="90" />
          <Column width="90" />
          <Column width="90" />
          <Column width="90" />
          <Row>
            <Cell fontPx="10" color="FFFFFF" bold="true" alignText="center" backgroundColor="3949AB">指標</Cell>
            <Cell fontPx="10" color="FFFFFF" bold="true" alignText="center" backgroundColor="3949AB">Q1</Cell>
            <Cell fontPx="10" color="FFFFFF" bold="true" alignText="center" backgroundColor="3949AB">Q2</Cell>
            <Cell fontPx="10" color="FFFFFF" bold="true" alignText="center" backgroundColor="3949AB">Q3</Cell>
            <Cell fontPx="10" color="FFFFFF" bold="true" alignText="center" backgroundColor="3949AB">通期予想</Cell>
          </Row>
          <Row>
            <Cell fontPx="10" color="0E0D6A" backgroundColor="E8EAF6">売上高成長率</Cell>
            <Cell fontPx="10" color="1A1A1A" alignText="center" backgroundColor="FFFFFF">+8.2%</Cell>
            <Cell fontPx="10" color="1A1A1A" alignText="center" backgroundColor="FFFFFF">+9.5%</Cell>
            <Cell fontPx="10" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">+10.1%</Cell>
            <Cell fontPx="10" color="E65100" alignText="center" backgroundColor="FFF3E0">+9.8%</Cell>
          </Row>
          <Row>
            <Cell fontPx="10" color="0E0D6A" backgroundColor="E8EAF6">営業利益率</Cell>
            <Cell fontPx="10" color="1A1A1A" alignText="center" backgroundColor="FFFFFF">11.7%</Cell>
            <Cell fontPx="10" color="1A1A1A" alignText="center" backgroundColor="FFFFFF">11.8%</Cell>
            <Cell fontPx="10" color="0D7A3E" bold="true" alignText="center" backgroundColor="E3F2E8">11.9%</Cell>
            <Cell fontPx="10" color="E65100" alignText="center" backgroundColor="FFF3E0">12.0%</Cell>
          </Row>
        </Table>
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
</VStack>`,
  },
  {
    id: "product-landing",
    name: "プロダクト紹介",
    xml: `<VStack w="1280" h="max" padding="48" gap="40" backgroundColor="F8FAFC" alignItems="stretch">

  <VStack gap="16" alignItems="center">
    <Shape shapeType="roundRect" w="180" h="32" fontPx="14" bold="true"
           fill='{"color": "DBEAFE"}' color="2563EB" borderRadius="16">
      NEW RELEASE
    </Shape>
    <Text fontPx="48" bold="true" color="0F172A" alignText="center">
      次世代の業務効率化プラットフォーム
    </Text>
    <Text fontPx="18" color="64748B" alignText="center" lineSpacingMultiple="1.5">
      煩雑なプロセスを自動化し、チームの生産性を最大化します。
      導入から運用まで、専門チームが徹底サポート。
    </Text>
  </VStack>

  <HStack gap="24" alignItems="stretch">
    <Box w="31%" padding="32" backgroundColor="FFFFFF" borderRadius="16" shadow='{"type": "outer", "opacity": 0.1, "blur": 10, "angle": 90, "offset": 4}'>
      <VStack gap="16" alignItems="start">
        <Shape shapeType="ellipse" w="48" h="48" fill='{"color": "EEF2FF"}'>
          <Text fontPx="24" color="4F46E5">⚡</Text>
        </Shape>
        <Text fontPx="20" bold="true" color="0F172A">圧倒的なスピード</Text>
        <Text fontPx="14" color="475569" lineSpacingMultiple="1.4">
          独自のエンジンにより、従来のツールと比較して約5倍の処理速度を実現しました。
        </Text>
      </VStack>
    </Box>

    <Box w="31%" padding="32" backgroundColor="FFFFFF" borderRadius="16" shadow='{"type": "outer", "opacity": 0.1, "blur": 10, "angle": 90, "offset": 4}'>
      <VStack gap="16" alignItems="start">
        <Shape shapeType="ellipse" w="48" h="48" fill='{"color": "ECFDF5"}'>
          <Text fontPx="24" color="059669">🔒</Text>
        </Shape>
        <Text fontPx="20" bold="true" color="0F172A">高度なセキュリティ</Text>
        <Text fontPx="14" color="475569" lineSpacingMultiple="1.4">
          金融機関レベルの暗号化技術を標準搭載。大切なデータを安全に守ります。
        </Text>
      </VStack>
    </Box>

    <Box w="31%" padding="32" backgroundColor="FFFFFF" borderRadius="16" shadow='{"type": "outer", "opacity": 0.1, "blur": 10, "angle": 90, "offset": 4}'>
      <VStack gap="16" alignItems="start">
        <Shape shapeType="ellipse" w="48" h="48" fill='{"color": "FFFBEB"}'>
          <Text fontPx="24" color="D97706">📱</Text>
        </Shape>
        <Text fontPx="20" bold="true" color="0F172A">マルチデバイス対応</Text>
        <Text fontPx="14" color="475569" lineSpacingMultiple="1.4">
          PC、スマートフォン、タブレット。場所を選ばず、いつでもどこでもアクセス可能。
        </Text>
      </VStack>
    </Box>
  </HStack>

  <Box w="max" padding="40" backgroundColor="1E293B" borderRadius="16">
    <HStack gap="40" alignItems="center" justifyContent="spaceBetween">
      <VStack gap="8" w="60%">
        <Text fontPx="24" bold="true" color="FFFFFF">まずは無料トライアルから</Text>
        <Text fontPx="14" color="94A3B8">すべての機能を14日間無料でお試しいただけます。</Text>
      </VStack>
      <Shape shapeType="roundRect" w="240" h="56" fontPx="18" bold="true"
             fill='{"color": "2563EB"}' color="FFFFFF" borderRadius="8">
        無料で始める
      </Shape>
    </HStack>
  </Box>

</VStack>`,
  },
  {
    id: "pricing-plan",
    name: "料金プラン",
    xml: `<VStack h="max" w="max" padding="48" backgroundColor="F8FAFC" gap="40" alignItems="center">
  <VStack gap="12" alignItems="center">
    <Shape shapeType="roundRect" w="140" h="32" fill='{"color": "EEF2FF"}' color="6366F1" fontPx="12" bold="true">PRICING</Shape>
    <Text fontPx="40" color="1E293B" bold="true">シンプルで、迷わない料金プラン</Text>
    <Text fontPx="16" color="64748B">すべてのプランに14日間の無料トライアルがつきます</Text>
  </VStack>

  <HStack gap="24" alignItems="end">
    <Box w="30%" padding="32" backgroundColor="FFFFFF" borderRadius="32" shadow='{"type": "outer", "opacity": 0.05, "blur": 20, "offset": 10}'>
      <VStack gap="24">
        <Shape shapeType="ellipse" w="56" h="56" fill='{"color":"E0F7FA"}' color="0891B2" fontPx="24" bold="true">🌱</Shape>
        <VStack gap="4">
          <Text fontPx="20" color="0891B2" bold="true">ライト</Text>
          <HStack gap="4" alignItems="end">
            <Text fontPx="36" bold="true" color="1E293B">¥0</Text>
            <Text fontPx="14" color="94A3B8">/月</Text>
          </HStack>
        </VStack>
        <Text fontPx="13" color="64748B" bullet="true" lineSpacingMultiple="1.8">
          最大3プロジェクト
          基本テンプレート利用
          コミュニティサポート
        </Text>
        <Shape shapeType="roundRect" w="max" h="56" fill='{"color": "F1F5F9"}' color="64748B" fontPx="15" bold="true">無料で始める</Shape>
      </VStack>
    </Box>

    <Box w="32%" padding="40" backgroundColor="FFFFFF" borderRadius="32" border='{"color":"6366F1","width":3}' shadow='{"type": "outer", "opacity": 0.15, "blur": 30, "offset": 15}'>
      <VStack gap="24">
        <HStack justifyContent="spaceBetween" alignItems="center">
          <Shape shapeType="ellipse" w="64" h="64" fill='{"color":"EEF2FF"}' color="6366F1" fontPx="28" bold="true">🚀</Shape>
          <Shape shapeType="roundRect" w="100" h="28" fill='{"color": "6366F1"}' color="FFFFFF" fontPx="11" bold="true">一番人気！</Shape>
        </HStack>
        <VStack gap="4">
          <Text fontPx="24" color="6366F1" bold="true">スタンダード</Text>
          <HStack gap="4" alignItems="end">
            <Text fontPx="44" bold="true" color="1E293B">¥4,980</Text>
            <Text fontPx="14" color="94A3B8">/月</Text>
          </HStack>
        </VStack>
        <Text fontPx="14" color="1E293B" bullet='{"type": "bullet"}' lineSpacingMultiple="1.8" bold="true">
          プロジェクト無制限
          AIアシスタント機能
          高度な分析レポート
          24時間メールサポート
        </Text>
        <Shape shapeType="roundRect" w="max" h="60" fill='{"color": "6366F1"}' shadow='{"type": "outer", "opacity": 0.3, "blur": 10}' color="FFFFFF" fontPx="16" bold="true">14日間無料で試す</Shape>
      </VStack>
    </Box>

    <Box w="30%" padding="32" backgroundColor="FFFFFF" borderRadius="32" shadow='{"type": "outer", "opacity": 0.05, "blur": 20, "offset": 10}'>
      <VStack gap="24">
        <Shape shapeType="ellipse" w="56" h="56" fill='{"color":"FFFBEB"}' color="D97706" fontPx="24" bold="true">💎</Shape>
        <VStack gap="4">
          <Text fontPx="20" color="D97706" bold="true">ビジネス</Text>
          <HStack gap="4" alignItems="end">
            <Text fontPx="32" bold="true" color="1E293B">要お見積り</Text>
          </HStack>
        </VStack>
        <Text fontPx="13" color="64748B" bullet="true" lineSpacingMultiple="1.8">
          専任サクセスマネージャー
          SSO / SAML認証
          操作ログ保存（無制限）
          個別トレーニング実施
        </Text>
        <Shape shapeType="roundRect" w="max" h="56" fill='{"color": "1E293B"}' color="FFFFFF" fontPx="15" bold="true">お問い合わせ</Shape>
      </VStack>
    </Box>
  </HStack>

  <Text fontPx="12" color="94A3B8">※価格はすべて税抜き表示です。年間契約の場合さらに20%OFFが適用されます。</Text>
</VStack>`,
  },
  {
    id: "chart-showcase",
    name: "チャート集",
    xml: `<VStack w="max" h="max" padding="32" backgroundColor="FAFAFA" gap="20">
  <VStack gap="4" alignItems="center">
    <Text fontPx="28" color="212121" bold="true">データビジュアライゼーション</Text>
    <Text fontPx="14" color="757575">各種チャートの表示サンプル</Text>
  </VStack>
  <HStack w="max" gap="16">
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">棒グラフ — 月別売上推移</Text>
        <Chart w="420" h="200" chartType="bar" showLegend="true" chartColors='["90CAF9","1565C0"]'>
          <Series name="2024年">
            <DataPoint label="1月" value="320" />
            <DataPoint label="2月" value="280" />
            <DataPoint label="3月" value="350" />
            <DataPoint label="4月" value="410" />
            <DataPoint label="5月" value="380" />
            <DataPoint label="6月" value="420" />
          </Series>
          <Series name="2025年">
            <DataPoint label="1月" value="380" />
            <DataPoint label="2月" value="340" />
            <DataPoint label="3月" value="400" />
            <DataPoint label="4月" value="460" />
            <DataPoint label="5月" value="440" />
            <DataPoint label="6月" value="500" />
          </Series>
        </Chart>
      </VStack>
    </Box>
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">折れ線グラフ — ユーザー数推移</Text>
        <Chart w="420" h="200" chartType="line" showLegend="true" chartColors='["1565C0","FF6F00"]'>
          <Series name="MAU">
            <DataPoint label="1月" value="12000" />
            <DataPoint label="2月" value="14500" />
            <DataPoint label="3月" value="16200" />
            <DataPoint label="4月" value="19800" />
            <DataPoint label="5月" value="22400" />
            <DataPoint label="6月" value="25000" />
          </Series>
          <Series name="DAU">
            <DataPoint label="1月" value="3200" />
            <DataPoint label="2月" value="3800" />
            <DataPoint label="3月" value="4500" />
            <DataPoint label="4月" value="5200" />
            <DataPoint label="5月" value="6100" />
            <DataPoint label="6月" value="7000" />
          </Series>
        </Chart>
      </VStack>
    </Box>
  </HStack>
  <HStack w="max" gap="16">
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">円グラフ — 顧客構成</Text>
        <Chart w="260" h="200" chartType="pie" showLegend="true" chartColors='["1565C0","26A69A","FF6F00","AB47BC","78909C"]'>
          <Series name="業種別">
            <DataPoint label="製造業" value="35" />
            <DataPoint label="IT" value="25" />
            <DataPoint label="金融" value="20" />
            <DataPoint label="小売" value="12" />
            <DataPoint label="その他" value="8" />
          </Series>
        </Chart>
      </VStack>
    </Box>
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">ドーナツ — 予算配分</Text>
        <Chart w="260" h="200" chartType="doughnut" showLegend="true" chartColors='["1565C0","2E7D32","FF6F00","AB47BC","78909C"]'>
          <Series name="予算">
            <DataPoint label="開発" value="40" />
            <DataPoint label="マーケ" value="20" />
            <DataPoint label="人件費" value="25" />
            <DataPoint label="インフラ" value="10" />
            <DataPoint label="その他" value="5" />
          </Series>
        </Chart>
      </VStack>
    </Box>
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">レーダー — スキル評価</Text>
        <Chart w="260" h="200" chartType="radar" showLegend="true" chartColors='["1565C0","FF6F00"]'>
          <Series name="チームA">
            <DataPoint label="技術" value="90" />
            <DataPoint label="管理" value="70" />
            <DataPoint label="企画" value="80" />
            <DataPoint label="営業" value="60" />
            <DataPoint label="分析" value="85" />
          </Series>
          <Series name="チームB">
            <DataPoint label="技術" value="75" />
            <DataPoint label="管理" value="85" />
            <DataPoint label="企画" value="70" />
            <DataPoint label="営業" value="80" />
            <DataPoint label="分析" value="65" />
          </Series>
        </Chart>
      </VStack>
    </Box>
  </HStack>
  <Box w="max" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
    <VStack gap="8">
      <Text fontPx="14" color="212121" bold="true">エリアチャート — トラフィック推移</Text>
      <Chart w="max" h="180" chartType="area" showLegend="true" chartColors='["1565C0","81D4FA"]'>
        <Series name="オーガニック">
          <DataPoint label="月" value="4500" />
          <DataPoint label="火" value="5200" />
          <DataPoint label="水" value="4800" />
          <DataPoint label="木" value="5800" />
          <DataPoint label="金" value="6200" />
          <DataPoint label="土" value="3200" />
          <DataPoint label="日" value="2800" />
        </Series>
        <Series name="広告">
          <DataPoint label="月" value="2000" />
          <DataPoint label="火" value="2400" />
          <DataPoint label="水" value="2200" />
          <DataPoint label="木" value="2800" />
          <DataPoint label="金" value="3100" />
          <DataPoint label="土" value="1500" />
          <DataPoint label="日" value="1200" />
        </Series>
      </Chart>
    </VStack>
  </Box>
</VStack>`,
  },
];

export const DEFAULT_TEMPLATE = SAMPLE_TEMPLATES[0];
