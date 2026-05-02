# GH-300 新範囲クイズ: Coding Agent / Sub-Agents / Agent Sessions / MCP

> 新試験（2026年1月〜）で新規追加された分野のクイズです。
> 出典: GitHub Copilot Coding Agent・MCP ドキュメント

## 出典

- [MCP and Coding Agent (英語)](https://docs.github.com/en/copilot/concepts/agents/coding-agent/mcp-and-coding-agent)
- [About Agent Skills (英語)](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Creating Agent Skills (英語)](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
- [Coding Agent Access Management (日本語)](https://docs.github.com/ja/copilot/concepts/agents/coding-agent/access-management)
- [Manage Agents (日本語)](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents/manage-agents)
- [Extending Coding Agent with MCP (英語)](https://docs.github.com/en/copilot/how-tos/agents/copilot-coding-agent/extending-copilot-coding-agent-with-mcp)
- [About Copilot Coding Agent (英語)](https://docs.github.com/en/copilot/concepts/about-copilot-coding-agent)
- [Customizing the Development Environment (英語)](https://docs.github.com/en/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent)

---

## 問1（単一選択）

GitHub Copilot の **Copilot クラウドエージェント（旧 Coding Agent）** が利用可能なプランはどれか。

- A) GitHub Copilot Pro 以上のすべてのプラン（Pro / Pro+ / Business / Enterprise）
- B) GitHub Copilot Free のみ
- C) GitHub Copilot Pro+ と Enterprise のみ
- D) GitHub Copilot Business と Enterprise のみ

**正解: A**

> 解説: Copilot クラウドエージェントは Pro、Pro+、Business、Enterprise の 4 つすべてのプランで利用できます。ただし Business / Enterprise では管理者による有効化が必要です。

---

## 問2（単一選択）

GitHub Copilot Business または Enterprise のサブスクライバーにとって、Copilot クラウドエージェントのデフォルト状態はどれか。

- A) デフォルトで有効になっており、管理者が無効化できる
- B) デフォルトで無効になっており、管理者が有効化する必要がある
- C) デフォルトで有効になっており、変更できない
- D) ユーザーごとに個別に有効化する必要がある

**正解: B**

> 解説: Business / Enterprise プランでは Copilot クラウドエージェントはデフォルトで無効です。管理者が Organization レベルのポリシーで有効化してから、ユーザーが利用できるようになります。

---

## 問3（単一選択）

GitHub Copilot Pro または Pro+ のサブスクライバーにとって、Copilot クラウドエージェントのデフォルト状態はどれか。

- A) デフォルトで有効になっている
- B) デフォルトで無効になっており、ユーザーが自分で有効化する必要がある
- C) デフォルトで無効になっており、GitHub サポートに依頼する必要がある
- D) Organization の設定に依存する

**正解: A**

> 解説: Pro / Pro+ プランでは Copilot クラウドエージェントはデフォルトで有効になっており、追加の設定なしにすぐ利用できます。

---

## 問4（単一選択）

Copilot クラウドエージェントが動作するインフラストラクチャはどれか。

- A) GitHub Codespaces
- B) Azure Kubernetes Service
- C) GitHub Pages
- D) GitHub Actions（エフェメラルな開発環境）

**正解: D**

> 解説: Copilot クラウドエージェントは GitHub Actions が提供するエフェメラル（使い捨て）の開発環境で動作します。タスクごとに独立した環境が起動され、完了後に破棄されます。

---

## 問5（単一選択）

MCP（Model Context Protocol）とは何か。

- A) アプリケーションが大規模言語モデル（LLM）とコンテキストを共有する方法を定義するオープン標準
- B) GitHub 独自のプロプライエタリなプロトコルで、Copilot専用のツール連携仕様
- C) Copilot がプルリクエストを自動作成するためのワークフロー仕様
- D) GitHub Actions のジョブ間でデータを共有するための内部プロトコル

**正解: A**

> 解説: MCP はアプリケーションと LLM がコンテキストを共有する方法を定義するオープン標準です。特定の企業に依存しない標準化された接続方式で、AI モデルを様々なデータソースやツールに接続できます。

---

## 問6（単一選択）

Copilot クラウドエージェントで MCP サーバーを利用する際、エージェントはどのように MCP ツールを使用するか。

- A) ツールを使用するたびにユーザーに承認を求める
- B) 最初の 1 回だけ承認を求め、その後は自動で使用する
- C) ツールを自律的に使用し、使用前に承認を求めない
- D) Organization 管理者が承認キューを処理するまで待機する

**正解: C**

> 解説: MCP サーバーがリポジトリに設定されると、Copilot クラウドエージェントは使用可能なツールを自律的に使用します。使用前にユーザーへの承認を求めることはありません。

---

## 問7（単一選択）

Copilot クラウドエージェントにデフォルトで自動設定されている MCP サーバーはどれか。

- A) GitHub MCP サーバーと Playwright MCP サーバー
- B) GitHub MCP サーバーのみ
- C) Playwright MCP サーバーのみ
- D) Sentry MCP サーバーと Notion MCP サーバー

**正解: A**

> 解説: デフォルトで自動設定される MCP サーバーは「GitHub MCP サーバー」と「Playwright MCP サーバー」の 2 つです。GitHub MCP サーバーは現在のリポジトリへの読み取り専用アクセス、Playwright はエージェント環境内の Web リソースへのアクセスを提供します。

---

## 問8（単一選択）

デフォルト状態の GitHub MCP サーバーが持つアクセス権限はどれか。

- A) 全リポジトリへの読み書きアクセス
- B) 現在のリポジトリへの読み取り専用アクセス
- C) 現在のリポジトリへの読み書きアクセス
- D) Organization 内すべてのリポジトリへの読み取りアクセス

**正解: B**

> 解説: デフォルトでは GitHub MCP サーバーは、現在のリポジトリへの読み取り専用アクセス権のみを持つ特別にスコープされたトークンを使用します。より広いアクセスが必要な場合は別途カスタマイズが必要です。

---

## 問9（単一選択）

デフォルト状態の Playwright MCP サーバーがアクセスできる Web リソースはどれか。

- A) 任意のインターネット上の Web サイト
- B) GitHub.com のみ
- C) エージェント自身の環境内でホストされる `localhost` / `127.0.0.1` のリソースのみ
- D) Organization が承認したドメインのみ

**正解: C**

> 解説: デフォルトでは Playwright MCP サーバーはエージェント環境内で `localhost` または `127.0.0.1` でアクセスできるリソースにのみアクセスできます。外部の Web サイトへのアクセスには追加設定が必要です。

---

## 問10（単一選択）

MCP サーバーの設定を行う際、リポジトリの設定で MCP シークレットや変数に使用できる名前のプレフィックスはどれか。

- A) `MCP_COPILOT_`
- B) `GITHUB_MCP_`
- C) `COPILOT_MCP_`
- D) `AGENT_SECRET_`

**正解: C**

> 解説: MCP 設定で使用できる環境変数やシークレットの名前は `COPILOT_MCP_` で始まる必要があります。このプレフィックスがない変数は MCP 設定から参照できません。

---

## 問11（単一選択）

リポジトリに MCP サーバーを設定するために使用される設定フォーマットはどれか。

- A) YAML 形式のワークフローファイル
- B) XML 形式の設定ファイル
- C) TOML 形式の設定ファイル
- D) JSON 形式の設定（`mcpServers` オブジェクトを含む）

**正解: D**

> 解説: MCP サーバーの設定は `mcpServers` オブジェクトを含む JSON 形式で記述します。リポジトリの Settings > Copilot > Cloud agent の「MCP configuration」セクションに直接入力します。

---

## 問12（単一選択）

Copilot クラウドエージェントの MCP 設定における `type` フィールドに指定できる値として**正しいもの**はどれか。

- A) `"remote"`, `"cloud"`, `"api"`
- B) `"local"`, `"stdio"`, `"http"`, `"sse"`
- C) `"docker"`, `"npm"`, `"python"`
- D) `"sync"`, `"async"`, `"stream"`

**正解: B**

> 解説: `type` フィールドには `"local"`、`"stdio"`、`"http"`、`"sse"` の 4 つの値が使用できます。ローカル起動とリモート HTTP/SSE 接続の両方をサポートしています。

---

## 問13（単一選択）

MCP の設定処理順序として正しいものはどれか。

- A) リポジトリレベル → カスタムエージェント → デフォルトサーバー
- B) デフォルトサーバー → リポジトリレベル → カスタムエージェント
- C) デフォルトサーバー → カスタムエージェント → リポジトリレベル
- D) カスタムエージェント → デフォルトサーバー → リポジトリレベル

**正解: C**

> 解説: MCP 設定の処理順序は「デフォルトサーバー → カスタムエージェントの MCP 設定 → リポジトリレベルの設定」の順です。カスタムエージェントの設定はデフォルトの後、リポジトリレベルの前に処理されます。

---

## 問14（単一選択）

Copilot クラウドエージェントが**サポートしていない** MCP の機能はどれか。

- A) ツール（Tools）
- B) リソース（Resources）とプロンプト（Prompts）
- C) HTTP 接続
- D) ローカルコマンド実行

**正解: B**

> 解説: Copilot クラウドエージェントは MCP サーバーが提供する「ツール」のみをサポートします。「リソース」と「プロンプト」はサポートされていません。

---

## 問15（単一選択）

Copilot クラウドエージェントが現在サポートしていないリモート MCP サーバーの認証方式はどれか。

- A) API キー認証
- B) Bearer トークン認証
- C) Basic 認証
- D) OAuth を利用した認証・認可

**正解: D**

> 解説: Copilot クラウドエージェントは、認証・認可に OAuth を利用するリモート MCP サーバーを現在サポートしていません。API キーや静的トークンを使った認証は利用できます。

---

## 問16（単一選択）

Agent Skills（エージェントスキル）とは何か。

- A) GitHub Actions のカスタムアクションを定義するファイル
- B) Copilot が関連する場合に読み込める指示・スクリプト・リソースのフォルダ
- C) Copilot のモデルをファインチューニングするためのデータセット
- D) MCP サーバーのプラグインを定義するモジュール

**正解: B**

> 解説: Agent Skills は指示、スクリプト、リソースを含むフォルダで、Copilot が関連すると判断したときに読み込み、特殊なタスクのパフォーマンスを向上させます。オープン標準（agentskills）に基づいています。

---

## 問17（単一選択）

スキルファイルの名称として正しいものはどれか。

- A) `AGENT.md`
- B) `COPILOT.md`
- C) `SKILL.md`
- D) `INSTRUCTIONS.md`

**正解: C**

> 解説: スキルファイルは必ず `SKILL.md` という名前にする必要があります。他の名前では Copilot はスキルとして認識しません。

---

## 問18（単一選択）

`SKILL.md` のフロントマターで**必須**のフィールドはどれか。

- A) `name` と `description` のみ
- B) `name`、`description`、`license` の 3 つ
- C) `name`、`description`、`allowed-tools` の 3 つ
- D) `description` と `version` のみ

**正解: A**

> 解説: `SKILL.md` のフロントマターで必須なのは `name`（スキルの一意な識別子）と `description`（スキルの説明）の 2 つです。`license` と `allowed-tools` は省略可能です。

---

## 問19（単一選択）

リポジトリ固有の**プロジェクトスキル**を配置する正しいディレクトリはどれか。

- A) `.github/skills`、`.claude/skills`、または `.agents/skills`
- B) `.github/copilot/skills` のみ
- C) `~/.copilot/skills`、`~/.claude/skills`、または `~/.agents/skills`
- D) `.github/workflows/skills`

**正解: A**

> 解説: プロジェクトスキル（リポジトリ固有）は `.github/skills`、`.claude/skills`、または `.agents/skills` のいずれかに配置します。`~/.copilot/skills` などはプロジェクトをまたいで共有される個人スキルの場所です。

---

## 問20（単一選択）

**個人スキル**（プロジェクトをまたいで共有）を配置する正しいディレクトリはどれか。

- A) `~/.copilot/skills`、`~/.claude/skills`、または `~/.agents/skills`
- B) `.github/skills` のみ
- C) `/usr/local/copilot/skills`
- D) `~/.github/skills`

**正解: A**

> 解説: 個人スキルはホームディレクトリの `~/.copilot/skills`、`~/.claude/skills`、または `~/.agents/skills` に配置します。プロジェクトをまたいで共有されます。

---

## 問21（単一選択）

スキルのサブディレクトリ名のルールとして正しいものはどれか。

- A) 大文字始まりで、スペースにはアンダースコアを使用する
- B) 制約はなく、任意の名前が使える
- C) CamelCase を使用する
- D) 小文字で、スペースにはハイフンを使用する

**正解: D**

> 解説: スキルのサブディレクトリ名は小文字でなければならず、スペースにはハイフンを使用する必要があります（例: `webapp-testing`、`image-convert`）。

---

## 問22（単一選択）

`SKILL.md` の `allowed-tools` フィールドに `shell` または `bash` を指定した場合の影響はどれか。

- A) ターミナルコマンド実行の確認ステップが削除され、任意のコマンドが自動実行される可能性がある
- B) スクリプト実行前に常に確認ダイアログが表示される
- C) Organization 管理者の承認が必要になる
- D) スクリプト実行がサンドボックス環境に限定される

**正解: A**

> 解説: `shell` や `bash` を `allowed-tools` に指定すると、ターミナルコマンド実行の確認ステップが削除されます。攻撃者が制御するスキルやプロンプトインジェクションが環境内で任意のコマンドを実行できるリスクがあるため、十分に信頼できるスキルにのみ使用すべきです。

---

## 問23（単一選択）

Copilot がスキルを使用すると決定したとき、何が起きるか。

- A) スキルのディレクトリ全体がエージェントの作業ディレクトリにコピーされる
- B) スキルの設定が GitHub Actions ワークフローとして実行される
- C) スキルに含まれるスクリプトが自動的にすべて実行される
- D) `SKILL.md` ファイルがエージェントのコンテキストに挿入される

**正解: D**

> 解説: Copilot がスキルの使用を選択すると、`SKILL.md` ファイルがエージェントのコンテキストに挿入されます。エージェントはそこに記載された指示にアクセスし、スキルのディレクトリに含まれているスクリプトや例を使用できます。

---

## 問24（単一選択）

Agent Skills の仕様は何に基づいているか。

- A) GitHub 独自のプロプライエタリ仕様
- B) OpenAI が定めた標準
- C) `agentskills/agentskills` で管理されているオープン標準
- D) W3C の Web 標準

**正解: C**

> 解説: Agent Skills 仕様は `agentskills/agentskills` リポジトリで管理されているオープン標準であり、Copilot 以外のさまざまな AI システムでも使用されます。

---

## 問25（単一選択）

`copilot-setup-steps.yml` を配置する正しいパスはどれか。

- A) `.github/copilot/setup-steps.yml`
- B) `.copilot/setup-steps.yml`
- C) `copilot/setup-steps.yml`
- D) `.github/workflows/copilot-setup-steps.yml`

**正解: D**

> 解説: Copilot の開発環境をカスタマイズする設定ファイルは `.github/workflows/copilot-setup-steps.yml` に配置します。GitHub Actions ワークフローファイルとして扱われます。

---

## 問26（単一選択）

`copilot-setup-steps.yml` のジョブ名として**正しいもの**はどれか（この名前でなければ Copilot に認識されない）。

- A) `copilot-setup`
- B) `setup-steps`
- C) `copilot-setup-steps`
- D) `copilot-environment-setup`

**正解: C**

> 解説: ジョブは必ず `copilot-setup-steps` という名前にする必要があります。この名前でなければ Copilot に認識されず、セットアップステップは実行されません。

---

## 問27（単一選択）

`copilot-setup-steps.yml` の `timeout-minutes` に設定できる最大値はどれか。

- A) 30 分
- B) 59 分
- C) 120 分
- D) 360 分

**正解: B**

> 解説: `copilot-setup-steps.yml` の `timeout-minutes` に設定できる最大値は 59 分です。これを超える値を設定しようとしても無視されます。

---

## 問28（単一選択）

`copilot-setup-steps.yml` が動作する（トリガーされる）条件として正しいものはどれか。

- A) リポジトリの任意のブランチに存在していれば動作する
- B) デフォルトブランチに存在していなければ動作しない
- C) GitHub Packages に公開されていれば動作する
- D) Organization の設定ファイルに登録されていれば動作する

**正解: B**

> 解説: `copilot-setup-steps.yml` はデフォルトブランチに存在していなければトリガーされません。他のブランチだけに存在しても Copilot のセットアップには使用されません。

---

## 問29（単一選択）

Copilot クラウドエージェントがデフォルトで使用するランナーの OS はどれか。

- A) macOS
- B) Windows Server
- C) Alpine Linux
- D) Ubuntu Linux

**正解: D**

> 解説: Copilot クラウドエージェントはデフォルトで Ubuntu Linux ベースの開発環境を使用します。Windows 環境に切り替えることも可能ですが、デフォルトは Ubuntu です。

---

## 問30（単一選択）

Copilot クラウドエージェントのセッションに対して「ステアリング（誘導）入力」を行った場合、課金はどうなるか。

- A) 追加料金は発生しない（セッション料金に含まれる）
- B) メッセージごとに 1 つのプレミアムリクエストが使用される
- C) 1 セッションにつき固定料金が発生する
- D) GitHub Actions の分数として課金される

**正解: B**

> 解説: セッションのステアリング（実行を止めずに Copilot を誘導するメッセージ）は、メッセージごとに 1 つのプレミアムリクエストを消費します。

---

## 問31（複数選択）

Copilot クラウドエージェントが実行できるタスクとして**正しいもの**をすべて選べ。

- A) リポジトリのコードを調査して実装プランを作成する
- B) バグを修正し、テストカバレッジを改善する
- C) 複数のリポジトリにまたがって同時にコード変更を行う
- D) ドキュメントを更新し、技術的負債に対処する
- E) マージコンフリクトを解消する

**正解: A, B, D, E**

> 解説: Copilot クラウドエージェントはリポジトリ調査、実装プラン作成、バグ修正、テスト改善、ドキュメント更新、技術的負債への対処、マージコンフリクト解消が可能です。ただし、1 回の実行で複数のリポジトリにまたがってコード変更することはできません（C は誤り）。

---

## 問32（複数選択）

Copilot クラウドエージェントの制限事項として**正しいもの**をすべて選べ。

- A) 1 回の実行で変更できるリポジトリは 1 つのみ
- B) 1 度に作業できるブランチは 1 つのみ
- C) コンテンツ除外設定（Content exclusions）の対象ファイルも参照・更新できてしまう
- D) タスクごとに作成できるプルリクエストは最大 1 つ
- E) GitHub 以外のプラットフォーム（GitLab 等）のリポジトリでも動作する

**正解: A, B, C, D**

> 解説: エージェントは 1 リポジトリ・1 ブランチ・1 PR のみに制限されます。コンテンツ除外設定を尊重しないという制限もあります（C は制限として正しい）。GitHub 以外のコードホスティングプラットフォームでは動作しません（E は誤り）。

---

## 問33（複数選択）

Copilot クラウドエージェントのタスクを開始できるエントリポイントとして**正しいもの**をすべて選べ。

- A) GitHub Issues でエージェントをアサイン
- B) Copilot Chat で `/task` コマンドを使用
- C) リポジトリの [Agents] タブ
- D) GitHub CLI の `gh copilot agent` コマンド
- E) 既存のプルリクエストのコメントで `@copilot` をメンション

**正解: A, B, C, E**

> 解説: タスク開始のエントリポイントは Issues、Copilot Chat の `/task`、[Agents] タブ、PR コメントでの `@copilot` メンションです。GitHub CLI の `gh copilot agent` コマンドはドキュメントに記載されていません（D は誤り）。

---

## 問34（複数選択）

Copilot クラウドエージェントのセッションを追跡できるクライアント・ツールとして**正しいもの**をすべて選べ。

- A) GitHub CLI
- B) GitHub Mobile
- C) Visual Studio Code
- D) Raycast
- E) JetBrains IDE

**正解: A, B, C, D, E**

> 解説: ドキュメントには GitHub CLI、GitHub Mobile、Visual Studio Code、Raycast、JetBrains IDE のすべてから Copilot クラウドエージェントのセッションを追跡できると記載されています。

---

## 問35（複数選択）

リポジトリを Copilot クラウドエージェントの対象から**オプトアウト（除外）**できる権限を持つロールはどれか（すべて選べ）。

- A) エンタープライズ管理者（Enterprise admin）
- B) Organization オーナー（組織所有リポジトリの場合）
- C) ユーザー（ユーザー所有リポジトリの場合）
- D) リポジトリのコラボレーター（Write 権限）
- E) Billing Manager

**正解: A, B, C**

> 解説: リポジトリのオプトアウトができるのは、エンタープライズ管理者（すべてのリポジトリ）、Organization オーナー（組織所有リポジトリ）、ユーザー（ユーザー所有リポジトリ）です。コラボレーターや Billing Manager には権限がありません。

---

## 問36（複数選択）

Agent Skills が動作する環境として**正しいもの**をすべて選べ。

- A) Copilot クラウドエージェント
- B) GitHub Copilot CLI（コマンドラインインターフェース）
- C) Visual Studio Code のエージェントモード
- D) GitHub Copilot for Xcode
- E) JetBrains IDE の Copilot プラグイン

**正解: A, B, C**

> 解説: Agent Skills は Copilot クラウドエージェント、GitHub Copilot CLI、Visual Studio Code のエージェントモードで動作します。Xcode や JetBrains は現時点ではサポートされていません。

---

## 問37（複数選択）

`SKILL.md` ファイルのフロントマターに記述できるフィールドとして**正しいもの**をすべて選べ。

- A) `name`（必須）
- B) `description`（必須）
- C) `license`（省略可能）
- D) `allowed-tools`（省略可能）
- E) `version`（必須）

**正解: A, B, C, D**

> 解説: フロントマターのフィールドは `name`（必須）、`description`（必須）、`license`（省略可能）、`allowed-tools`（省略可能）です。`version` フィールドは存在しません。

---

## 問38（複数選択）

Agent Skills のプロジェクトスキルを配置できる有効なディレクトリパスをすべて選べ。

- A) `.github/skills`
- B) `.claude/skills`
- C) `.agents/skills`
- D) `.copilot/skills`
- E) `.vscode/skills`

**正解: A, B, C**

> 解説: プロジェクトスキルの有効な配置先は `.github/skills`、`.claude/skills`、`.agents/skills` の 3 つです。`.copilot/skills` はホームディレクトリ配下（個人スキル）のみ有効であり、リポジトリ内の `.copilot/skills` は正式な配置先ではありません。

---

## 問39（複数選択）

`copilot-setup-steps.yml` のジョブでカスタマイズできる設定として**正しいもの**をすべて選べ。

- A) `steps`
- B) `permissions`
- C) `runs-on`
- D) `timeout-minutes`（最大 59 分）
- E) `strategy`（マトリックス戦略）

**正解: A, B, C, D**

> 解説: `copilot-setup-steps.yml` でカスタマイズできるのは `steps`、`permissions`、`runs-on`、`services`、`snapshot`、`timeout-minutes` です。`strategy`（マトリックス戦略）は含まれません。

---

## 問40（複数選択）

Copilot クラウドエージェントのランナーとして**互換性があるもの**をすべて選べ。

- A) Ubuntu x64 Linux ランナー
- B) Windows 64-bit ランナー
- C) macOS ランナー
- D) Ubuntu ARM64 ランナー
- E) セルフホストの Ubuntu x64 ランナー（ARC 管理）

**正解: A, B, E**

> 解説: Copilot クラウドエージェントと互換性があるのは Ubuntu x64 Linux と Windows 64-bit のみです。macOS と ARM64 はサポートされていません。セルフホストの Ubuntu x64 ランナーは ARC 等で管理することを推奨しています。

---

## 問41（複数選択）

Copilot クラウドエージェントの開発環境をカスタマイズする用途として `copilot-setup-steps.yml` を使えるものをすべて選べ。

- A) ツールや依存関係の事前インストール
- B) 標準ランナーより大きな GitHub Actions ランナーへのアップグレード
- C) セルフホストランナーの使用設定
- D) Windows 開発環境への切り替え
- E) Copilot のシステムプロンプトのカスタマイズ

**正解: A, B, C, D**

> 解説: `copilot-setup-steps.yml` はツールのプリインストール、大型ランナーへの切り替え、セルフホストランナーの使用、Windows 環境への切り替えなどに使用できます。Copilot のシステムプロンプトのカスタマイズはカスタム指示（Custom Instructions）で行います。

---

## 問42（複数選択）

Copilot クラウドエージェントを使うためにコストとして消費されるリソースをすべて選べ。

- A) GitHub Actions の分数（minutes）
- B) Copilot プレミアムリクエスト
- C) GitHub Packages のストレージ
- D) GitHub Codespaces の時間

**正解: A, B**

> 解説: Copilot クラウドエージェントは GitHub Actions の分数と Copilot プレミアムリクエストを消費します。月次の利用許可範囲内であれば追加コストは発生しません。

---

## 問43（複数選択）

Copilot クラウドエージェントにおける「カスタムエージェント（Custom Agents）」の選択元として正しいものをすべて選べ。

- A) 現在のリポジトリ
- B) Organization
- C) Enterprise
- D) GitHub Marketplace
- E) GitHub Copilot Extensions ストア

**正解: A, B, C**

> 解説: カスタムエージェントはリポジトリ、Organization、またはエンタープライズから既存のカスタムエージェントを選択できます。GitHub Marketplace や Extensions ストアからは選択しません。

---

## 問44（複数選択）

Copilot クラウドエージェントのセッションをアーカイブするための手順として正しいものをすべて選べ。

- A) アーカイブするセッション（停止済み）を開く
- B) 右上のメニューから「アーカイブセッション」を選択する
- C) 確認ダイアログで「はい、アーカイブ」をクリックする
- D) セッション中（実行中）に直接アーカイブできる

**正解: A, B, C**

> 解説: セッションのアーカイブは「停止されたセッション」に対して行います。実行中のセッションは直接アーカイブできません（D は誤り）。アーカイブするとセッション一覧から削除されます。

---

## 問45（複数選択）

MCP 設定の環境変数の参照構文として有効なものをすべて選べ。

- A) `$COPILOT_MCP_API_KEY`
- B) `${COPILOT_MCP_API_KEY}`
- C) `${COPILOT_MCP_API_KEY:-fallback_value}`
- D) `%COPILOT_MCP_API_KEY%`
- E) `$(COPILOT_MCP_API_KEY)`

**正解: A, B, C**

> 解説: サポートされている変数参照構文は `$VAR`、`${VAR}`、`${VAR:-default}` の 3 パターンです。Windows スタイルの `%VAR%` やシェル置換の `$(VAR)` はサポートされていません。

---

## 問46（複数選択）

Copilot クラウドエージェントを**カスタマイズ**する方法として正しいものをすべて選べ。

- A) カスタム指示（Custom Instructions）でコーディング基準などを伝える
- B) MCP サーバーで追加のデータソースやツールへのアクセスを付与する
- C) カスタムエージェントで特定タスク専用の Copilot を作成する
- D) Hooks（フック）でエージェント実行の特定ポイントにカスタムシェルコマンドを挿入する
- E) Agent Skills で特殊タスクの実行方法を教える

**正解: A, B, C, D, E**

> 解説: Copilot クラウドエージェントのカスタマイズ方法は、カスタム指示、MCP サーバー、カスタムエージェント、Hooks、Agent Skills の 5 つすべてが正式にサポートされています。

---

## 問47（複数選択）

Agent Skills の Community リソースとして公式ドキュメントで言及されているリポジトリをすべて選べ。

- A) `anthropics/skills`
- B) `github/awesome-copilot`
- C) `microsoft/vscode-skills`
- D) `modelcontextprotocol/servers`

**正解: A, B**

> 解説: ドキュメントで言及されているコミュニティリソースは `anthropics/skills` リポジトリと GitHub コミュニティが作成した `github/awesome-copilot` コレクションの 2 つです。

---

## 問48（複数選択）

サードパーティのコーディングエージェントが利用可能なプランをすべて選べ。

- A) GitHub Copilot Free
- B) GitHub Copilot Pro
- C) GitHub Copilot Pro+
- D) GitHub Copilot Business
- E) GitHub Copilot Enterprise

**正解: C, E**

> 解説: サードパーティのコーディングエージェントは GitHub Copilot Pro+ と GitHub Copilot Enterprise プランでのみ利用できます。Free、Pro、Business では利用できません。

---

## 問49（複数選択）

MCP のベストプラクティスとして**正しいもの**をすべて選べ。

- A) サードパーティ製 MCP サーバーを有効にする前に十分にレビューする
- B) `tools` フィールドには必要最小限のツールだけを指定する（`*` でのすべて許可は慎重に）
- C) 構成を保存する前に、設定した MCP サーバーを慎重に確認する
- D) デフォルトでは Copilot クラウドエージェントは MCP サーバーへの書き込みツールのアクセス権を持つ
- E) サードパーティ MCP サーバーの使用はエージェントのパフォーマンスや出力品質に影響する可能性がある

**正解: A, B, C, E**

> 解説: デフォルトでは Copilot クラウドエージェントは MCP サーバーの書き込みツールへのアクセス権を持ちません（D は誤り）。ベストプラクティスとして、サードパーティサーバーのレビュー、必要最小限のツール指定、設定前の慎重な確認が推奨されます。

---

## 問50（複数選択）

Copilot クラウドエージェントと IDE の「エージェントモード」の違いとして**正しいもの**をすべて選べ。

- A) Copilot クラウドエージェントは GitHub Actions 環境で自律的に動作する
- B) IDE のエージェントモードはローカル開発環境に直接変更を加える
- C) Copilot クラウドエージェントはリポジトリの調査・プラン作成・ブランチへのコード変更・PR 作成まで担う
- D) Copilot クラウドエージェントはオフライン環境でも動作する
- E) IDE のエージェントモードは GitHub Actions を使用する

**正解: A, B, C**

> 解説: Copilot クラウドエージェントは GitHub Actions 環境で自律的に動作し、リポジトリ調査・プラン作成・コード変更・PR 作成を担います。IDE エージェントモードはローカル環境に直接変更を加えます。クラウドエージェントはオフラインでは動作せず、IDE エージェントモードは GitHub Actions を使用しません。
