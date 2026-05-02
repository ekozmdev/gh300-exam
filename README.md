# GH-300: GitHub Copilot 試験調査メモ

> 2026年4月2日時点で確認した最新情報です。
> 最新版の一次ソースは Microsoft Learn の GH-300 学習ガイドで、最終更新日は `2026-02-19` です。

## クイズアプリ

このリポジトリには、`data/*.json` の問題セットをブラウザで解ける React + Vite アプリを同梱しています。

### クイズを追加する

1 ファイル 1 問題セットとして、`data/任意の名前.json` を追加します。JSON 形式は `.agents/skills/quiz-json-output/references/quiz-json-format.md` を参照してください。

検証は次で実行できます。

```bash
npm run validate:quizzes
```

### ローカルで確認する

```bash
npm install
npm run dev
```

### GitHub Pages に公開する

このリポジトリは `.github/workflows/deploy.yml` で GitHub Pages にデプロイします。

1. `data/*.json` とアプリ関連ファイルを `main` ブランチへ push する
2. GitHub の `Settings` -> `Pages` を開く
3. `Build and deployment` の `Source` を `GitHub Actions` にする
4. `Actions` タブで `Deploy to GitHub Pages` が成功するのを待つ
5. `Settings` -> `Pages` に表示される公開 URL を開く

ビルド時の Vite `base` は GitHub Actions 上でリポジトリ名から自動設定します。ユーザーサイトやカスタムドメインで `/` に固定したい場合は、build 時に `BASE_PATH=/` を指定してください。

## 結論

- 現在の **GH-300** は **GitHub Copilot** 試験です。
- GH-300 の試験範囲は **2026年1月に大きく改訂** されています。

## 公式ソース

- [試験 GH-300 の学習ガイド: GitHub Copilot](https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/gh-300)
- [GitHub Copilot 認定資格](https://learn.microsoft.com/ja-jp/credentials/certifications/github-copilot/)

## 試験概要

| 項目 | 内容 |
|------|------|
| 試験名 | GH-300: GitHub Copilot |
| レベル | Intermediate |
| 試験時間 | 100分 |
| 提供言語 | English, Spanish, Portuguese (Brazil), Korean, Japanese |
| 最新更新確認日 | 2026-02-19 |

## 最新の試験範囲

Microsoft Learn の GH-300 学習ガイドの `Skills at a glance` では、現在は次の **7 skill groups** で整理されています。

### 1. GitHub Copilot を責任を持って使う（15〜20%）

- 生成 AI ツールのリスクと限界を説明できる
- 倫理的で責任ある AI 利用を説明できる
- AI 利用による潜在的な害と緩和策を識別できる
- AI 出力を検証する必要性を説明できる
- GitHub Copilot を責任を持って運用する方法を識別できる

### 2. GitHub Copilot の機能を使う（25〜30%）

- IDE で Copilot を有効化できる
- インライン提案、Chat、CLI、Plan Mode を使い分けられる
- 特定ファイルやリポジトリの除外を理解している
- GitHub Copilot CLI の導入手順と主要コマンドを理解している
- CLI を対話的に使い、セッションを扱える
- スクリプト生成やファイル操作に Copilot CLI を使える
- Agent Mode、Edit Mode、MCP、Sub-agents、Agent Sessions を理解している
- コードレビュー支援、PR サマリー、Spaces、Spark、instructions files を理解している
- 組織全体のポリシー、監査ログ、REST API によるサブスクリプション管理を理解している

### 3. GitHub Copilot の機能（25〜30%）

- Microsoft Learn の `Skills at a glance` では、`Use GitHub Copilot features` とは別に
  `GitHub Copilot features` という重複して見える区分が掲載されている
- 詳細本文上は、実質的に上の「GitHub Copilot の機能を使う」の配下で
  `features and capabilities` として展開されている
- そのため、学習時は `2` と `3` をまとめて捉えるのが実務上は分かりやすい

### 4. GitHub Copilot のデータとアーキテクチャを理解する（10〜15%）

- データ利用、データフロー、共有の仕組みを説明できる
- 入力処理とプロンプト構築を説明できる
- プロキシフィルタリングと後処理を説明できる
- コード提案のライフサイクルを理解している
- LLM と Copilot の限界を説明できる

### 5. プロンプトエンジニアリングとコンテキスト設計を適用する（10〜15%）

- 効果的なプロンプト構造とコンテキストを説明できる
- コンテキストがどう決まるかを理解している
- Zero-shot / Few-shot prompting を使い分けられる
- プロンプト作成のベストプラクティスを適用できる
- プロンプト処理フローとチャット履歴の扱いを理解している

### 6. GitHub Copilot で開発者生産性を高める（10〜15%）

- コード生成、リファクタリング、ドキュメント生成に使える
- 学習の加速やコンテキストスイッチ削減に使える
- サンプルデータ生成やレガシーコードのモダナイズに使える
- ユニットテスト、統合テスト生成に使える
- エッジケースやアサーション作成を支援できる
- セキュリティ改善やパフォーマンス改善案を出せる

### 7. プライバシー、除外設定、セーフガードを構成する（10〜15%）

- コンテンツ除外とエディタ設定を構成できる
- 出力の所有権と制約を説明できる
- 重複検知やセキュリティ警告を有効化できる
- 提案や除外設定の問題を切り分けられる

## 注意点

### 2026年1月の改訂

- 学習ガイドの Change log では、**2026年1月に大きな変更が入った** と明記されています。
- そのため、2025年以前のブログ記事や古い Udemy / 問題集は、現在の範囲とずれている可能性があります。

### Microsoft Learn の表記ゆれ

- `Skills at a glance` では `Use GitHub Copilot features` と `GitHub Copilot features` が別行で並んでおり、重複に見える表記があります。
- ただし本文の詳細セクションでは、実質的に `Use GitHub Copilot features` の詳細として展開されています。
- そのため、**公式表記は 7 skill groups**、**学習上の把握は実質 6 かたまり** と理解するのが安全です。

## 学習リソース

学習ガイドが直接案内している主要リソース:

- [Responsible AI](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [GitHub Copilot のプランと機能](https://docs.github.com/ja/copilot/get-started/plans)
- [GitHub Copilot のデータ処理と信頼情報](https://github.com/trust-center)
- [GitHub Copilot Chat のプロンプト エンジニアリング](https://docs.github.com/ja/copilot/concepts/prompting/prompt-engineering)
- [GitHub Copilot のコンテンツ除外](https://docs.github.com/ja/copilot/concepts/context/content-exclusion)

## ひとことまとめ

GH-300 は、**GitHub Copilot を安全かつ実務的に使いこなせるか** を問う試験です。特に `責任ある AI 利用` `CLI/IDE/Agent 機能` `データフロー` `プロンプト設計` `プライバシーと除外設定` を重点的に押さえる必要があります。
