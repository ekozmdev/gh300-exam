# GH-300 新範囲クイズ: Agent Mode / Edit Mode / Plan Mode

> 新試験（2026年1月〜）で新規追加された分野のクイズです。
> 出典: [GitHub Copilot Chat in your IDE](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)

## 出典

- [Chat in IDE (GitHub Docs)](https://docs.github.com/en/copilot/how-tos/chat-with-copilot/chat-in-ide)
- [GitHub Copilot Features](https://docs.github.com/en/copilot/get-started/features)
- [GitHub Copilot Plans](https://docs.github.com/en/copilot/get-started/plans)
- [Local Agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/local-agents)
- [Planning with Agents in VS Code](https://code.visualstudio.com/docs/copilot/agents/planning)
- [Agents Overview in VS Code](https://code.visualstudio.com/docs/copilot/agents/overview)

---

## 問1（単一選択）

Agent Mode が最も適しているユースケースはどれですか？

- A) 特定のファイルを素早く変更したい場合
- B) コードに関する質問に答えてほしい場合
- C) 複数のステップや反復、エラー処理を含む複雑なタスクを自律的に実行させたい場合
- D) コード変更前に詳細な実装計画を立てたい場合

**正解: C**

> 解説: Agent Mode は複雑なタスク・複数ステップ・エラー処理・外部ツール（MCP）との統合が必要な場合に最適です。Copilot が自律的にどのファイルを変更するかを判断し、ターミナルコマンドも実行します。

---

## 問2（単一選択）

Edit Mode が最も適しているユースケースはどれですか？

- A) 複雑なマルチステップタスクを自律的に実行したい場合
- B) 特定のファイルセットへの素早い更新を細かく制御したい場合
- C) 実装前に詳細な計画を立てたい場合
- D) コードベース全体にわたる大規模なリファクタリングを自律的に行いたい場合

**正解: B**

> 解説: Edit Mode はユーザーが working set（作業ファイルセット）を指定し、LLM リクエスト数を完全に制御できるため、定義済みファイルセットへの素早い特定の変更に最適です。

---

## 問3（単一選択）

Plan Mode の計画フェーズ中、Copilot はコード変更を行いますか？

- A) いいえ、読み取り専用ツールのみを使用して計画を作成する
- B) はい、すぐにコード変更を開始する
- C) はい、ただしユーザーが承認したファイルのみ変更する
- D) はい、ただし1ファイルのみ変更する

**正解: A**

> 解説: Plan Mode の計画エージェントはコード変更を行わず、読み取り専用ツールとコードベース分析を使用して計画を作成します。コード変更はユーザーが計画を承認した後にのみ実行されます。

---

## 問4（単一選択）

Agent Mode でどのファイルを変更するかを決定するのは誰ですか？

- A) ユーザーが working set を指定して決定する
- B) Copilot が自律的に判断して決定する
- C) IDE のリンターが判断して決定する
- D) 管理者が事前に設定したルールで決定する

**正解: B**

> 解説: Agent Mode では Copilot が自律的に変更が必要なファイルを判断します。ユーザーがファイルを指定する（working set）のは Edit Mode の特徴です。

---

## 問5（単一選択）

Edit Mode の「working set」とは何ですか？

- A) AI モデルのコンテキストウィンドウのサイズ
- B) Copilot が実行できるターミナルコマンドのセット
- C) ユーザーが Copilot に変更を許可するファイルのセット
- D) リポジトリ内のすべてのファイルのセット

**正解: C**

> 解説: Edit Mode の working set は、ユーザーが Copilot に変更を許可するファイルの集合です。「Add all open files」ですべての開いているファイルを追加するか、個別に検索してファイルを追加できます。

---

## 問6（単一選択）

Edit Mode（Copilot Edits）が利用可能な IDE の組み合わせはどれですか？

- A) VS Code のみ
- B) VS Code と Visual Studio
- C) VS Code と JetBrains IDEs
- D) Copilot Chat が対応するすべての IDE

**正解: C**

> 解説: GitHub 公式ドキュメントによると、Edit Mode は VS Code と JetBrains IDEs でのみ利用可能です。Visual Studio では Agent Mode（17.14 以降プレビュー）のみ対応しており、Edit Mode は提供されていません。

---

## 問7（単一選択）

Agent Mode でユーザーがプロンプトを送信したとき、プレミアムリクエストはどのようにカウントされますか？

- A) 0（常に無料）
- B) 1 リクエスト（モデルの乗数倍）
- C) 変更したファイル数と同じ数のリクエスト
- D) Copilot が実行したツール呼び出しの数と同じ数

**正解: B**

> 解説: Agent Mode ではユーザーが入力するプロンプトごとに 1 プレミアムリクエスト（モデルの乗数を掛けた値）が消費されます。ただし、デフォルト（含まれている）モデルの乗数は 0 なので、そのモデルを使用するとプレミアムリクエストは消費されません。

---

## 問8（単一選択）

Agent Mode で Copilot が実行するフォローアップのツール呼び出し（tool calls）はプレミアムリクエストとして課金されますか？

- A) はい、ツール呼び出しごとに 1 リクエスト課金される
- B) はい、ただし通常の半額の料金
- C) 使用するモデルによって異なる
- D) いいえ、課金されるのはユーザーが入力したプロンプトのみ

**正解: D**

> 解説: Agent Mode のプレミアムリクエスト課金はユーザーが入力したプロンプトのみが対象です。エージェントが行うツール呼び出しやバックグラウンドの処理（follow-up actions）は課金されません。

---

## 問9（単一選択）

Plan Mode の計画が完成した後、「Start Implementation」をクリックするとどうなりますか？

- A) Copilot Chat が Agent Mode に切り替わり、実装計画に基づいて実装が開始される
- B) 変更がリポジトリにコミットされる
- C) 計画が GitHub の Issue として作成される
- D) Edit Mode が有効になる

**正解: A**

> 解説: 「Start Implementation」をクリックすると、Copilot Chat は Agent Mode に切り替わり、作成された実装計画に基づいてエージェントセッションが開始されコード変更が行われます。

---

## 問10（単一選択）

Plan Mode が実装計画を自動的に保存するファイルパスはどれですか？

- A) .copilot/plan.md
- B) .github/plan.md
- C) /memories/session/plan.md
- D) docs/implementation-plan.md

**正解: C**

> 解説: Plan Mode の計画エージェントは実装計画を `/memories/session/plan.md` というセッションメモリファイルに自動保存します。ただし、セッションメモリはセッション終了時にクリアされるため、次のセッションでは利用できません。

---

## 問11（単一選択）

Plan Mode に切り替えてすぐに計画を開始できるスラッシュコマンドはどれですか？

- A) /agent
- B) /task
- C) /implement
- D) /plan

**正解: D**

> 解説: VS Code では `/plan` スラッシュコマンドを使用することで、Plan Mode に切り替えると同時に計画作業を 1 ステップで開始できます。例：`/plan Add unit tests for all API endpoints`

---

## 問12（単一選択）

組織管理者は Agent Mode をユーザーの IDE で無効化できますか？

- A) いいえ、Agent Mode は常に利用可能
- B) はい、組織設定を通じて無効化できる
- C) GitHub Enterprise プランのみで無効化可能
- D) 特定のリポジトリのみで無効化可能

**正解: B**

> 解説: 組織またはエンタープライズの管理者は、ユーザーの IDE での Agent Mode を無効化できます。Agent Mode のドロップダウンが表示されない場合、管理者によって無効化されている可能性があります。

---

## 問13（単一選択）

VS Code のローカルエージェントドキュメントにおいて、Edit Mode はどのように説明されていますか？

- A) マルチファイル編集に推奨されるモード
- B) パブリックプレビューとして利用可能
- C) 単一ファイル編集専用のモード
- D) 非推奨（deprecated）であり、Agent Mode に置き換えられた

**正解: D**

> 解説: VS Code のローカルエージェントドキュメントでは、Edit Mode は「非推奨（deprecated）」と明記されており、マルチファイルコード編集には Agent Mode の使用が推奨されています。`chat.editMode.hidden` 設定を変更することで復元は可能です。

---

## 問14（単一選択）

Plan Mode は主にどの IDE で利用可能ですか？

- A) VS Code のみ
- B) すべての Copilot Chat 対応 IDE
- C) VS Code と Visual Studio
- D) VS Code と JetBrains IDEs

**正解: A**

> 解説: 公式ドキュメントによると、Plan Mode は主に VS Code で利用可能です。JetBrains IDEs の Copilot Chat セクションや Visual Studio のセクションでは Plan Mode は言及されていません。

---

## 問15（単一選択）

Agent Mode でデフォルト（含まれている）モデルを使用した場合、プレミアムリクエストの消費量はどうなりますか？

- A) 1 プレミアムリクエスト消費される
- B) 0.5 プレミアムリクエスト消費される
- C) 0（消費されない）
- D) モデルの使用時間に応じて課金される

**正解: C**

> 解説: デフォルト（含まれている）モデルの乗数は 0 です。したがって、Agent Mode でこのモデルを使用してプロンプトを送信してもプレミアムリクエストは消費されません。プレミアムモデルを選択した場合は、そのモデルの乗数に応じて消費されます。

---

## 問16（単一選択）

VS Code でコパイロットチャットビューを開くキーボードショートカットはどれですか？

- A) Shift+Ctrl+P
- B) Ctrl+Alt+I（Windows/Linux）または ⌃⌘I（Mac）
- C) Ctrl+Shift+G
- D) Alt+C

**正解: B**

> 解説: VS Code でチャットビューを開くキーボードショートカットは Ctrl+Alt+I（Windows/Linux）または ⌃⌘I（Mac）です。なお、インラインチャットを開くショートカットは Ctrl+I / ⌘I（Mac）です。

---

## 問17（単一選択）

VS Code エージェントセッションの「Autopilot」パーミッションレベルの説明として正しいものはどれですか？

- A) すべてのツール呼び出しを自動承認し、質問にも自動応答し、タスクが完了するまで完全自律で動作する
- B) すべてのツール呼び出しを読み取り専用モードで実行する
- C) ファイル変更のたびに手動承認が必要
- D) Cloud Agent モードに自動で切り替える

**正解: A**

> 解説: Autopilot パーミッションレベル（プレビュー）は、すべてのツール呼び出しを自動承認し、質問にも自動応答して、タスクが完了するまでエージェントが完全に自律的に動作するモードです。

---

## 問18（単一選択）

Agent Mode において、Copilot がターミナルコマンドを提案する際のデフォルトの動作はどれですか？

- A) コマンドはユーザーの確認なしに自動実行される
- B) ターミナルコマンドのスクリプトファイルが作成され、後で実行できる
- C) Enterprise プランのみターミナルコマンドが利用可能
- D) ユーザーがコマンドの実行を許可するかどうかを確認する必要がある

**正解: D**

> 解説: デフォルト設定では、Agent Mode で Copilot がターミナルコマンドを実行する際、ユーザーは実行を許可するかどうかを確認する必要があります。Bypass Approvals や Autopilot パーミッションレベルを使用すると自動承認されます。

---

## 問19（単一選択）

VS Code のサブエージェント（subagent）に関する説明として正しいものはどれですか？

- A) クラウドで動作するコーディングエージェント
- B) 別の組織が提供するサードパーティエージェント
- C) Plan Mode のエージェントの別名
- D) メインチャットセッション内で独自のコンテキストウィンドウを持つ独立したエージェント

**正解: D**

> 解説: サブエージェントは、メインチャットセッション内で独自のコンテキストウィンドウを持つ独立したエージェントです。ユーザーからのフィードバックを待たずに独立して動作し、完了後に結果をメインセッションに返します。

---

## 問20（単一選択）

サブエージェントは他のサブエージェントを作成できますか？

- A) いいえ、サブエージェントは他のサブエージェントを作成できない
- B) はい、最大 3 レベルまで作成できる
- C) はい、ただし Enterprise プランのみ
- D) `runSubagent` ツールが有効な場合のみ作成できる

**正解: A**

> 解説: サブエージェントはメインセッションと同じツールと AI モデルを使用しますが、他のサブエージェントを作成する機能はありません。サブエージェントを有効にするには `runSubagent` ツールを先に有効化する必要があります。

---

## 問21（単一選択）

Plan Mode で計画が完成した後、「Open in Editor」をクリックするとどうなりますか？

- A) 計画がリポジトリの新しいブランチにコミットされる
- B) Copilot Chat が Agent Mode に切り替わり、エディタのタブに Markdown 形式で計画の詳細が生成される
- C) 計画がクラウドエージェントに送信される
- D) Edit Mode が有効になり、計画がプロンプトとして使用される

**正解: B**

> 解説: 「Open in Editor」をクリックすると、Copilot Chat は Agent Mode に切り替わり、実装計画の詳細を含む Markdown がエディタのタブに生成されます。このファイルを自分で実装の参考にしたり、Markdown ファイルとして保存したりできます。

---

## 問22（単一選択）

Plan Mode の計画エージェントが生成する計画草案に含まれる内容として正しいものはどれですか？

- A) 完成したコードの変更
- B) テストスクリプトと CI/CD の設定
- C) 高レベルのサマリー、実装ステップの内訳、曖昧な要件に関するオープンな質問
- D) Git コミットメッセージのテンプレート

**正解: C**

> 解説: Plan Mode の計画エージェントは、タスクの高レベルなサマリー、実装・検証のステップの内訳、そして曖昧な要件に関するオープンな質問を含む計画草案を提示します。

---

## 問23（単一選択）

Visual Studio（VS Code ではない）で Copilot Edits（Agent Mode）が利用可能になったのはどのバージョンからですか？

- A) Visual Studio 17.8
- B) Visual Studio 17.10
- C) Visual Studio 17.14（パブリックプレビュー）
- D) Visual Studio 2019

**正解: C**

> 解説: Visual Studio での Copilot Edits（Agent Mode を含む）は、Visual Studio 17.14 以降でパブリックプレビューとして利用可能です。17.8 と 17.9 では Copilot Chat 拡張機能の手動インストールが必要、17.10 以降は組み込みとなっています。

---

## 問24（単一選択）

VS Code において `@` シンボルをチャットプロンプトで使用すると何ができますか？

- A) ファイルを参照する
- B) スラッシュコマンドを呼び出す
- C) チャット参加者（特定ドメインの専門家）を呼び出す
- D) ターミナルコマンドを実行する

**正解: C**

> 解説: VS Code のチャットで `@` を使用すると、`@vscode` や `@terminal` などのチャット参加者（chat participants）を呼び出すことができます。`#` がファイルや変数の参照、`/` がスラッシュコマンドです。

---

## 問25（単一選択）

Copilot Chat の Ask Mode の主な目的は何ですか？

- A) コードベース、コーディング、一般技術概念に関する質問に答える
- B) コードを自律的に変更する
- C) 実装計画を作成する
- D) ターミナルコマンドを実行する

**正解: A**

> 解説: Ask Mode はコードベース、コーディング、一般的な技術概念に関する質問に答えることに最適化されています。ファイルの変更は行わず、コードの動作理解やアイデア探索に使用します。

---

## 問26（単一選択）

VS Code エージェントセッションの「Bypass Approvals」パーミッションレベルを選択した場合の動作はどれですか？

- A) すべてのツール呼び出しを自動承認するが、エージェントが確認の質問をすることがある
- B) 読み取り専用のツールのみ自動承認する
- C) すべてのツール呼び出し・質問への応答も自動化され完全自律で動作する
- D) ファイル変更のみ自動承認し、ターミナルコマンドは手動承認する

**正解: A**

> 解説: Bypass Approvals は確認ダイアログなしにすべてのツール呼び出しを自動承認しますが、エージェントは作業中に確認の質問をすることがあります。すべてを完全自律化するのは Autopilot パーミッションレベルです。

---

## 問27（単一選択）

Agent Mode において MCP サーバーを活用することは可能ですか？

- A) いいえ、Agent Mode は外部ツールと連携できない
- B) Enterprise プランのみで利用可能
- C) Cloud Agent 版のみで利用可能
- D) はい、外部アプリケーションとの統合は Agent Mode のユースケースの一つ

**正解: D**

> 解説: MCP（Model Context Protocol）サーバーとの連携は Agent Mode の典型的なユースケースの一つです。「The task requires Copilot to integrate with external applications, such as an MCP server」と公式ドキュメントに明記されています。

---

## 問28（単一選択）

サブエージェントはメインセッションとは異なる AI モデルやツールを使用しますか？

- A) はい、サブエージェントはより上位のモデルを使用する
- B) はい、サブエージェントは読み取り専用ツールのみ使用できる
- C) 管理者設定によって異なる
- D) いいえ、サブエージェントはメインセッションと同じツールと AI モデルを使用する

**正解: D**

> 解説: サブエージェントはメインセッションと同じツールと AI モデルを使用します。ただし、独自のコンテキストウィンドウで独立して動作し、他のサブエージェントを作成することはできません。

---

## 問29（単一選択）

Copilot Edits（Agent Mode を含む）が利用可能な IDE の組み合わせとして GitHub ドキュメントに記載されているものはどれですか？

- A) VS Code のみ
- B) VS Code と Visual Studio と JetBrains IDEs
- C) VS Code と JetBrains IDEs のみ
- D) すべての Copilot Chat 対応 IDE

**正解: B**

> 解説: GitHub ドキュメントの機能ページによると、Copilot Edits は VS Code、Visual Studio、JetBrains IDEs で利用可能です。ただし Visual Studio での Agent Mode は 17.14 以降のプレビュー機能で、Edit Mode は Visual Studio では提供されていません。

---

## 問30（単一選択）

VS Code でエディタや統合ターミナル内にインラインチャットを直接開くキーボードショートカットはどれですか？

- A) Ctrl+Shift+I または Cmd+Shift+I
- B) Ctrl+Alt+I または ⌃⌘I（Mac）
- C) Ctrl+Enter または Cmd+Enter
- D) Ctrl+I（Windows/Linux）または ⌘I（Mac）

**正解: D**

> 解説: VS Code でエディタや統合ターミナル内に直接インラインチャットを開くショートカットは Ctrl+I（Windows/Linux）または ⌘I（Mac）です。Ctrl+Alt+I / ⌃⌘I はサイドパネルのチャットビューを開くショートカットです。

---

## 問31（複数選択）

GitHub ドキュメントで「Copilot Edits」のモードとして記載されているものをすべて選んでください。

- A) Edit Mode
- B) Agent Mode
- C) Ask Mode
- D) Plan Mode
- E) Review Mode

**正解: A, B**

> 解説: GitHub ドキュメントの機能ページによると、Copilot Edits には Edit Mode と Agent Mode の 2 つのモードがあります。Ask Mode と Plan Mode は VS Code の Copilot Chat のモード（エージェント）であり、「Copilot Edits」のモードとしては分類されていません。

---

## 問32（複数選択）

VS Code の Copilot Chat でモードドロップダウン（agents dropdown）にデフォルトで表示されるモードをすべて選んでください。

- A) Ask
- B) Plan
- C) Edit
- D) Agent
- E) Review

**正解: A, B, D**

> 解説: VS Code の Copilot Chat ではデフォルトで Agent、Plan、Ask の 3 つのモードがドロップダウンに表示されます。Edit Mode は deprecated（非推奨）となり、`chat.editMode.hidden` 設定で復元可能ですが、デフォルトでは非表示です。Review モードは存在しません。

---

## 問33（複数選択）

Agent Mode について正しい説明をすべて選んでください。

- A) Copilot が変更するファイルを自律的に決定する
- B) Copilot がターミナルコマンドを提案・実行できる
- C) ユーザーが必ず working set でファイルを指定する必要がある
- D) ユーザーが入力するプロンプトはプレミアムリクエストとして課金される
- E) ツール呼び出しはすべて追加のプレミアムリクエストとして課金される

**正解: A, B, D**

> 解説: Agent Mode では Copilot が変更ファイルを自律的に判断し（A）、ターミナルコマンドの実行も可能（B）で、ユーザープロンプトがプレミアムリクエストとして課金されます（D）。ファイルの指定は Edit Mode の特徴（C は誤り）、ツール呼び出しは課金されません（E は誤り）。

---

## 問34（複数選択）

Plan Mode について正しい説明をすべて選んでください。

- A) 計画フェーズで使用するのは読み取り専用ツールのみ
- B) 計画の作成中にコード変更が行われる
- C) 計画完了後に Agent Mode へ引き継ぐことができる
- D) 実装計画はセッションメモリファイルに自動保存される
- E) JetBrains IDEs でも Plan Mode が利用可能

**正解: A, C, D**

> 解説: Plan Mode は読み取り専用ツールのみを使用（A）、計画フェーズではコード変更は行われない（B は誤り）、Agent Mode への引き継ぎが可能（C）、計画は `/memories/session/plan.md` に自動保存（D）されます。Plan Mode は主に VS Code 専用のため（E は誤り）。

---

## 問35（複数選択）

Plan Mode で実装計画が完成した後にユーザーが取れる行動をすべて選んでください。

- A) 「Start Implementation」をクリックして Agent Mode に切り替える
- B) 「Open in Editor」をクリックして Markdown 形式の計画をエディタに表示する
- C) 変更を直接コミットする
- D) 計画をチーム討議のために Markdown ファイルとして保存する
- E) 計画をさらに反復・改良する

**正解: A, B, D, E**

> 解説: 計画完成後は「Start Implementation」（Agent Mode へ切り替え）、「Open in Editor」（Markdown として表示・保存）が選択でき、チームでの議論のために保存したり（D）、さらに反復・改良したり（E）できます。Plan Mode から直接コミットする機能はありません（C は誤り）。

---

## 問36（複数選択）

VS Code のサブエージェントについて正しい説明をすべて選んでください。

- A) 独自のコンテキストウィンドウを持つ独立したエージェントとして動作する
- B) ユーザーからのフィードバックを待たずに独立して実行される
- C) 最終結果をメインチャットセッションに返す
- D) 他のサブエージェントを作成できる
- E) メインセッションと同じツールと AI モデルを使用する

**正解: A, B, C, E**

> 解説: サブエージェントは独自のコンテキストウィンドウで（A）、ユーザーフィードバックなしで独立して動作し（B）、完了後に結果をメインセッションに返します（C）。メインセッションと同じツール・モデルを使用しますが（E）、他のサブエージェントを作成することはできません（D は誤り）。

---

## 問37（複数選択）

VS Code のエージェントセッションで利用可能なパーミッションレベルをすべて選んでください。

- A) Default Approvals（デフォルト承認）
- B) Bypass Approvals（承認バイパス）
- C) Autopilot（自動操縦、プレビュー）
- D) Read-only（読み取り専用）
- E) Admin（管理者）

**正解: A, B, C**

> 解説: VS Code のエージェントセッションには「Default Approvals」「Bypass Approvals」「Autopilot（プレビュー）」の 3 つのパーミッションレベルがあります。Read-only や Admin というパーミッションレベルは存在しません。

---

## 問38（複数選択）

VS Code に組み込まれているビルトインエージェントをすべて選んでください。

- A) Agent
- B) Plan
- C) Review
- D) Ask
- E) Debug

**正解: A, B, D**

> 解説: VS Code のローカルエージェントには「Agent」「Plan」「Ask」の 3 つのビルトインエージェントがあります。それぞれ自律的なコード変更、実装計画の作成、質問への回答に特化しています。Review や Debug はビルトインエージェントとして存在しません。

---

## 問39（複数選択）

Agent Mode でのプレミアムリクエスト課金について正しい説明をすべて選んでください。

- A) ユーザーが入力するプロンプトごとに 1 プレミアムリクエスト（モデル乗数倍）が課金される
- B) ツール呼び出しはプレミアムリクエストとして課金されない
- C) デフォルト（含まれている）モデルの乗数は 0 なので、使用してもプレミアムリクエストは消費されない
- D) エージェントが行うすべての操作がプレミアムリクエストとして課金される
- E) ターミナルコマンドの実行は別途課金される

**正解: A, B, C**

> 解説: Agent Mode の課金はユーザーのプロンプト 1 つにつき 1 プレミアムリクエスト（モデル乗数倍）（A）、ツール呼び出しは無料（B）、デフォルトモデルは乗数 0（C）です。エージェントによるすべての操作が課金されるわけでなく（D は誤り）、ターミナルコマンド実行の別途課金もありません（E は誤り）。

---

## 問40（複数選択）

VS Code のチャットプロンプトで `#` を使って明示的に参照できるものをすべて選んでください。

- A) #file（特定ファイル）
- B) #codebase（コードベース全体）
- C) #terminalSelection（ターミナルの選択テキスト）
- D) #fetch（URL のフェッチ）
- E) #agent（エージェント指定）

**正解: A, B, C, D**

> 解説: VS Code では `#` を使ってファイル（#file）、コードベース（#codebase）、ターミナル選択テキスト（#terminalSelection）、URL フェッチ（#fetch）などをプロンプトのコンテキストとして参照できます。`#agent` というチャット変数は存在しません。

---

## 問41（複数選択）

Agent Mode と Edit Mode の違いについて正しい説明をすべて選んでください。

- A) Agent Mode は変更するファイルを自律的に決定するが、Edit Mode はユーザーがファイルを指定する
- B) Agent Mode はターミナルコマンドを実行できるが、Edit Mode は自律的なターミナルコマンド実行をしない
- C) Edit Mode はユーザーが LLM リクエスト数を完全に制御できるが、Agent Mode は制御できない
- D) Edit Mode はすべての IDE で利用可能だが、Agent Mode は VS Code のみ
- E) Plan Mode を使わなければ Agent Mode は利用できない

**正解: A, B, C**

> 解説: Agent Mode はファイルを自律的に決定（A）、ターミナルコマンドを実行（B）でき、Edit Mode はユーザーが LLM リクエスト数を制御（C）できます。Edit Mode は VS Code と JetBrains のみ（D は誤り）、Plan Mode なしでも Agent Mode は利用可能（E は誤り）です。

---

## 問42（複数選択）

Edit Mode（Copilot Edits）の working set へのファイルの追加方法として正しいものをすべて選んでください。

- A) 「Add all open files」ボタンですべての開いているファイルを追加
- B) ファイルを個別に検索して追加
- C) Agent Mode が自動的に最適なファイルを追加する
- D) リポジトリ内のすべてのファイルが自動的に追加される
- E) JetBrains では、ファイルをドラッグしてチャットプロンプトボックスにドロップして参照を追加

**正解: A, B, E**

> 解説: Working set へのファイル追加は、「Add all open files」での一括追加（A）または個別検索での追加（B）が可能です。JetBrains ではドラッグ＆ドロップでファイルをチャットプロンプトに参照として追加することもできます（E）。エージェントが自動追加したり、全ファイルが自動追加されることはありません（C, D は誤り）。

---

## 問43（複数選択）

VS Code の Copilot Chat でサブエージェントを呼び出す方法をすべて選んでください。

- A) Copilot が自動的にプロンプトの内容を分析してサブエージェントに委譲（自動委譲）
- B) プロンプト内でサブエージェントを直接指定して呼び出し（直接呼び出し）
- C) `#runSubagent` ツールを呼び出す
- D) `/delegate` コマンドを使用する
- E) `@subagent` チャット参加者を呼び出す

**正解: A, B, C**

> 解説: サブエージェントの呼び出し方法は 3 種類あります：自動委譲（A）、直接指定（B）、`#runSubagent` ツールの呼び出し（C）。`/delegate` は Copilot CLI から Cloud Agent に委譲する際のコマンドであり、`@subagent` というチャット参加者は存在しません。

---

## 問44（複数選択）

GitHub ドキュメントに記載されている Copilot Chat が利用可能な環境をすべて選んでください。

- A) GitHub ウェブサイト
- B) GitHub Mobile
- C) VS Code などの対応 IDE
- D) Windows Terminal
- E) GitHub Actions

**正解: A, B, C, D**

> 解説: Copilot Chat は GitHub ウェブサイト、GitHub Mobile、VS Code などの対応 IDE（Visual Studio Code, Visual Studio, JetBrains IDEs, Eclipse, Xcode）、Windows Terminal で利用可能です。GitHub Actions は Copilot Chat の利用環境ではありません。

---

## 問45（複数選択）

サブエージェントの活用に最適なユースケースをすべて選んでください。

- A) メインセッションを中断せずに複雑な調査・分析タスクを委譲したい場合
- B) メインのコンテキストウィンドウを汚さずに大量の情報や複数のドキュメントを処理したい場合
- C) コンテキストを混在させずに異なるアプローチを独立して探求したい場合
- D) GitHub でプルリクエストを直接作成したい場合
- E) CI/CD パイプラインを自動実行したい場合

**正解: A, B, C**

> 解説: サブエージェントは、調査・分析の委譲（A）、大量情報処理によるコンテキスト汚染防止（B）、独立したアプローチ探求（C）に適しています。GitHub PR 作成は Cloud Agent の機能（D は対象外）、CI/CD 自動実行は Agent Mode のターミナルコマンドで対応する機能です（E は対象外）。

---

## 問46（複数選択）

Copilot Chat に画像を添付する際にサポートされているファイル形式をすべて選んでください。

- A) JPEG (.jpg, .jpeg)
- B) PNG (.png)
- C) GIF (.gif)
- D) WEBP (.webp)
- E) SVG (.svg)

**正解: A, B, C, D**

> 解説: Copilot Chat に添付できる画像ファイル形式は JPEG、PNG、GIF、WEBP の 4 種類です。SVG 形式はサポートされていません。なお、Copilot Business/Enterprise プランでは組織・エンタープライズ管理者が「Editor preview features」設定を有効にする必要があります。

---

## 問47（複数選択）

Plan Mode のカスタマイズ・設定として可能なことをすべて選んでください。

- A) アーキテクチャガイドラインや計画成果物を定義するカスタム計画エージェントの作成
- B) 計画フェーズと実装フェーズに使用する AI モデルを個別に設定する
- C) 実験的機能として、計画エージェントに MCP サーバー経由で追加ツールを提供する
- D) 計画フェーズ中に自動的にコードをコミットする
- E) 計画エージェントの言語出力スタイルを変更する

**正解: A, B, C**

> 解説: Plan Mode では、カスタム計画エージェントの作成（A）、計画・実装用モデルの個別設定（`chat.planAgent.defaultModel` / `github.copilot.chat.implementAgent.model`）（B）、実験的な追加ツール提供（`github.copilot.chat.planAgent.additionalTools`）（C）が可能です。計画フェーズ中の自動コミット（D）や言語スタイル変更（E）は対象外です。

---

## 問48（複数選択）

VS Code でエージェントタイプ間のハンドオフに関して正しい説明をすべて選んでください。

- A) チャット入力ボックスのセッションタイプドロップダウンから別のエージェントタイプを選択する
- B) Copilot CLI セッションでは `/delegate` コマンドで Cloud Agent に委譲できる
- C) エージェントタイプを切り替えると、新しいセッションが作成されるが会話の履歴とコンテキストは引き継がれる
- D) ハンドオフ後も元のセッションを引き続き使用できる
- E) Plan Mode から「Start Implementation」で Agent Mode にハンドオフできる

**正解: A, B, C, E**

> 解説: ハンドオフはセッションタイプドロップダウン（A）または `/delegate` コマンド（B）で行われ、会話履歴・コンテキストは新しいセッションに引き継がれます（C）。元のセッションはハンドオフ後にアーカイブされます（D は誤り）。Plan Mode から「Start Implementation」でも Agent Mode へのハンドオフが可能です（E）。

---

## 問49（複数選択）

Copilot のインライン候補（コード補完）が対応しているが、Copilot Chat 対応 IDE（VS Code, Visual Studio, JetBrains, Eclipse, Xcode）に含まれない環境をすべて選んでください。

- A) Azure Data Studio
- B) Vim/Neovim
- C) Windows Terminal
- D) GitHub Mobile
- E) GitHub ウェブサイト

**正解: A, B**

> 解説: インライン候補は VS Code、Visual Studio、JetBrains IDEs に加えて、Azure Data Studio（A）と Vim/Neovim（B）でも利用可能です。これらは Copilot Chat のサポート対象 IDE（VS Code, Visual Studio, JetBrains IDEs, Eclipse, Xcode）には含まれていませんが、インライン補完はサポートされています。Windows Terminal や GitHub Mobile ではインライン候補は利用できません。

---

## 問50（複数選択）

Copilot Edits（Agent Mode と Edit Mode）に関する正しい説明をすべて選んでください。

- A) Agent Mode は VS Code、Visual Studio（17.14+ プレビュー）、JetBrains IDEs で利用可能
- B) Edit Mode は VS Code と JetBrains IDEs のみで利用可能
- C) Plan Mode は Copilot Edits のモードの一つ
- D) VS Code では Edit Mode は非推奨となり、マルチファイル編集には Agent Mode が推奨されている
- E) Agent Mode も Edit Mode も、ユーザーは最終的に変更を承認または却下できる

**正解: A, B, D, E**

> 解説: Agent Mode は VS Code・Visual Studio（プレビュー）・JetBrains IDEs で利用可能（A）。Edit Mode は VS Code と JetBrains のみ（B）。Plan Mode は Copilot Edits のモードではなく、Chat のエージェント機能（C は誤り）。VS Code では Edit Mode は非推奨（D）。両モードでユーザーは変更を承認・却下できます（E）。

---
