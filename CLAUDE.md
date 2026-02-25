# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

pom-playground は XML ベースの PPTX プレゼンテーション生成・プレビューアプリ。ユーザーが XML エディタでスライド構造を定義すると、リアルタイムで SVG プレビューが表示され、PPTX としてダウンロードできる。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router) + Hono (API)
- **フロントエンド**: React 19, CodeMirror 6 (XML エディタ), shadcn/ui, Tailwind CSS 4
- **PPTX 処理**: `@hirokisakabe/pom` (XML→PPTX), `pptx-glimpse` (PPTX→SVG)
- **型安全性**: TypeScript (strict), Zod (リクエスト検証)

## 開発コマンド

```bash
npm run dev          # 開発サーバー起動
npm run build        # ビルド
npm run lint         # ESLint チェック
npm run fmt          # Prettier フォーマット
npm run fmt:check    # Prettier チェック（CI用）
```

実装完了時は `npm run lint && npm run fmt:check` が通ることを確認する。

## アーキテクチャ

### クライアント・サーバー分離

- `src/client/` — クライアントコンポーネント（`"use client"` ディレクティブ必須）
- `src/server/` — サーバーサイドロジック（PPTX/SVG 変換処理）
- `src/app/api/[[...route]]/route.ts` — Next.js API Route で Hono を統合

### API エンドポイント（Hono）

- `GET /api/health` — ヘルスチェック
- `POST /api/preview` — XML → SVG スライド配列を返却
- `POST /api/download` — XML → PPTX バイナリを返却

### 主要データフロー

1. `XmlEditor` → XML テキスト → `POST /api/preview` → SVG 配列 → `SlidePreview` で描画
2. ダウンロード時: XML → `POST /api/download` → PPTX ArrayBuffer → ブラウザダウンロード

### Hono クライアント型推論

`src/client/lib/honoClient.ts` で Hono のルート型からクライアント型を自動推論。API の型安全性を保証。

## コード規約（ESLint で強制）

- **関数宣言スタイル必須**: `func-style: ["error", "declaration"]` — アロー関数での関数定義は禁止
- **型アサーション禁止**: `@typescript-eslint/consistent-type-assertions: "never"`
- **import 順序自動ソート**: `simple-import-sort` プラグイン
- **shadcn/ui コンポーネント**（`src/components/ui/`）と `src/lib/utils.ts` は lint 対象外
