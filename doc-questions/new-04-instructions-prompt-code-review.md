# GH-300 新範囲クイズ: Instructions Files / Prompt Files / Copilot Code Review

> 新試験（2026年1月〜）で新規追加された分野のクイズです。
> 出典: GitHub Copilot カスタム命令・コードレビュー ドキュメント

## 出典

- [Adding repository custom instructions (EN)](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [About customizing Copilot responses (EN)](https://docs.github.com/en/copilot/concepts/prompting/response-customization)
- [About Copilot code review (EN)](https://docs.github.com/en/copilot/concepts/agents/code-review)
- [Using Copilot code review (EN)](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- [リポジトリカスタム命令の追加 (JA)](https://docs.github.com/ja/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [レスポンスのカスタマイズ (JA)](https://docs.github.com/ja/copilot/concepts/prompting/response-customization)

---

## 問1（単一選択）

リポジトリ全体に適用するカスタム命令ファイルの正しいパスはどれか？

- A) `.github/copilot-instructions.md`
- B) `.copilot/instructions.md`
- C) `docs/copilot-instructions.md`
- D) `.github/instructions/repository.md`

**正解: A**

> 解説: リポジトリ全体のカスタム命令（repository-wide custom instructions）は `.github/copilot-instructions.md` に配置する。`.github` ディレクトリが存在しない場合は作成する必要がある。

---

## 問2（単一選択）

パス固有のカスタム命令ファイル（path-specific custom instructions）の命名規則として正しいのはどれか？

- A) `*.copilot.md`
- B) `NAME.instructions.md`（`.instructions.md` で終わるファイル）
- C) `copilot-NAME.md`
- D) `NAME.prompt.md`

**正解: B**

> 解説: パス固有命令ファイルは `NAME.instructions.md` 形式で、ファイル名は `.instructions.md` で終わる必要がある。これらは `.github/instructions/` ディレクトリ以下に配置する。

---

## 問3（単一選択）

パス固有命令ファイルのフロントマターで、適用対象のファイルパスを指定するキーワードはどれか？

- A) `applyFor`
- B) `targetPath`
- C) `matchFiles`
- D) `applyTo`

**正解: D**

> 解説: `applyTo` キーワードにグロブ構文でパスパターンを指定する。例: `applyTo: "app/models/**/*.rb"`。複数パターンはカンマ区切りで指定できる。

---

## 問4（単一選択）

Copilot Code Review がカスタム命令ファイルから読み取る最大文字数はいくつか？

- A) 4,000文字
- B) 1,000文字
- C) 2,000文字
- D) 8,000文字

**正解: A**

> 解説: Copilot code review はカスタム命令ファイルの先頭 4,000 文字のみを読み取る。この制限は Copilot Chat および Copilot cloud agent には適用されない。

---

## 問5（単一選択）

`my-feature-branch` を `main` にマージするプルリクエストをレビューする際、Copilot はどのブランチのカスタム命令を使用するか？

- A) `my-feature-branch`（ソースブランチ）
- B) `main`（ベースブランチ）
- C) 両方のブランチのカスタム命令をマージして使用する
- D) リポジトリのデフォルトブランチ（必ずしも `main` とは限らない）

**正解: B**

> 解説: Copilot は PR のベースブランチ（マージ先）のカスタム命令を使用する。この例では `main` ブランチの `.github/copilot-instructions.md` が使われる。

---

## 問6（単一選択）

Copilot のカスタム命令が複数種類存在する場合、最も高い優先度を持つのはどれか？

- A) 個人命令（Personal instructions）
- B) リポジトリ命令（Repository custom instructions）
- C) 組織命令（Organization custom instructions）
- D) パス固有命令（Path-specific instructions）

**正解: A**

> 解説: 優先順位は「個人命令 > パス固有リポジトリ命令 > リポジトリ全体命令 > エージェント命令 > 組織命令」の順。ただしすべての関連命令が Copilot に提供される。

---

## 問7（単一選択）

パス固有命令ファイルのフロントマターに `excludeAgent: "code-review"` を設定した場合、その効果として正しいのはどれか？

- A) Copilot Chat でのみ使用され、Code Review と cloud agent には使用されない
- B) Copilot cloud agent のみがそのファイルを読み取り、Code Review は使用しない
- C) すべての Copilot 機能で使用不可になる
- D) 組織レベルの設定を上書きする

**正解: B**

> 解説: `excludeAgent: "code-review"` を指定すると Copilot code review はそのファイルを使用しない。`excludeAgent` キーワードを含まない場合は、code review と coding-agent の両方がそのファイルを使用する。

---

## 問8（単一選択）

組織レベルのカスタム命令（Organization custom instructions）を設定できるのは誰か？

- A) リポジトリへの書き込み権限を持つ任意のメンバー
- B) Copilot ライセンスを持つ任意のメンバー
- C) エンタープライズオーナーのみ
- D) 組織のオーナー（Organization owners）のみ

**正解: D**

> 解説: 組織命令は、Copilot Business または Copilot Enterprise サブスクリプションを持つ組織の**オーナーのみ**が設定できる。一般メンバーや管理者権限では設定できない。

---

## 問9（単一選択）

リポジトリで Copilot Code Review 向けのカスタム命令を無効化する設定箇所はどこか？

- A) Settings > Security > Code scanning > Copilot
- B) Settings > Actions > General > Copilot
- C) Settings > Copilot > Code review > "Use custom instructions when reviewing pull requests"
- D) Settings > Branches > Protection rules > Copilot

**正解: C**

> 解説: リポジトリの Settings > Copilot > Code review にある「Use custom instructions when reviewing pull requests」トグルで有効・無効を切り替える。デフォルトは有効。

---

## 問10（単一選択）

組織レベルのカスタム命令（Organization custom instructions）が利用できるプランはどれか？

- A) Copilot Business と Copilot Enterprise
- B) Copilot Free と Copilot Pro
- C) Copilot Pro のみ
- D) すべての Copilot プラン

**正解: A**

> 解説: 組織カスタム命令は Copilot Business または Copilot Enterprise サブスクリプションを持つ組織でのみ利用可能。個人プラン（Free、Pro、Pro+）では利用できない。

---

## 問11（単一選択）

個人カスタム命令（Personal instructions）を設定する場所として正しいのはどれか？

- A) GitHub.com の Copilot Chat ページ上のポップアップ
- B) リポジトリの `.github/personal-instructions.md` ファイル
- C) VS Code の設定ファイル（settings.json）
- D) GitHub アカウントの Developer settings

**正解: A**

> 解説: Personal instructions は GitHub.com の Copilot Chat ページのポップアップで設定する。他のユーザーには影響せず、自分の GitHub.com 上のすべての Copilot Chat 会話に適用される。

---

## 問12（単一選択）

エージェント命令（Agent instructions）として認識される**ファイル名ではないもの**はどれか？

- A) `AGENTS.md`
- B) `CLAUDE.md`
- C) `GEMINI.md`
- D) `COPILOT.md`

**正解: D**

> 解説: エージェント命令として認識されるのは `AGENTS.md`、`CLAUDE.md`、`GEMINI.md` のみ。`COPILOT.md` はドキュメントに定義されておらず、エージェント命令としては扱われない。

---

## 問13（単一選択）

パス固有命令ファイルの `applyTo` に複数のパスパターンを指定する場合の区切り文字はどれか？

- A) スペース
- B) 改行
- C) セミコロン（`;`）
- D) カンマ（`,`）

**正解: D**

> 解説: 複数パターンはカンマで区切る。例: `applyTo: "**/*.ts,**/*.tsx"` とすることでリポジトリ内のすべての TypeScript ファイルに適用できる。

---

## 問14（単一選択）

個人命令（Personal instructions）が適用されるスコープとして正しいのはどれか？

- A) GitHub.com 上のすべての Copilot Chat 会話
- B) 特定のリポジトリのみ
- C) 特定の組織のみ
- D) IDE（VS Code 等）の Copilot Chat のみ

**正解: A**

> 解説: Personal instructions は GitHub.com 上のすべての Copilot Chat 会話に適用される。特定のリポジトリや組織への限定はなく、また IDE の Copilot Chat には適用されない。

---

## 問15（単一選択）

現時点で GitHub.com において、パス固有命令（path-specific custom instructions）をサポートしている機能はどれか？

- A) コード補完（Code completion）のみ
- B) Copilot Chat のみ
- C) Copilot cloud agent と Copilot code review のみ
- D) すべての Copilot 機能

**正解: C**

> 解説: GitHub.com では、パス固有命令は現時点で Copilot cloud agent と Copilot code review のみがサポートする。IDE ではより広範にサポートされている。

---

## 問16（単一選択）

Prompt files（プロンプトファイル）のファイル拡張子として正しいのはどれか？

- A) `.prompt`
- B) `.copilot.md`
- C) `.instructions.md`
- D) `.prompt.md`

**正解: D**

> 解説: Prompt files は `*.prompt.md` という拡張子を持つ Markdown ファイル。自然言語の指示と追加コンテキストを組み合わせて記述でき、他のプロンプトファイルへの参照も可能。

---

## 問17（単一選択）

Prompt files が利用できる環境として正しいのはどれか？

- A) GitHub.com のみ
- B) GitHub Mobile のみ
- C) VS Code、Visual Studio、JetBrains IDE
- D) すべての Copilot 対応環境

**正解: C**

> 解説: Prompt files は VS Code、Visual Studio、JetBrains IDE でのみ利用可能。GitHub.com（ウェブ）では利用できない点に注意。

---

## 問18（単一選択）

Prompt files（プロンプトファイル）の現在のリリースステータスとして正しいのはどれか？

- A) 一般提供（Generally Available）
- B) パブリックプレビュー（Public preview）
- C) プライベートプレビュー（Private preview）
- D) 廃止予定（Deprecated）

**正解: B**

> 解説: Prompt files はパブリックプレビュー中であり、変更される可能性がある。GitHub Pre-release License Terms が適用される。

---

## 問19（単一選択）

カスタム命令（custom instructions）とプロンプトファイル（prompt files）の主な違いを説明した文として正しいのはどれか？

- A) カスタム命令はリポジトリ全体に自動適用され、プロンプトファイルは手動で呼び出す。後者はコードベース全体のコンテキストを毎回追加する
- B) プロンプトファイルは組織レベルでのみ設定できるが、カスタム命令はリポジトリレベルで設定できる
- C) カスタム命令は Markdown 形式ではないが、プロンプトファイルは Markdown 形式で記述する
- D) カスタム命令はコードベース全体のコンテキストを各 AI ワークフローに追加し、プロンプトファイルは特定のチャットインタラクションに命令を追加する

**正解: D**

> 解説: カスタム命令はコードベース全体のコンテキストを毎回の AI ワークフローに追加するのに対し、プロンプトファイルは特定のチャットインタラクションに対して命令を追加する際に使用する。

---

## 問20（単一選択）

Copilot Code Review が利用**できない**プランはどれか？

- A) Copilot Pro
- B) Copilot Pro+
- C) Copilot Business
- D) Copilot Free

**正解: D**

> 解説: Copilot Code Review は Copilot Pro、Pro+、Business、Enterprise プランで利用可能なプレミアム機能。Copilot Free プランでは利用できない。

---

## 問21（単一選択）

Copilot がプルリクエストにコードレビューを行う際、常に残すレビューの種類はどれか？

- A) Comment（コメント）
- B) Approve（承認）
- C) Request changes（変更のリクエスト）
- D) 内容に応じて Approve か Request changes を選択する

**正解: A**

> 解説: Copilot は常に「Comment」レビューのみを残す。「Approve」や「Request changes」は行わないため、Copilot のレビューは必須承認数にカウントされず、マージをブロックすることもない。

---

## 問22（単一選択）

Copilot がプルリクエストのコードレビューを完了するまでの通常の所要時間はどのくらいか？

- A) 1分未満
- B) 30秒未満
- C) 5分未満
- D) 10秒未満

**正解: B**

> 解説: Copilot のコードレビューは通常 30 秒未満で完了する。ただし Agentic capabilities（プロジェクト全体のコンテキスト収集等）が動作する場合は追加の時間がかかる場合がある。

---

## 問23（単一選択）

ユーザーが Copilot のレビューコメントに返信コメントを追加した場合、その返信に対して Copilot はどう反応するか？

- A) 自動的に返信する
- B) 24 時間以内にスレッドに返信する
- C) コメントを見ておらず、返信しない
- D) 返信するかどうかは設定で変更できる

**正解: C**

> 解説: ユーザーが Copilot のレビューコメントに追加したコメントは人間には見えるが、Copilot には見えない。Copilot は返信しない。

---

## 問24（単一選択）

Copilot Code Review のアジェンティック機能（Agentic capabilities）が使用するインフラストラクチャはどれか？

- A) 専用の Copilot サーバー（月額課金制）
- B) GitHub Actions の無料分数（GitHub-hosted runners）
- C) Azure Functions のサーバーレス基盤
- D) セルフホステッドランナー（必須）

**正解: B**

> 解説: アジェンティック機能はデフォルトで GitHub-hosted runners を使用し、GitHub Actions の**無料分数**を消費する。大型 runner へのアップグレードも可能だが、それには追加課金が発生する。

---

## 問25（単一選択）

Copilot がレビュー済みのプルリクエストに変更を加えた後、再レビューを依頼する正しい方法はどれか？

- A) 新しいプルリクエストを作成する
- B) Copilot Chat で `/review` コマンドを実行する
- C) Reviewers メニューの Copilot 名の隣にあるボタンをクリックする
- D) プルリクエストに `copilot-review` ラベルを追加する

**正解: C**

> 解説: 再レビューを依頼するには、プルリクエストの **Reviewers** メニューにある Copilot 名の隣のボタンをクリックする。ただし再レビュー時、以前に「Resolve」または👎をした同じコメントが再び表示される場合がある。

---

## 問26（単一選択）

Copilot Code Review でレビューの対象から**除外される**ファイルの種類として正しいのはどれか？

- A) `.yml` ファイル（GitHub Actions ワークフロー）
- B) `package.json` などの依存管理ファイル
- C) `.ts`（TypeScript）ファイル
- D) `README.md` などのドキュメントファイル

**正解: B**

> 解説: 依存管理ファイル（package.json、Gemfile.lock 等）、ログファイル、SVG ファイルはコードレビューの対象外となる。これらのファイルが PR に含まれていても Copilot はレビューしない。

---

## 問27（単一選択）

Copilot Code Review におけるモデル切り替えについて正しい説明はどれか？

- A) Enterprise プランのみモデル切り替えが可能
- B) 組織オーナーが許可すれば任意のモデルを選択できる
- C) モデル切り替えはサポートされていない
- D) Copilot Chat と同じ「Models」設定で制御できる

**正解: C**

> 解説: Copilot Code Review は専用にチューニングされたモデルミックスを使用しており、モデル切り替えはサポートされていない。なお、組織の「Models」設定は Copilot Chat のみを制御し、Code Review には影響しない。

---

## 問28（単一選択）

Copilot Code Review の月次プレミアムリクエストクォータに達した場合の動作として正しいのはどれか？

- A) 低品質モードで引き続きコードレビューを利用できる
- B) クォータがリセットされるまでコードレビューを利用できなくなる
- C) 上限の 2 倍に自動的に引き上げられる
- D) 管理者に通知が送信され、管理者が追加枠を付与できる

**正解: B**

> 解説: 月次クォータに達すると、クォータがリセットされるまでコードレビューを利用できなくなる。継続して利用するには Copilot プランのアップグレードまたは追加プレミアムリクエストの有効化が必要。

---

## 問29（単一選択）

自動コードレビューの「基本設定（Basic setting）」の**トリガーに含まれない**のはどれか？

- A) プルリクエストを「Open」として新規作成したとき
- B) Draft プルリクエストを初めて「Open」に切り替えたとき
- C) Open プルリクエストに新しいコミットをプッシュするたび
- D) A と B の両方

**正解: C**

> 解説: 基本設定では「PR を Open として作成したとき」と「Draft PR を Open に切り替えたとき」の 2 つがトリガー。新しいコミットのプッシュごとに再レビューするには「Review new pushes」設定を別途有効化する必要がある。

---

## 問30（単一選択）

Copilot ライセンスを持たない組織メンバーが Code Review を使用した場合、プレミアムリクエストの課金はどこに適用されるか？

- A) そのユーザーの個人アカウント
- B) プルリクエストのターゲットリポジトリのオーナー
- C) 組織または企業の有料超過使用料（paid overage usage）
- D) GitHub 側が負担するため課金なし

**正解: C**

> 解説: ライセンスなしユーザーが生成したプレミアムリクエストは、いずれの Copilot プランのクォータにも帰属せず、組織または企業の有料超過使用（overage usage）として課金される。請求レポートにも超過使用として表示される。

---

## 問31（複数選択）

エージェント命令（Agent instructions）として認識されるファイル名をすべて選べ。

- A) `AGENTS.md`
- B) `CLAUDE.md`
- C) `GEMINI.md`
- D) `GPT.md`
- E) `COPILOT.md`

**正解: A, B, C**

> 解説: エージェント命令として認識されるのは `AGENTS.md`、`CLAUDE.md`、`GEMINI.md` の 3 種類。`AGENTS.md` はリポジトリ内の任意の場所に複数配置でき（最も近いものが優先）、`CLAUDE.md` と `GEMINI.md` はリポジトリルートに 1 つ配置する。

---

## 問32（複数選択）

GitHub.com で利用できるカスタム命令の種類をすべて選べ。

- A) 個人命令（Personal instructions）
- B) リポジトリカスタム命令（Repository custom instructions）
- C) 組織カスタム命令（Organization custom instructions）
- D) エンタープライズカスタム命令（Enterprise custom instructions）
- E) プロジェクトカスタム命令（Project custom instructions）

**正解: A, B, C**

> 解説: GitHub.com では個人・リポジトリ・組織の 3 種類のカスタム命令が利用できる。エンタープライズレベルおよびプロジェクトレベルの独立したカスタム命令タイプはドキュメントに定義されていない。

---

## 問33（複数選択）

リポジトリカスタム命令（Repository custom instructions）として存在する種類をすべて選べ。

- A) リポジトリ全体命令（`.github/copilot-instructions.md`）
- B) パス固有命令（`.github/instructions/NAME.instructions.md`）
- C) エージェント命令（`AGENTS.md` 等）
- D) 一時命令（Temporary instructions）
- E) テスト専用命令（test.instructions.md）

**正解: A, B, C**

> 解説: リポジトリカスタム命令には、リポジトリ全体命令・パス固有命令・エージェント命令の 3 種類がある。「一時命令」「テスト専用命令」という独立した種類は存在しない（E はパス固有命令のファイル命名例としては有効）。

---

## 問34（複数選択）

Copilot Code Review がサポートしている環境をすべて選べ。

- A) GitHub.com
- B) GitHub Mobile
- C) VS Code
- D) Visual Studio
- E) Xcode
- F) JetBrains IDEs
- G) GitHub CLI（`gh` コマンド）

**正解: A, B, C, D, E, F**

> 解説: Copilot Code Review は GitHub.com、GitHub Mobile、VS Code、Visual Studio、Xcode、JetBrains IDEs の 6 環境でサポートされる。GitHub CLI は含まれない。

---

## 問35（複数選択）

Copilot Code Review のレビュー対象から**除外されるファイルタイプ**をすべて選べ。

- A) ログファイル
- B) SVG ファイル
- C) `package.json` などの依存管理ファイル
- D) TypeScript（`.ts`）ファイル
- E) YAML（`.yml`）ファイル

**正解: A, B, C**

> 解説: 除外されるのは依存管理ファイル（package.json、Gemfile.lock 等）、ログファイル、SVG ファイルの 3 種類。TypeScript や YAML ファイルはレビュー対象となる。

---

## 問36（複数選択）

Copilot Code Review のアジェンティック機能（Agentic capabilities）に含まれるものをすべて選べ。

- A) プロジェクト全体のコンテキスト収集（Full project context gathering）
- B) 提案を Copilot cloud agent に渡してブランチに適用する機能
- C) CI/CD パイプラインの自動修復
- D) プルリクエストの自動マージ機能

**正解: A, B**

> 解説: アジェンティック機能は「Full project context gathering（一般提供）」と「提案を Copilot cloud agent に渡す機能（パブリックプレビュー）」の 2 つ。CI/CD 修復や自動マージは含まれない。

---

## 問37（複数選択）

Copilot のレビューコメントに対してユーザーが実行できる操作をすべて選べ。

- A) リアクション（絵文字）を追加する
- B) コメントを返信する（ただし Copilot には見えない）
- C) コメントを解決（Resolve conversation）する
- D) コメントを非表示にする
- E) Copilot に再生成を指示してコメントを更新させる

**正解: A, B, C, D**

> 解説: Copilot のコメントは人間のレビューコメントと同様に操作できる（リアクション追加、コメント、解決、非表示）。ただし追加したコメントは Copilot には見えず、Copilot は返信しない。

---

## 問38（複数選択）

Copilot ライセンスを持たない組織メンバーが GitHub.com で Code Review を利用できるようにするために、有効化が必要なポリシーをすべて選べ。

- A) Premium request paid usage（プレミアムリクエスト有料使用）
- B) Allow members without a Copilot license to use Copilot code review in GitHub.com
- C) Enable GitHub Actions for Copilot（GitHub Actions の Copilot 向け有効化）
- D) Allow code review for all repositories in the organization

**正解: A, B**

> 解説: 2 つのポリシーの有効化が必要。まず「Premium request paid usage」を有効にし、次に「Allow members without a Copilot license to use Copilot code review in GitHub.com」を有効にする。後者はデフォルトで無効。

---

## 問39（複数選択）

組織カスタム命令（Organization custom instructions）が現在サポートされている Copilot 機能をすべて選べ。

- A) GitHub.com 上の Copilot Chat
- B) GitHub.com 上の Copilot code review
- C) GitHub.com 上の Copilot cloud agent
- D) IDE（VS Code 等）上の Copilot Chat

**正解: A, B, C**

> 解説: 組織カスタム命令は、GitHub.com 上の Copilot Chat、Copilot code review、Copilot cloud agent でのみサポートされる。IDE 上の Copilot Chat（VS Code 等）はサポート対象外。

---

## 問40（複数選択）

Prompt files（プロンプトファイル）の主なユースケースとして正しいものをすべて選べ。

- A) コード生成（React フォームや API モックなどの再利用可能なプロンプト）
- B) ドメイン専門知識（セキュリティプラクティスやコンプライアンスチェックの共有）
- C) チームコラボレーション（パターンやガイドラインのドキュメント化と参照）
- D) オンボーディング（複雑なプロセスのステップバイステップガイド）
- E) リポジトリ全体への自動適用（毎リクエストへのコンテキスト追加）

**正解: A, B, C, D**

> 解説: Prompt files の主なユースケースはコード生成、ドメイン専門知識の共有、チームコラボレーション、オンボーディングの 4 つ。E はカスタム命令（instructions）の役割であり、prompt files は特定のチャットインタラクションで手動で使用する。

---

## 問41（複数選択）

Copilot Code Review の自動レビューを設定できる主体をすべて選べ。

- A) 個人ユーザー（Copilot Pro または Pro+ プラン）
- B) リポジトリオーナー（repository owners）
- C) 組織オーナー（organization owners）
- D) エンタープライズオーナー（enterprise owners）単独での設定

**正解: A, B, C**

> 解説: 自動レビューは個人ユーザー（自分が作成するすべての PR に対して）、リポジトリオーナー（リポジトリ内の全 PR に対して）、組織オーナー（組織内の一部または全リポジトリに対して）が設定できる。

---

## 問42（複数選択）

Copilot Code Review の月次プレミアムリクエストクォータが消費されるシナリオをすべて選べ。

- A) GitHub.com や GitHub Mobile でプルリクエストを Copilot にレビューさせるとき
- B) IDE（VS Code 等）でコードを Copilot にレビューさせるとき
- C) カスタム命令ファイルを更新するとき
- D) 組織のコードレビューポリシーを変更するとき

**正解: A, B**

> 解説: PR のレビューと IDE でのコードレビューが行われるたびに月次クォータが 1 消費される。設定変更（カスタム命令の更新・ポリシー変更）ではクォータは消費されない。

---

## 問43（複数選択）

パス固有命令ファイルのフロントマターで使用できるキーワードをすべて選べ。

- A) `applyTo`（適用対象パスの指定）
- B) `excludeAgent`（特定エージェントからの除外）
- C) `priority`（他命令ファイルとの優先度設定）
- D) `version`（ファイルバージョンの指定）

**正解: A, B**

> 解説: フロントマターで使用できるのは `applyTo`（グロブパターンで適用対象を指定）と `excludeAgent`（`"code-review"` または `"coding-agent"` で除外対象を指定）の 2 つ。`priority` や `version` キーワードはドキュメントに存在しない。

---

## 問44（複数選択）

Copilot Code Review が利用できるプランをすべて選べ。

- A) Copilot Free
- B) Copilot Pro
- C) Copilot Pro+
- D) Copilot Business
- E) Copilot Enterprise

**正解: B, C, D, E**

> 解説: Copilot Code Review はプレミアム機能であり、Copilot Pro、Pro+、Business、Enterprise プランで利用できる。Copilot Free は対象外。

---

## 問45（複数選択）

Copilot Code Review で提案された変更（suggested changes）に対してユーザーが実行できることをすべて選べ。

- A) 単一の提案を承認して個別にコミットする
- B) 複数の提案をグループ化して 1 つのコミットとしてまとめて適用する
- C) 「Implement suggestion」ボタンで Copilot cloud agent に実装を委譲する（パブリックプレビュー）
- D) 提案をすべて自動承認してプルリクエストをマージする

**正解: A, B, C**

> 解説: 単一適用、グループ適用（まとめてコミット）、Copilot cloud agent への委譲（パブリックプレビュー）の 3 つが可能。提案の自動承認とマージ機能は存在しない。

---

## 問46（複数選択）

GitHub.com でリポジトリカスタム命令を使用する際の正しい説明をすべて選べ。

- A) ファイルを保存すると即座に Copilot から利用可能になる
- B) Copilot Chat でリポジトリをアタッチすると、そのリポジトリの命令が使用される
- C) 命令が使用された場合、レスポンスの「参照（References）」リストに命令ファイルが表示される
- D) 命令の内容はチャット画面にすべてユーザーに表示される

**正解: A, B, C**

> 解説: 命令ファイルは保存後すぐに利用可能になり、Chat のリファレンスリストに表示される（クリックでファイルを開ける）。ただし命令の内容はユーザーには表示されず、Copilot 内部でのみ使用される。

---

## 問47（複数選択）

カスタム命令ファイルに含めると効果的な内容として推奨されているものをすべて選べ。

- A) プロジェクトの概要・目的・背景情報
- B) リポジトリのフォルダ構造（重要なディレクトリとファイル）
- C) コーディング規約と命名規則
- D) 使用ライブラリ・フレームワーク・バージョン情報

**正解: A, B, C, D**

> 解説: 公式ドキュメントでは、プロジェクト概要、フォルダ構造、コーディング規約、ライブラリ・フレームワーク情報の 4 つを命令ファイルに含めることを推奨している。短く自己完結した文で記述するのが効果的。

---

## 問48（複数選択）

自動コードレビューの「基本設定（Basic setting）」のトリガーをすべて選べ。

- A) プルリクエストを「Open」として新規作成したとき
- B) Draft プルリクエストを初めて「Open」に切り替えたとき
- C) Open プルリクエストに新しいコミットをプッシュするたびに（追加設定なし）
- D) プルリクエストのタイトルを変更したとき

**正解: A, B**

> 解説: 基本設定のトリガーは「PR を Open として作成」と「Draft PR を初めて Open に切り替え」の 2 つ。新しいコミットのプッシュで再レビューするには「Review new pushes」、Draft 中にレビューするには「Review draft pull requests」を別途設定する。

---

## 問49（複数選択）

パス固有命令（path-specific custom instructions）の特性として正しいものをすべて選べ。

- A) `applyTo` で指定されたパターンにマッチするファイルに関わるリクエストにのみ適用される
- B) パス固有命令とリポジトリ全体命令の両方がマッチする場合、両方の命令が使用される
- C) `excludeAgent` キーワードで特定のエージェント（code-review または coding-agent）を除外できる
- D) 複数の `applyTo` パターンは改行で区切る

**正解: A, B, C**

> 解説: パス固有命令はマッチするファイルに対してのみ適用され、リポジトリ全体命令と両方マッチする場合は両方が使用される。`excludeAgent` で特定エージェントを除外でき、複数パターンはカンマ区切り（改行ではない）。

---

## 問50（複数選択）

組織カスタム命令（Organization custom instructions）に関する正しい説明をすべて選べ。

- A) 組織のすべてのメンバーに適用される
- B) メンバーが Copilot サブスクリプションをどの組織から受けているかに関わらず適用される
- C) 個人命令（Personal instructions）より優先度が高い
- D) Copilot Business と Copilot Enterprise プランの組織でのみ設定可能

**正解: A, B, D**

> 解説: 組織命令は組織のすべてのメンバーに適用され、そのメンバーの Copilot サブスクリプション元に関わらず有効。ただし優先度は最も低く（個人 > リポジトリ > 組織）、Copilot Business/Enterprise 組織でのみ設定可能。

---

*以上、50問（単一選択 30問 + 複数選択 20問）*
