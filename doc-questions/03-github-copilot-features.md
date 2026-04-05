# GH-300 Section 3 クイズ

対象ドキュメント:
- [Use GitHub Copilot agents](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents)
- [Managing coding agents](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents/manage-agents)
- [Managing access to GitHub Copilot coding agent](https://docs.github.com/ja/copilot/concepts/agents/coding-agent/access-management)
- [Model Context Protocol (MCP) and GitHub Copilot coding agent](https://docs.github.com/ja/copilot/concepts/agents/coding-agent/mcp-and-coding-agent)
- [About agent skills](https://docs.github.com/ja/copilot/concepts/agents/about-agent-skills)
- [Creating agent skills for GitHub Copilot](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
- [About GitHub Copilot code review](https://docs.github.com/ja/copilot/concepts/agents/code-review)
- [Using GitHub Copilot code review](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- [GitHub Copilot による Pull Request summary の作成](https://docs.github.com/ja/enterprise-cloud@latest/copilot/how-tos/use-copilot-for-common-tasks/create-a-pr-summary)
- [About GitHub Spark](https://docs.github.com/ja/copilot/concepts/spark)

## 単一選択

### 問1
GitHub Copilot の coding agent の使い方として最も適切なのはどれですか？

- A) ローカル端末でしか動かない補完機能として使う
- B) Issue やタスクを任せて、実装案や PR 作成につなげる
- C) リポジトリの可視性だけを変更する
- D) 監査ログを閲覧するためだけに使う

**解答:** B

**解説:** coding agent は、単なる補完ではなく、作業の実行や PR 作成につながるタスク委任に使うのが中心です。

### 問2
Model Context Protocol（MCP）の役割として適切なのはどれですか？

- A) Copilot の課金プランを自動で切り替える
- B) Pull Request summary を自動で承認する
- C) coding agent が外部のツールや情報源とつながるための仕組みを提供する
- D) Spark の画面テーマを変更する

**解答:** C

**解説:** MCP は、agent が外部のコンテキストやツールを扱うための接続口として理解するとよいです。

### 問3
agent skills の説明として最も適切なのはどれですか？

- A) agent に特定の作業手順や振る舞いを与える再利用可能な指示
- B) GitHub の通知を一括で停止する設定
- C) PR を自動でマージする権限
- D) repository のブランチ保護を一時的に解除する機能

**解答:** A

**解説:** agent skills は、特定のワークフローに沿って agent を動かすための再利用可能な知識や指示です。

### 問4
GitHub Copilot code review で期待できることとして適切なのはどれですか？

- A) 組織の請求設定を変更する
- B) README の公開範囲を制御する
- C) GitHub Spark のアプリを公開する
- D) Pull Request の内容をレビューし、改善点を示す

**解答:** D

**解説:** code review は、PR の変更点を見てレビューコメントや改善提案を返す用途です。

### 問5
GitHub Spark の説明として適切なのはどれですか？

- A) 監査ログを検索するための管理画面
- B) 自然言語を使ってアプリの試作や体験を作るための機能
- C) 依存関係の脆弱性だけを検出する機能
- D) 2 要素認証のバックアップコード生成機能

**解答:** B

**解説:** Spark は、アイデアを素早く形にするためのアプリ作成・試作寄りの機能です。

## 複数選択

### 問6
coding agent の一般的な使い方として正しいものを 2 つ選んでください。

- A) Issue ベースで作業を依頼できる
- B) 監査ログを確認する専用機能である
- C) 実装や修正の作業を進め、PR につなげられる
- D) すべての作業を必ずローカルのみで完結させる

**解答:** AC

**解説:** coding agent は、Issue などから作業を受けて実装や PR 作成に進める用途が中心です。

### 問7
agent skills について正しいものを 2 つ選んでください。

- A) リポジトリの課金制御だけに使う
- B) 特定のワークフローや手順を agent に教える
- C) GitHub Mobile の通知設定を変更する
- D) 再利用可能な指示として用意できる

**解答:** BD

**解説:** skills は、agent の行動をワークフロー単位で安定させるための再利用可能な指示です。

### 問8
GitHub Copilot code review で扱う内容として正しいものを 3 つ選んでください。

- A) Pull Request の変更内容を確認する
- B) 改善提案やレビューコメントを返す
- C) Organizations の所有権を移管する
- D) 変更点の要約や理解を助ける

**解答:** ABD

**解説:** code review は、PR の理解、要約、改善提案を支援する機能として使います。

### 問9
Pull Request summary に関する説明として正しいものを 2 つ選んでください。

- A) PR の変更内容を要約して把握しやすくする
- B) 変更内容に関係なく自動でレビュー承認を出す
- C) リポジトリの依存関係グラフを削除する
- D) pull request の概要を共有しやすくする

**解答:** AD

**解説:** PR summary は、変更点の要約を通じて概要把握や共有を助ける機能です。

### 問10
MCP と coding agent の関係として正しいものを 2 つ選んでください。

- A) MCP は agent の外部接続や拡張に役立つ
- B) MCP は Spark のデザインテンプレート専用である
- C) agent が外部の文脈を扱いやすくする
- D) MCP を使うと PR summary が無効になる

**解答:** AC

**解説:** MCP は、agent が外部の情報やツールと連携して作業しやすくするための仕組みです。
