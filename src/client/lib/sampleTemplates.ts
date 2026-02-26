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
        <Chart w="420" h="200" chartType="bar" data='[{"name":"2024年","labels":["1月","2月","3月","4月","5月","6月"],"values":[320,280,350,410,380,420]},{"name":"2025年","labels":["1月","2月","3月","4月","5月","6月"],"values":[380,340,400,460,440,500]}]' showLegend="true" chartColors='["90CAF9","1565C0"]' />
      </VStack>
    </Box>
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">折れ線グラフ — ユーザー数推移</Text>
        <Chart w="420" h="200" chartType="line" data='[{"name":"MAU","labels":["1月","2月","3月","4月","5月","6月"],"values":[12000,14500,16200,19800,22400,25000]},{"name":"DAU","labels":["1月","2月","3月","4月","5月","6月"],"values":[3200,3800,4500,5200,6100,7000]}]' showLegend="true" chartColors='["1565C0","FF6F00"]' />
      </VStack>
    </Box>
  </HStack>
  <HStack w="max" gap="16">
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">円グラフ — 顧客構成</Text>
        <Chart w="260" h="200" chartType="pie" data='[{"name":"業種別","labels":["製造業","IT","金融","小売","その他"],"values":[35,25,20,12,8]}]' showLegend="true" chartColors='["1565C0","26A69A","FF6F00","AB47BC","78909C"]' />
      </VStack>
    </Box>
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">ドーナツ — 予算配分</Text>
        <Chart w="260" h="200" chartType="doughnut" data='[{"name":"予算","labels":["開発","マーケ","人件費","インフラ","その他"],"values":[40,20,25,10,5]}]' showLegend="true" chartColors='["1565C0","2E7D32","FF6F00","AB47BC","78909C"]' />
      </VStack>
    </Box>
    <Box w="33%" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
      <VStack gap="8">
        <Text fontPx="14" color="212121" bold="true">レーダー — スキル評価</Text>
        <Chart w="260" h="200" chartType="radar" data='[{"name":"チームA","labels":["技術","管理","企画","営業","分析"],"values":[90,70,80,60,85]},{"name":"チームB","labels":["技術","管理","企画","営業","分析"],"values":[75,85,70,80,65]}]' showLegend="true" chartColors='["1565C0","FF6F00"]' />
      </VStack>
    </Box>
  </HStack>
  <Box w="max" padding="16" backgroundColor="FFFFFF" border='{"color":"E0E0E0","width":1}' borderRadius="8">
    <VStack gap="8">
      <Text fontPx="14" color="212121" bold="true">エリアチャート — トラフィック推移</Text>
      <Chart w="max" h="180" chartType="area" data='[{"name":"オーガニック","labels":["月","火","水","木","金","土","日"],"values":[4500,5200,4800,5800,6200,3200,2800]},{"name":"広告","labels":["月","火","水","木","金","土","日"],"values":[2000,2400,2200,2800,3100,1500,1200]}]' showLegend="true" chartColors='["1565C0","81D4FA"]' />
    </VStack>
  </Box>
</VStack>`,
  },
];

export const DEFAULT_TEMPLATE = SAMPLE_TEMPLATES[0];
