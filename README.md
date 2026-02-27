# pom-playground

XML ベースの PPTX プレゼンテーション生成・プレビューアプリです。
[`@hirokisakabe/pom`](https://www.npmjs.com/package/@hirokisakabe/pom) と [`pptx-glimpse`](https://www.npmjs.com/package/pptx-glimpse) のリファレンス実装として公開しています。

## デモ

https://pom-playground.vercel.app

## セットアップ

```bash
npm install
npm run dev
```

## 使用ライブラリ

| ライブラリ                                                             | 役割                             |
| ---------------------------------------------------------------------- | -------------------------------- |
| [`@hirokisakabe/pom`](https://www.npmjs.com/package/@hirokisakabe/pom) | XML から PPTX への変換           |
| [`pptx-glimpse`](https://www.npmjs.com/package/pptx-glimpse)           | PPTX から SVG へのプレビュー生成 |
| [Next.js](https://nextjs.org/)                                         | フルスタックフレームワーク       |
| [Hono](https://hono.dev/)                                              | API ルーティング                 |
| [CodeMirror](https://codemirror.net/)                                  | XML エディタ                     |

## ライセンス

[MIT](./LICENSE)
