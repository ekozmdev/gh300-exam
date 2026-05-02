# GH-300 難問クイズ Section 3: GitHub Copilot Features
# （Coding Agent / Sub-Agents / MCP / Code Review / PR Summary / Spark）

> 新試験（2026年1月〜）で追加・強化された機能群に関する難問クイズです。
> 単一選択では「2択まで絞れるが最後の1択に悩む」問題を中心に構成しています。
> 出典: [GH-300 Study Guide (Microsoft Learn)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

---

## 単一選択

### 問1
GitHub Copilot の **code review** で生成されるコメントの種類として、ドキュメントに示されている内容に最も合致するのはどれですか。

- A) コードスタイルへの自動修正提案のみ
- B) 自然言語によるレビューコメントと、コード変更の提案（code suggestion）の両方
- C) セキュリティ脆弱性の検出に特化したアラートのみ
- D) PR のマージ可否を判定する自動承認結果のみ


### 問2
**agent skills（エージェントスキル）** の説明として最も正確なのはどれですか。

- A) エージェントに特定のワークフロー、手順、または知識を与える instructions・scripts・resources を含む再利用可能なスキルセット
- B) Copilot Chat の `/skill` コマンドで呼び出せる、コードレビューに特化した自動分析機能
- C) MCP サーバーと同義で、外部 API 接続を定義するプロトコル
- D) Copilot がファインチューニングによって自律的に獲得した、タスク特化型の作業能力


### 問3
**Copilot クラウドエージェント（旧 Coding Agent）** のデフォルトの有効/無効状態について、最も正確な説明はどれですか。

- A) Pro/Pro+ ユーザーはデフォルト無効で、各ユーザーの個人 Settings から有効化する必要がある
- B) Business プランでは組織管理者の承認後にデフォルトで有効になり、Enterprise のみデフォルト無効で追加設定が必要
- C) Pro および Pro+ はデフォルトで有効。Business および Enterprise はデフォルトで無効で、管理者による有効化が必要
- D) Business および Enterprise はデフォルトで有効になっており、管理者が特定リポジトリを除外できる


### 問4
**GitHub.com 上の MCP（Model Context Protocol）** を Copilot クラウドエージェントと組み合わせた場合の説明として最も正確なのはどれですか。

- A) MCP サーバーの設定はリポジトリルートの `.github/mcp.json` ファイルに記述する
- B) MCP サーバーの設定はリポジトリの Settings（Settings > Copilot > Cloud agent セクション）から行い、クラウドエージェントが外部ツールやデータソースと連携できるようになる
- C) MCP サーバーの設定は Organization の Settings > Copilot から行い、Organization 内のすべてのリポジトリに一括適用される
- D) MCP サーバーは GitHub Apps としてインストールし、リポジトリに権限を付与することでクラウドエージェントが利用できるようになる


### 問5
**GitHub Spark** の説明として最も正確なのはどれですか。

- A) Spark は Copilot Chat の新しいインターフェースで、音声入力によってコードを生成・実行できる
- B) Spark は Enterprise 向けの Copilot 利用状況ダッシュボードで、シートの活用率やモデルの使用傾向を可視化する
- C) Spark は自然言語の説明からウェブアプリや体験（spark）を作成・共有できる GitHub のツール
- D) Spark は Copilot Spaces の一機能で、チームのプロンプトテンプレートを管理・共有するためのリポジトリ機能

---

## 複数選択

### 問6（2つ選択）
**Copilot クラウドエージェント**にタスクを依頼する方法として、ドキュメントが示している場所を **2 つ**選んでください。

- A) GitHub Issues からアサイン（assign）する
- B) GitHub Actions のトリガーファイルに記述する
- C) Copilot Chat から依頼する
- D) リポジトリの `.github/agent-tasks.yml` に記述する


### 問7（3つ選択）
**Copilot クラウドエージェント**が作業中に実行できることとして正しいものを **3 つ**選んでください。

- A) 専用の作業ブランチを自動で作成する
- B) コードの変更を行いプルリクエストを作成する
- C) 組織の課金プランを自動で変更する
- D) MCP サーバーを経由して外部ツールと連携する


### 問8（2つ選択）
**GitHub Copilot code review** の制限として正しいものを **2 つ**選んでください。

- A) すべての問題を必ず検出できるわけではない
- B) 生成されたレビューコメントは PR の diff のみを参照し、リポジトリ全体のコンテキストは考慮されない
- C) 提案コードが不正確または安全でない場合がある
- D) Copilot code review はセキュリティカテゴリの問題のみを対象としており、ロジックの誤りは検出しない


### 問9（2つ選択）
**Pull Request summary（PR 概要）** の説明として正しいものを **2 つ**選んでください。

- A) PR の変更内容を要約し、レビュアーが変更を把握しやすくする
- B) PR summary は description にのみ生成でき、PR のコメントには生成できない
- C) PR の概要をチームと共有しやすくする
- D) PR summary が生成されると、リポジトリの CODEOWNERS に設定されたレビュアーへの通知は省略される


### 問10（3つ選択）
**MCP（Model Context Protocol）** と Copilot クラウドエージェントの関係について正しいものを **3 つ**選んでください。

- A) MCP を使うとクラウドエージェントが外部ツールやデータソースと連携できる
- B) MCP サーバーはリポジトリの Settings から構成する
- C) MCP を設定すると PR summary 機能が自動で無効になる
- D) MCP の設定はリポジトリレベルで行い、agent がその設定を参照する
