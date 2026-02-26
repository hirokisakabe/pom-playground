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
    id: "project-timeline",
    name: "プロジェクトタイムライン",
    xml: `<VStack w="max" h="max" padding="32" backgroundColor="F5F7FA" gap="24">
  <VStack gap="4" alignItems="center">
    <Text fontPx="28" color="1A237E" bold="true">プロジェクト開発ロードマップ</Text>
    <Text fontPx="14" color="5C6BC0">2025年度 主要マイルストーン</Text>
  </VStack>
  <Timeline w="max" direction="horizontal" items='[{"label":"Q1: 企画・設計","description":"要件定義、技術選定、UI/UXデザイン","color":"1565C0"},{"label":"Q2: 開発フェーズ1","description":"コア機能実装、API開発、単体テスト","color":"2E7D32"},{"label":"Q3: 開発フェーズ2","description":"統合テスト、パフォーマンス最適化、β版リリース","color":"E65100"},{"label":"Q4: リリース","description":"本番デプロイ、モニタリング、フィードバック収集","color":"6A1B9A"}]' />
  <HStack w="max" gap="16">
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}' borderRadius="8">
      <VStack gap="12">
        <Text fontPx="16" color="1A237E" bold="true">進捗サマリー</Text>
        <Chart w="400" h="200" chartType="bar" data='[{"name":"計画","labels":["企画","設計","開発","テスト","リリース"],"values":[100,100,60,20,0]},{"name":"実績","labels":["企画","設計","開発","テスト","リリース"],"values":[100,90,45,10,0]}]' showLegend="true" chartColors='["1565C0","4FC3F7"]' />
      </VStack>
    </Box>
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"C5CAE9","width":1}' borderRadius="8">
      <VStack gap="12">
        <Text fontPx="16" color="1A237E" bold="true">チーム体制</Text>
        <Table w="max" columns='[{"width":140},{"width":80},{"width":180}]' rows='[{"cells":[{"text":"チーム","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A237E"},{"text":"人数","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A237E"},{"text":"担当領域","fontPx":11,"color":"FFFFFF","bold":true,"alignText":"center","backgroundColor":"1A237E"}]},{"cells":[{"text":"フロントエンド","fontPx":11,"color":"1A1A1A","backgroundColor":"E8EAF6"},{"text":"5名","fontPx":11,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"React, Next.js","fontPx":11,"color":"5A5A5A","backgroundColor":"FFFFFF"}]},{"cells":[{"text":"バックエンド","fontPx":11,"color":"1A1A1A","backgroundColor":"E8EAF6"},{"text":"4名","fontPx":11,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"Go, PostgreSQL","fontPx":11,"color":"5A5A5A","backgroundColor":"FFFFFF"}]},{"cells":[{"text":"インフラ","fontPx":11,"color":"1A1A1A","backgroundColor":"E8EAF6"},{"text":"2名","fontPx":11,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"AWS, Terraform","fontPx":11,"color":"5A5A5A","backgroundColor":"FFFFFF"}]},{"cells":[{"text":"QA","fontPx":11,"color":"1A1A1A","backgroundColor":"E8EAF6"},{"text":"3名","fontPx":11,"color":"1A1A1A","alignText":"center","backgroundColor":"FFFFFF"},{"text":"E2E, 負荷テスト","fontPx":11,"color":"5A5A5A","backgroundColor":"FFFFFF"}]}]' defaultRowHeight="32" />
      </VStack>
    </Box>
  </HStack>
</VStack>`,
  },
  {
    id: "process-flow",
    name: "業務フロー図",
    xml: `<VStack w="max" h="max" padding="32" backgroundColor="FAFBFC" gap="24">
  <VStack gap="4" alignItems="center">
    <Text fontPx="28" color="0D47A1" bold="true">受注から納品までの業務フロー</Text>
    <Text fontPx="14" color="5A5A8A">Order-to-Delivery Process Flow</Text>
  </VStack>
  <ProcessArrow w="max" direction="horizontal" steps='[{"label":"受注","description":"顧客からの注文受付・確認","color":"1565C0"},{"label":"審査","description":"与信チェック・在庫確認","color":"0277BD"},{"label":"製造","description":"生産計画・品質管理","color":"00838F"},{"label":"検品","description":"出荷前最終検査","color":"2E7D32"},{"label":"出荷","description":"梱包・配送手配","color":"558B2F"},{"label":"納品","description":"顧客への引渡し・検収","color":"33691E"}]' />
  <HStack w="max" gap="16">
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"BBDEFB","width":1}' borderRadius="8">
      <VStack gap="12">
        <Text fontPx="16" color="0D47A1" bold="true">承認フロー</Text>
        <Flow w="420" h="200" direction="vertical" nodes='[{"id":"start","label":"申請","x":210,"y":20,"color":"1565C0"},{"id":"check","label":"部門長確認","x":210,"y":80,"color":"0277BD"},{"id":"approve","label":"承認","x":120,"y":160,"color":"2E7D32"},{"id":"reject","label":"差戻し","x":300,"y":160,"color":"C62828"}]' connections='[{"from":"start","to":"check","label":"提出"},{"from":"check","to":"approve","label":"OK"},{"from":"check","to":"reject","label":"NG"}]' />
      </VStack>
    </Box>
    <Box w="50%" padding="16" backgroundColor="FFFFFF" border='{"color":"BBDEFB","width":1}' borderRadius="8">
      <VStack gap="12">
        <Text fontPx="16" color="0D47A1" bold="true">月次処理件数</Text>
        <Chart w="400" h="200" chartType="line" data='[{"name":"受注件数","labels":["4月","5月","6月","7月","8月","9月"],"values":[120,135,142,158,165,180]},{"name":"納品件数","labels":["4月","5月","6月","7月","8月","9月"],"values":[115,128,138,150,160,172]}]' showLegend="true" chartColors='["1565C0","2E7D32"]' />
      </VStack>
    </Box>
  </HStack>
</VStack>`,
  },
  {
    id: "competitive-analysis",
    name: "競合分析マトリクス",
    xml: `<VStack w="max" h="max" padding="32" backgroundColor="F8F9FC" gap="20">
  <VStack gap="4" alignItems="center">
    <Text fontPx="28" color="1B2A4A" bold="true">市場ポジショニング分析</Text>
    <Text fontPx="14" color="6B7B9A">Competitive Positioning Matrix</Text>
  </VStack>
  <HStack w="max" gap="16" alignItems="start">
    <Box w="55%" padding="16" backgroundColor="FFFFFF" border='{"color":"D0D5DD","width":1}' borderRadius="8">
      <VStack gap="12">
        <Text fontPx="16" color="1B2A4A" bold="true">ポジショニングマップ</Text>
        <Matrix w="460" h="320" axes='{"top":"高価格","bottom":"低価格","left":"機能特化","right":"汎用性"}' quadrants='[{"label":"プレミアム特化","color":"E3F2FD"},{"label":"プレミアム汎用","color":"FFF3E0"},{"label":"エントリー特化","color":"F3E5F5"},{"label":"エントリー汎用","color":"E8F5E9"}]' items='[{"label":"自社","x":65,"y":25,"color":"1565C0"},{"label":"競合A","x":75,"y":20,"color":"C62828"},{"label":"競合B","x":35,"y":55,"color":"2E7D32"},{"label":"競合C","x":80,"y":70,"color":"E65100"},{"label":"競合D","x":20,"y":30,"color":"6A1B9A"}]' />
      </VStack>
    </Box>
    <VStack w="45%" gap="12">
      <Box w="max" padding="16" backgroundColor="FFFFFF" border='{"color":"D0D5DD","width":1}' borderRadius="8">
        <VStack gap="10">
          <Text fontPx="16" color="1B2A4A" bold="true">市場シェア</Text>
          <Chart w="360" h="180" chartType="doughnut" data='[{"name":"シェア","labels":["自社","競合A","競合B","競合C","その他"],"values":[28,22,18,15,17]}]' showLegend="true" chartColors='["1565C0","C62828","2E7D32","E65100","9E9E9E"]' />
        </VStack>
      </Box>
      <Box w="max" padding="16" backgroundColor="FFFFFF" border='{"color":"D0D5DD","width":1}' borderRadius="8">
        <VStack gap="10">
          <Text fontPx="16" color="1B2A4A" bold="true">主要指標比較</Text>
          <Chart w="360" h="180" chartType="radar" data='[{"name":"自社","labels":["機能","価格","サポート","信頼性","拡張性"],"values":[85,70,90,88,82]},{"name":"競合A","labels":["機能","価格","サポート","信頼性","拡張性"],"values":[80,65,75,85,78]}]' showLegend="true" chartColors='["1565C0","C62828"]' />
        </VStack>
      </Box>
    </VStack>
  </HStack>
</VStack>`,
  },
  {
    id: "org-chart",
    name: "組織図",
    xml: `<VStack w="max" h="max" padding="32" backgroundColor="F5F6FA" gap="24">
  <VStack gap="4" alignItems="center">
    <Text fontPx="28" color="263238" bold="true">組織体制図</Text>
    <Text fontPx="14" color="607D8B">Organization Chart — 2025年度</Text>
  </VStack>
  <Box w="max" padding="24" backgroundColor="FFFFFF" border='{"color":"CFD8DC","width":1}' borderRadius="8">
    <Tree w="max" h="340" layout="vertical" data='{"label":"代表取締役社長","children":[{"label":"経営企画部","children":[{"label":"事業戦略室"},{"label":"IR・広報室"}]},{"label":"技術本部","children":[{"label":"開発部"},{"label":"インフラ部"},{"label":"QA部"}]},{"label":"営業本部","children":[{"label":"国内営業部"},{"label":"海外営業部"}]},{"label":"管理本部","children":[{"label":"人事部"},{"label":"経理部"},{"label":"法務部"}]}]}' />
  </Box>
  <HStack w="max" gap="16">
    <Box w="33%" padding="14" backgroundColor="E3F2FD" border='{"color":"1565C0","width":1}' borderRadius="8">
      <VStack gap="4" alignItems="center">
        <Text fontPx="20" color="1565C0" bold="true">247名</Text>
        <Text fontPx="11" color="37474F">正社員数</Text>
      </VStack>
    </Box>
    <Box w="33%" padding="14" backgroundColor="E8F5E9" border='{"color":"2E7D32","width":1}' borderRadius="8">
      <VStack gap="4" alignItems="center">
        <Text fontPx="20" color="2E7D32" bold="true">12部署</Text>
        <Text fontPx="11" color="37474F">組織構成</Text>
      </VStack>
    </Box>
    <Box w="33%" padding="14" backgroundColor="FFF3E0" border='{"color":"E65100","width":1}' borderRadius="8">
      <VStack gap="4" alignItems="center">
        <Text fontPx="20" color="E65100" bold="true">4本部</Text>
        <Text fontPx="11" color="37474F">事業部門</Text>
      </VStack>
    </Box>
  </HStack>
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
