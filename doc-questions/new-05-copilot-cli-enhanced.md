# GH-300 新範囲クイズ: Copilot CLI（強化版）

> 新試験（2026年1月〜）で独立サブトピックに昇格した Copilot CLI の詳細クイズです。
> 出典: GitHub Copilot CLI ドキュメント

## 出典

- [GitHub Copilot CLI について（日本語）](https://docs.github.com/ja/copilot/concepts/agents/copilot-cli/about-copilot-cli)
- [Copilot CLI エージェントの使用 概要（日本語）](https://docs.github.com/ja/copilot/how-tos/copilot-cli/use-copilot-cli-agents/overview)
- [Copilot CLI の認証（日本語）](https://docs.github.com/ja/copilot/how-tos/copilot-cli/set-up-copilot-cli/authenticate-copilot-cli)
- [Copilot CLI の設定（日本語）](https://docs.github.com/ja/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli)
- [Chronicle（Enterprise Cloud）](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-cli/chronicle)
- [Chronicle コンセプト（Enterprise Cloud）](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/copilot-cli/chronicle)
- [Agentic Code Review](https://docs.github.com/en/copilot/how-tos/copilot-cli/use-copilot-cli-agents/agentic-code-review)
- [About GitHub Copilot CLI（英語）](https://docs.github.com/en/copilot/concepts/agents/copilot-cli/about-copilot-cli)

---

## 問1（単一選択）

GitHub Copilot CLI の**対話型セッション**を開始するには、ターミナルに何と入力しますか？

- A) `copilot`
- B) `gh copilot start`
- C) `gh copilot interactive`
- D) `copilot --interactive`

**正解: A**

> 解説: 対話型セッションを開始するには `copilot` とだけ入力します。`gh copilot` は旧来の gh 拡張コマンドであり、新しいスタンドアロン CLI は `copilot` コマンドを直接使います。

---

## 問2（単一選択）

対話型セッションで「ask/execute モード」と「プランモード」を切り替えるキーボードショートカットは？

- A) `Ctrl+Tab`
- B) `Alt+P`
- C) `Shift+Tab`
- D) `Ctrl+Shift+M`

**正解: C**

> 解説: `Shift+Tab` キーを押すことで **standard（ask/execute）モード・プランモード・オートパイロットモードの3つ**を順番に切り替えます。プランモードでは、Copilot はコードを書く前に実装計画を作成し、明確な質問を行います。オートパイロットモードでは、各ステップで承認を求めずにタスクを自律的に実行します。

---

## 問3（単一選択）

Copilot CLI をプログラム的に（非対話的に）使用するために使うコマンドラインオプションは？

- A) `--run`
- B) `--non-interactive`
- C) `-p` または `--prompt`
- D) `--batch`

**正解: C**

> 解説: `-p` または `--prompt` オプションにプロンプトを渡すと、CLI はタスクを完了して終了するプログラムモードで動作します。例: `copilot -p "Show me this week's commits"` のように使います。

---

## 問4（単一選択）

Copilot CLI が**資格情報を検索する順序**として正しいものはどれですか？

- A) `GH_TOKEN` → `COPILOT_GITHUB_TOKEN` → `GITHUB_TOKEN` → キーチェーン
- B) システムキーチェーン → `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN`
- C) `GITHUB_TOKEN` → `GH_TOKEN` → `COPILOT_GITHUB_TOKEN` → GitHub CLI
- D) `COPILOT_GITHUB_TOKEN` → `GH_TOKEN` → `GITHUB_TOKEN` → システムキーチェーン → GitHub CLI フォールバック

**正解: D**

> 解説: 優先順位は `COPILOT_GITHUB_TOKEN` > `GH_TOKEN` > `GITHUB_TOKEN` > システムキーチェーン（OAuth トークン）> GitHub CLI フォールバック の順です。環境変数は保存済み OAuth トークンを自動的に上書きします。

---

## 問5（単一選択）

macOS/Linux における Copilot CLI の設定ファイルのデフォルトパスは？

- A) `~/.copilot/config.json`
- B) `~/.config/copilot/config.json`
- C) `/etc/copilot/config.json`
- D) `~/.github/copilot.json`

**正解: A**

> 解説: 設定ファイルは `~/.copilot/config.json` に保存されます。Windows の場合は `$HOME\.copilot\config.json` です。`COPILOT_HOME` 環境変数でこの場所を変更することもできます。

---

## 問6（単一選択）

Copilot CLI で**サポートされていない**トークンタイプはどれですか？

- A) `gho_` プレフィックスの OAuth トークン（デバイスフロー）
- B) `github_pat_` プレフィックスの Fine-grained PAT
- C) `ghu_` プレフィックスの GitHub Apps ユーザーとサーバー間トークン
- D) `ghp_` プレフィックスの Classic PAT

**正解: D**

> 解説: Classic PAT（`ghp_` プレフィックス）は Copilot CLI ではサポートされていません。使用できるのは OAuth トークン（`gho_`）、Fine-grained PAT（`github_pat_`）、GitHub Apps ユーザートークン（`ghu_`）です。

---

## 問7（単一選択）

`--deny-tool` と `--allow-all-tools` が競合する場合、どちらが優先されますか？

- A) `--allow-all-tools` が優先される
- B) 先に指定したフラグが優先される
- C) 後から指定したフラグが優先される
- D) `--deny-tool` が優先される

**正解: D**

> 解説: `--deny-tool` は `--allow-all-tools` および `--allow-tool` よりも常に優先されます。例えば `copilot --allow-all-tools --deny-tool='shell(rm)'` とすると、rm コマンド以外はすべて許可されます。

---

## 問8（単一選択）

`/review` スラッシュコマンドの主な機能は何ですか？

- A) GitHub Issues の一覧表示
- B) コードの変更を分析してフィードバックを提供する
- C) PR の説明文をレビューする
- D) CI/CD の結果を確認する

**正解: B**

> 解説: `/review` スラッシュコマンドを使うと、CLI を離れることなく Copilot がコードの変更を分析します。コミット前に素早くフィードバックを得るために使えます。プロンプト・パス・ファイルパターンを指定してレビュースコープを絞り込めます。

---

## 問9（単一選択）

Copilot CLI が**自動コンテキスト圧縮（auto-compaction）**を開始するのは、トークン制限の何パーセントに達したときですか？

- A) 80%
- B) 90%
- C) 99%
- D) 95%

**正解: D**

> 解説: 会話がトークン制限の 95% に近づくと、Copilot はワークフローを中断することなくバックグラウンドで履歴を自動的に圧縮します。これにより実質的に無限のセッションが可能になります。

---

## 問10（単一選択）

**最後に閉じたローカルセッション**をすばやく再開するコマンドは？

- A) `copilot --resume`
- B) `copilot --last`
- C) `copilot --continue`
- D) `copilot --restart`

**正解: C**

> 解説: `copilot --continue` を使うと、最後に閉じたローカルセッションを即座に再開できます。`copilot --resume` はセッションピッカーを表示し、複数のセッションから選択できます。

---

## 問11（単一選択）

対話型セッション中に**現在のセッション ID**を確認するスラッシュコマンドは？

- A) `/session`
- B) `/id`
- C) `/info`
- D) `/status`

**正解: A**

> 解説: `/session` スラッシュコマンドで現在の対話型セッションの ID を確認できます。セッション ID は対話型セッションを終了するときにも表示されます。

---

## 問12（単一選択）

`/share file` をファイルパスを**指定せずに**実行した場合のデフォルトのファイル名は？

- A) `copilot-session-SESSIONID.md`
- B) `copilot-export.md`
- C) `session.md`
- D) `copilot-history.md`

**正解: A**

> 解説: ファイルパスを指定しない場合、Markdown ファイルは現在の作業ディレクトリに `copilot-session-SESSIONID.md` という名前で保存されます（SESSIONID は実際のセッション ID）。

---

## 問13（単一選択）

`/chronicle standup` がデフォルトでカバーする期間は？

- A) 過去8時間
- B) 過去7日間
- C) 過去48時間
- D) 過去24時間

**正解: D**

> 解説: `/chronicle standup` はデフォルトで過去24時間のセッションに基づいてスタンドアップレポートを生成します。`/chronicle standup for the last 3 days` のように期間を指定してカスタマイズすることもできます。

---

## 問14（単一選択）

Copilot CLI の**セッションデータ**が保存されるローカルディレクトリは？

- A) `~/.copilot/sessions/`
- B) `~/.copilot/session-state/`
- C) `~/.copilot/history/`
- D) `~/.github/copilot/sessions/`

**正解: B**

> 解説: Copilot CLI はすべてのセッションのデータを `~/.copilot/session-state/` ディレクトリに保存します。各セッションのデータにはプロンプト、応答、使用ツール、変更ファイルの詳細が含まれます。

---

## 問15（単一選択）

`/chronicle improve` サブコマンドの**分析スコープ**は？

- A) すべてのセッションをグローバルに対象とする
- B) 過去7日間のセッション
- C) 現在のブランチのセッションのみ
- D) 現在のリポジトリ/作業ディレクトリのみ

**正解: D**

> 解説: 他の Chronicle 機能と異なり、`/chronicle improve` のスコープは**現在のリポジトリまたは作業ディレクトリに限定**されます。これにより、推奨事項が現在のプロジェクトに関連したものになります。

---

## 問16（単一選択）

`--allow-all` フラグが組み合わせる3つのフラグの組み合わせとして正しいものは？

- A) `--allow-all-tools`, `--allow-all-paths`, `--allow-all-urls`
- B) `--allow-tool`, `--allow-path`, `--allow-url`
- C) `--allow-all-tools`, `--allow-all-files`, `--allow-all-urls`
- D) `--allow-all-tools`, `--allow-all-paths`, `--allow-all-domains`

**正解: A**

> 解説: `--allow-all`（エイリアス: `--yolo`）は `--allow-all-tools`（ツール承認をスキップ）、`--allow-all-paths`（パス検証を無効化）、`--allow-all-urls`（URL 検証を無効化）の3つを組み合わせたフラグです。

---

## 問17（単一選択）

対話型セッションのプロンプトで**特定のファイルをコンテキストとして追加**するためのプレフィックスは？

- A) `#`
- B) `$`
- C) `@`
- D) `%`

**正解: C**

> 解説: `@` に続けてファイルへの相対パスを入力します。例: `Explain @config/ci/ci-required-checks.yml` や `Fix the bug in @src/app.js`。入力中はパス補完も機能します。

---

## 問18（単一選択）

対話型セッションで、**AI モデルを呼び出さず**にシェルコマンドを直接実行するプレフィックスは？

- A) `/`
- B) `!`
- C) `$`
- D) `>`

**正解: B**

> 解説: `!` をプロンプトの先頭に付けると、モデルを呼び出すことなくシェルコマンドを直接実行できます。例: `!git clone https://github.com/github/copilot-cli`。

---

## 問19（単一選択）

Copilot CLI の**設定ファイルディレクトリを変更**するために使用する環境変数は？

- A) `COPILOT_HOME`
- B) `COPILOT_CONFIG_DIR`
- C) `GH_COPILOT_PATH`
- D) `COPILOT_DATA_DIR`

**正解: A**

> 解説: `COPILOT_HOME` 環境変数を設定することで、設定ファイル（`config.json`）の保存場所をデフォルトの `~/.copilot/` から変更できます。

---

## 問20（単一選択）

Copilot CLI が利用できるプランは？

- A) GitHub Copilot Enterprise のみ
- B) GitHub Copilot Business および Enterprise
- C) すべての Copilot プラン
- D) GitHub Copilot Pro 以上

**正解: C**

> 解説: Copilot CLI はすべての Copilot プランで使用できます。ただし、組織から Copilot を受け取る場合は、組織の設定で Copilot CLI ポリシーが有効になっている必要があります。

---

## 問21（単一選択）

Copilot CLI がデフォルトでアクセスできるディレクトリは？

- A) ホームディレクトリとそのサブディレクトリ
- B) 現在の作業ディレクトリ、そのサブディレクトリ、システム一時ディレクトリ
- C) すべてのディレクトリ
- D) 現在の作業ディレクトリのみ

**正解: B**

> 解説: デフォルトでは、Copilot CLI は**現在の作業ディレクトリ、そのサブディレクトリ、およびシステム一時ディレクトリ**にアクセスできます。`--allow-all-paths` フラグで検証を無効化、`--disallow-temp-dir` で一時ディレクトリへのアクセスを禁止できます。

---

## 問22（単一選択）

`config.json` で**永続的に信頼されたディレクトリ**を管理する配列のキー名は？

- A) `trusted_dirs`
- B) `allowed_folders`
- C) `safe_directories`
- D) `trusted_folders`

**正解: D**

> 解説: `~/.copilot/config.json` の `trusted_folders` 配列を編集することで、永続的に信頼するディレクトリを管理できます。ディレクトリを信頼するとセキュリティに影響があるため、慎重に設定する必要があります。

---

## 問23（単一選択）

Copilot がタスクを「考えている」状態で **Esc キー**を押すとどうなりますか？

- A) セッションが終了する
- B) Copilot が再起動される
- C) 前のプロンプトに戻る
- D) 現在実行中の操作が停止される

**正解: D**

> 解説: Copilot がまだ処理中の状態で Esc キーを押すと、**現在実行中の操作が停止**されます。ツールの権限要求ダイアログでは、Esc は「いいえ」（別の方法を指示する）を選択した場合と同じ動作をします。

---

## 問24（単一選択）

macOS で Copilot CLI が **OAuth トークンをデフォルトで保存**する場所は？

- A) `~/.copilot/tokens`
- B) Keychain Access（キーチェーンアクセス）
- C) `~/.ssh/copilot`
- D) Credential Manager

**正解: B**

> 解説: macOS では OAuth トークンは **Keychain Access** に保存されます。Windows は Credential Manager、Linux は libsecret（GNOME Keyring, KWallet）が使われます。システムキーチェーンが利用できない場合は `~/.copilot/config.json` のプレーンテキストに保存するよう求められます。

---

## 問25（単一選択）

Copilot CLI 用の **Fine-grained PAT に必要な権限**は？

- A) "Copilot Chat"
- B) "Copilot API"
- C) "Copilot Requests"
- D) "GitHub Copilot"

**正解: C**

> 解説: Fine-grained PAT を Copilot CLI で使用するには、**"Copilot Requests"** 権限を付与する必要があります。この権限がないと認証が失敗します。

---

## 問26（単一選択）

`/share gist` で作成される gist の可視性は？

- A) パブリック
- B) プライベート
- C) 内部（Internal）
- D) 組織限定

**正解: B**

> 解説: `/share gist` コマンドはセッションの内容を **GitHub.com 上のプライベート gist** として保存します。これにより、プロンプトと Copilot の応答を外部で記録・共有する手段として使えます。

---

## 問27（単一選択）

`/chronicle` コマンドなどの**実験的機能**を有効にするために必要なのはどれですか？

- A) `--experimental` フラグまたは `/experimental on` コマンド
- B) `--beta` フラグまたは `/beta on` コマンド
- C) Enterprise ライセンスの取得のみ
- D) `--preview` フラグのみ

**正解: A**

> 解説: `/chronicle` コマンドおよびセッション履歴への質問機能は**実験的機能**であり、`--experimental` コマンドラインオプション、または対話型セッション内で `/experimental on` スラッシュコマンドを実行した場合のみ利用できます。

---

## 問28（単一選択）

Copilot CLI の**セッションストア**（セッション履歴を格納する構造化データベース）の種類は？

- A) PostgreSQL
- B) MySQL
- C) SQLite
- D) MongoDB

**正解: C**

> 解説: Copilot CLI はセッションファイルに加えて、構造化セッションデータをローカルの **SQLite データベース**（セッションストア）に保存します。このデータが `/chronicle` コマンドや履歴への質問応答に使われます。

---

## 問29（単一選択）

`gh copilot suggest` コマンドの `-t` フラグ（`--target`）に指定できる**有効な値**はどれですか？

- A) `shell`, `bash`, `zsh`
- B) `shell`, `git`, `gh`
- C) `bash`, `git`, `github`
- D) `shell`, `git`, `github`

**正解: B**

> 解説: `-t` フラグには `shell`（シェルコマンドを提案）、`git`（Git コマンドを提案）、`gh`（GitHub CLI コマンドを提案）の3種類が指定できます。デフォルト値は `shell` です。

---

## 問30（単一選択）

Copilot CLI が **Windows** でサポートされる実行環境は？

- A) PowerShell のみ
- B) WSL（Windows Subsystem for Linux）のみ
- C) PowerShell と WSL
- D) Windows Terminal のみ

**正解: C**

> 解説: Copilot CLI は Linux、macOS に加えて、Windows では **PowerShell** および **Windows Subsystem for Linux（WSL）** の両方からの使用をサポートしています。

---

## 問31（複数選択）

Copilot CLI がサポートする**認証方法**をすべて選択してください。

- A) OAuth デバイスフロー（対話型の既定の方法）
- B) 環境変数（`COPILOT_GITHUB_TOKEN` など）
- C) SSH キー
- D) GitHub CLI へのフォールバック（`gh auth token`）
- E) Classic PAT（`ghp_` プレフィックス）

**正解: A, B, D**

> 解説: Copilot CLI は3種類の認証をサポートします。**OAuth デバイスフロー**（対話型の既定）、**環境変数**（CI/CD 向け）、**GitHub CLI フォールバック**（最低優先度）です。SSH キーと Classic PAT はサポートされていません。

---

## 問32（複数選択）

Copilot CLI で**サポートされているトークンタイプ**をすべて選択してください。

- A) OAuth トークン（`gho_` プレフィックス）
- B) Fine-grained PAT（`github_pat_` プレフィックス）
- C) Classic PAT（`ghp_` プレフィックス）
- D) GitHub Apps ユーザーとサーバー間トークン（`ghu_` プレフィックス）
- E) SSH トークン

**正解: A, B, D**

> 解説: サポートされているのは OAuth トークン（`gho_`）、Fine-grained PAT（`github_pat_`）、GitHub Apps ユーザートークン（`ghu_`）の3種類です。Classic PAT（`ghp_`）と SSH トークンはサポートされていません。

---

## 問33（複数選択）

`/chronicle` の有効な**サブコマンド**をすべて選択してください。

- A) `standup`
- B) `tips`
- C) `improve`
- D) `reindex`
- E) `history`

**正解: A, B, C, D**

> 解説: `/chronicle` には4つのサブコマンドがあります。`standup`（スタンドアップレポート）、`tips`（使い方のヒント）、`improve`（カスタム指示の改善提案）、`reindex`（セッションストアの再構築）です。`history` は存在しません。

---

## 問34（複数選択）

`/share` コマンドがサポートする**オプション**をすべて選択してください。

- A) `gist`（GitHub.com のプライベート gist として保存）
- B) `file`（Markdown ファイルとして保存）
- C) `email`（メールで送信）
- D) `slack`（Slack に投稿）

**正解: A, B**

> 解説: `/share` コマンドは `gist`（GitHub.com 上のプライベート gist に保存）と `file`（ローカルの Markdown ファイルに保存）の2つのオプションのみをサポートしています。

---

## 問35（複数選択）

**以前のセッションを再開する**有効な方法をすべて選択してください。

- A) `copilot --continue`（最後のセッションを即座に再開）
- B) `copilot --resume`（セッションピッカーを表示）
- C) `copilot --resume SESSION-ID`（特定のセッションを直接再開）
- D) 対話型セッション中に `/resume` を使用（別のセッションに切り替え）
- E) 対話型セッション中に `/resume SESSION-ID` を使用（特定のセッションへジャンプ）

**正解: A, B, C, D, E**

> 解説: 5つすべてが有効な方法です。`--continue` は最速の方法、`--resume` はピッカーで選択、`--resume SESSION-ID` は直接指定、対話型セッション中は `/resume` または `/resume SESSION-ID` を使います。

---

## 問36（複数選択）

Copilot CLI がサポートする**オペレーティングシステム**をすべて選択してください。

- A) Linux
- B) macOS
- C) Windows（PowerShell または WSL 経由）
- D) iOS
- E) Android

**正解: A, B, C**

> 解説: Copilot CLI は Linux、macOS、および Windows（PowerShell または WSL 経由）をサポートしています。iOS や Android はサポートされていません。

---

## 問37（複数選択）

Copilot CLI のセッションに**記録されるデータ**をすべて選択してください。

- A) ユーザーのプロンプト
- B) Copilot の応答
- C) 使用されたツール
- D) 変更されたファイルの詳細
- E) ネットワークトラフィックログ

**正解: A, B, C, D**

> 解説: 各セッションには「ユーザーのプロンプト」「Copilot の応答」「使用されたツール」「変更されたファイルの詳細」が記録されます。ネットワークトラフィックログは記録されません。

---

## 問38（複数選択）

`--allow-all`（`--yolo`）フラグが**組み合わせるフラグ**をすべて選択してください。

- A) `--allow-all-tools`
- B) `--allow-all-paths`
- C) `--allow-all-urls`
- D) `--allow-all-files`
- E) `--allow-all-domains`

**正解: A, B, C**

> 解説: `--allow-all` は `--allow-all-tools`（ツール承認をスキップ）、`--allow-all-paths`（パス検証を無効化）、`--allow-all-urls`（URL 検証を無効化）の3つを組み合わせたショートカットです。

---

## 問39（複数選択）

Copilot CLI の**ツール権限を制御する**有効なコマンドラインフラグをすべて選択してください。

- A) `--allow-all-tools`
- B) `--allow-tool`
- C) `--deny-tool`
- D) `--available-tools`
- E) `--block-tool`

**正解: A, B, C, D**

> 解説: 有効なフラグは `--allow-all-tools`（全許可）、`--allow-tool`（特定ツールを許可）、`--deny-tool`（特定ツールを拒否）、`--available-tools`（使用可能なツールセットを制限）です。`--block-tool` は存在しません。

---

## 問40（複数選択）

Copilot CLI の**セッションデータが提供する機能**をすべて選択してください。

- A) 以前のセッションの再開
- B) 過去の作業について Copilot に質問できる
- C) `/chronicle standup` でスタンドアップレポートを生成
- D) GitHub.com へのセッション内容の自動同期
- E) `/chronicle improve` でカスタム指示の改善提案を得る

**正解: A, B, C, E**

> 解説: セッションデータはセッション再開、履歴への質問、Chronicle コマンドによるインサイト生成を可能にします。セッションデータはすべて**ローカルにのみ保存**され、GitHub.com への自動同期は行われません。

---

## 問41（複数選択）

`gh copilot` コマンドに関する**正しい記述**をすべて選択してください。

- A) `gh copilot suggest` では `-t` フラグでコマンドの種類（shell/git/gh）を指定できる
- B) `gh copilot explain` は指定したコマンドの意味や動作を説明する
- C) `gh copilot alias` はシェル関数のエイリアスを生成し、`ghcs`（suggest）や `ghce`（explain）として使える
- D) `gh copilot suggest` の `-t` フラグのデフォルト値は `shell`
- E) `gh copilot` は GitHub CLI（`gh`）がなくても単独で動作する

**正解: A, B, C, D**

> 解説: `gh copilot suggest` は `-t`（`--target`）フラグで shell/git/gh を指定でき、デフォルトは `shell` です。`gh copilot explain` はコマンドを説明し、`gh copilot alias` でエイリアス（`ghcs`/`ghce`）を設定できます。`gh copilot` は `gh` 拡張なので GitHub CLI が必要です（E は誤り）。

---

## 問42（複数選択）

Copilot CLI で利用できる**カスタマイズオプション**をすべて選択してください。

- A) カスタム指示（`.github/copilot-instructions.md`）
- B) MCP（Model Context Protocol）サーバー
- C) カスタムエージェント
- D) フック（Hooks）
- E) スキル（Skills）

**正解: A, B, C, D, E**

> 解説: Copilot CLI はカスタム指示ファイル、MCP サーバー、カスタムエージェント、フック（キーポイントでのカスタムシェルコマンド実行）、スキル（特殊タスク実行）のすべてのカスタマイズオプションをサポートしています。

---

## 問43（複数選択）

Copilot CLI の**自動コンテキスト管理機能**をすべて選択してください。

- A) トークン制限の 95% で自動圧縮（バックグラウンドで実行）
- B) 手動圧縮のための `/compact` コマンド
- C) トークン使用量を確認するための `/context` コマンド
- D) クラウドへの自動保存
- E) 10メッセージごとの自動要約

**正解: A, B, C**

> 解説: 自動コンテキスト管理には、95% 到達時の自動圧縮、手動圧縮の `/compact`、使用状況確認の `/context` の3機能があります。クラウドへの自動保存や自動要約機能は存在しません。

---

## 問44（複数選択）

`/chronicle tips` の**特徴として正しいもの**をすべて選択してください。

- A) 3〜5個のパーソナライズされた推奨事項を提供する
- B) 実際のプロンプトとツール使用状況を分析する
- C) 利用可能なすべての CLI 機能とクロスリファレンスを行う
- D) コード品質メトリクスを生成する
- E) セキュリティ脆弱性レポートを提供する

**正解: A, B, C**

> 解説: `/chronicle tips` は実際のプロンプトやツール使用状況を分析し、まだ試していない機能とのクロスリファレンスを行い、**3〜5個のパーソナライズされた推奨事項**を提供します。コード品質やセキュリティ分析は対象外です。

---

## 問45（複数選択）

`/chronicle standup` の出力に**含まれる情報**をすべて選択してください。

- A) 作業したブランチ名
- B) 達成したこと
- C) 参照された GitHub の PR や Issue
- D) タスクごとの所要時間
- E) 完了ステータス（Done / In Progress など）

**正解: A, B, C, E**

> 解説: スタンドアップレポートには、作業したブランチ名、達成内容、参照された PR/Issue、完了ステータス（完了・進行中など）が含まれます。タスクごとの所要時間は記録・報告されません。

---

## 問46（複数選択）

Copilot CLI の**パスアクセス許可を制御する**有効なフラグをすべて選択してください。

- A) `--allow-all-paths`
- B) `--disallow-temp-dir`
- C) `--restrict-path`
- D) `--deny-path`

**正解: A, B**

> 解説: パス権限を制御するフラグは `--allow-all-paths`（パス検証を無効化してすべてのパスへのアクセスを許可）と `--disallow-temp-dir`（システム一時ディレクトリへのアクセスを禁止）の2つです。`--restrict-path` や `--deny-path` は存在しません。

---

## 問47（複数選択）

対話型セッションまたはコマンドラインで、**ツール・パス・URL のすべての権限を許可する**方法をすべて選択してください。

- A) コマンドライン起動時: `copilot --allow-all`
- B) コマンドライン起動時: `copilot --yolo`
- C) 対話型セッション中: `/allow-all` スラッシュコマンド
- D) 対話型セッション中: `/yolo` スラッシュコマンド
- E) コマンドライン起動時: `copilot --auto-approve`

**正解: A, B, C, D**

> 解説: `--allow-all` と `--yolo` はコマンドライン起動時のエイリアスです。対話型セッション中は `/allow-all` または `/yolo` スラッシュコマンドで同等の効果が得られます。`--auto-approve` は存在しません。

---

## 問48（複数選択）

Copilot CLI で **Fine-grained PAT を使用する際の正しい記述**をすべて選択してください。

- A) "Copilot Requests" 権限が必要
- B) `github_pat_` プレフィックスを持つ
- C) 環境変数（`COPILOT_GITHUB_TOKEN` など）経由で使用可能
- D) Classic PAT（`ghp_`）と同様にサポートされる
- E) CI/CD パイプラインやコンテナなどの非対話型環境に最適

**正解: A, B, C, E**

> 解説: Fine-grained PAT は `github_pat_` プレフィックスを持ち、**"Copilot Requests"** 権限が必要です。環境変数経由で設定でき、CI/CD などの自動化環境に適しています。Classic PAT（`ghp_`）は Copilot CLI ではサポートされていません（D は誤り）。

---

## 問49（複数選択）

`/review` スラッシュコマンドの**機能として正しいもの**をすべて選択してください。

- A) コミット前にコードの変更についてフィードバックを受けられる
- B) プロンプトを指定してレビュースコープを絞り込める
- C) パスを指定してレビュースコープを絞り込める
- D) ファイルパターンを指定してレビュースコープを絞り込める
- E) 検出された問題を自動的にすべて修正する

**正解: A, B, C, D**

> 解説: `/review` はコミット前の素早いフィードバックを CLI から得る機能で、プロンプト・パス・ファイルパターンでスコープを絞り込めます。フィードバックはユーザーが確認して手動でコードエディタで適用するものであり、自動修正機能ではありません。

---

## 問50（複数選択）

Copilot CLI の**セッションデータ管理に関する正しい記述**をすべて選択してください。

- A) セッションファイルは `~/.copilot/session-state/` に保存される
- B) セッションストアはローカルの SQLite データベースである
- C) セッションデータはデフォルトで GitHub サーバーに自動同期される
- D) 特定セッションのデータを削除するには、そのセッションのディレクトリを削除する
- E) `~/.copilot/session-state/` 以下をすべて削除するとデータをクリアできるが、その後 `/chronicle reindex` による再インデックスが必要

**正解: A, B, D, E**

> 解説: すべてのセッションデータは `~/.copilot/session-state/` にローカル保存され、SQLite データベースでインデックスされます。データは**GitHub サーバーには同期されません**（プライバシー保護）。特定セッションや全データの削除後は、`/chronicle reindex` でインデックスを再構築する必要があります。

---

*問題数: 単一選択 30問 + 複数選択 20問 = 計 50問*
