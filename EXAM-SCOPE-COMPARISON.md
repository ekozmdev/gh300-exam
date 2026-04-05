# GH-300 試験範囲 改訂前後 比較レポート

> 公式一次ソース: [試験 GH-300 の学習ガイド（Microsoft Learn）](https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/gh-300)
> 旧試験範囲は Wayback Machine で取得した 2025 年 12 月時点のアーカイブ、および複数の試験対策サイトをもとに整理しています。

---

## 概要

| 項目 | 旧（〜2025年末） | 新（2026年1月〜） |
|------|-----------------|-----------------|
| 更新時期 | 2024年リリース時 | 2026年1月に大規模改訂 |
| スキルグループ数 | 7 ドメイン（固定比率） | 7 スキルグループ（範囲幅あり） |
| 対象者プロフィール | ソフトウェア開発者・管理者・PM | GitHub の基礎と1つ以上の言語経験を持つ開発者 |

---

## 1. スキルグループと配点の変化

| スキルグループ | 旧（固定比率） | 新（範囲比率） | 変化の方向 |
|--------------|:------------:|:------------:|:--------:|
| 責任ある AI の利用 | **7%** | **15〜20%** | 大幅増加 ↑↑ |
| Copilot の機能・プラン | 31% | 25〜30% | 減少・再編 ↓ |
| GitHub Copilot の機能 | —（旧は上に統合） | 25〜30%（新設・重複表記） | 新設 |
| データとアーキテクチャ | 15% | 10〜15% | 若干減少 ↓ |
| プロンプトエンジニアリング | 9% | 10〜15% | 増加 ↑ |
| 開発者生産性（テスト含む） | 14%（生産性）＋ 9%（テスト） | 10〜15% | テストが統合 → 合計は縮小 ↓ |
| プライバシー・除外設定 | 15% | 10〜15% | 若干減少 ↓ |

> **注:** 新試験では「Use GitHub Copilot features（25〜30%）」と「GitHub Copilot features（25〜30%）」の 2 行が学習ガイドの _Skills at a glance_ に並んでいます。これは表記ゆれであり、本文では実質 1 つのスキルグループとして展開されています。詳細は README.md を参照。

---

## 2. ドメイン別の変化詳細

### 2.1 責任ある AI（旧 Domain 1 / 新 Use GitHub Copilot Responsibly）

| 旧スキル（7%） | 新スキル（15〜20%） |
|--------------|-------------------|
| AI を使用するリスクの説明 | 生成 AI ツールのリスクと限界の説明 |
| 生成 AI の限界の説明（データの偏りなど） | 倫理的・責任ある AI 利用の説明 |
| AI 出力を検証する必要性の説明 | AI 利用の潜在的な害と緩和策の識別 |
| 責任ある AI の運用方法の識別 | AI 出力を検証する必要性の説明 |
| 潜在的な害の識別（偏り・セキュリティ・公平性・プライバシー・透明性） | GitHub Copilot を責任を持って運用する方法の識別 |
| 害の緩和方法の説明 | — |
| 倫理的 AI の説明 | — |

**変化のポイント:**
- 配点が 7% → 15〜20% と **2〜3 倍に増加**
- 旧試験では「倫理的 AI を説明できる」という概念理解が中心だったのに対し、新試験では「実際に責任ある運用ができるか」という実務判断に重心が移動
- 旧試験の細かい説明項目（潜在的な害の類型列挙など）は統合・簡略化されている

---

### 2.2 Copilot のプランと機能（旧 Domain 2 / 新 Use GitHub Copilot Features）

#### 旧 Domain 2 の構成（31%）

| サブトピック | 内容 |
|------------|------|
| プランの違い | Individual / Business / Enterprise / non-GHE 向け Business の比較 |
| Individual の機能 | IDE での利用可能機能、Business との違い |
| Business の機能 | ファイル除外、組織ポリシー管理、監査ログ、REST API によるサブスクリプション管理 |
| Copilot Chat の機能 | ユースケース、スラッシュコマンド、フィードバック、ベストプラクティス |
| **Enterprise の機能** | **Knowledge Bases の設定・利用、PR サマリー、github.com 上の Chat、カスタムモデル** |
| CLI での利用 | インストール手順、コマンド、設定 |

#### 新 Use GitHub Copilot Features の構成（25〜30%）

| サブトピック | 内容 |
|------------|------|
| IDE での利用 | Copilot の有効化、インライン提案・Chat・CLI・Plan Mode、ファイル除外 |
| **Copilot CLI（新設）** | **CLI のインストール手順、主要コマンド、対話的利用、セッション管理、スクリプト生成・ファイル操作** |
| **機能と機能（新設）** | **Agent Mode・Edit Mode・MCP、Agent Sessions・Sub-Agents、Spaces・Spark・PR サマリー・instructions files** |
| 組織設定とポリシー | 組織全体のポリシー管理、Code Review ポリシー、監査ログ、REST API |

**変化のポイント:**
- 旧試験では **Individual / Business / Enterprise のプラン比較**が中心的なテーマだったが、新試験では**プランの違いは後退**し、機能の使い方にフォーカスが移動
- 旧試験で重視されていた **Knowledge Bases** は新試験では言及がなくなった
- **Agent Mode・Edit Mode・MCP・Sub-Agents・Agent Sessions** が新規追加（旧試験には存在しない）
- **Copilot CLI** の比重が増加（旧は CLI を 1 項目として扱っていたが、新では独立したサブトピックに昇格）
- **Plan Mode・Spaces・Spark・instructions files** が新規追加

---

### 2.3 データとアーキテクチャ（旧 Domain 3 / 新 Understand GitHub Copilot Data and Architecture）

| 旧スキル（15%） | 新スキル（10〜15%） |
|--------------|-------------------|
| コード提案のライフサイクルの可視化 | コード提案のライフサイクルの可視化 |
| コンテキストの収集方法の説明 | データの利用・フロー・共有の説明 |
| プロンプトの構築方法の説明 | 入力処理とプロンプト構築の説明 |
| プロキシサービスとフィルターの説明 | プロキシフィルタリングと後処理の説明 |
| LLM のレスポンス生成の説明 | LLM と Copilot の限界の説明 |
| プロキシサーバーによる後処理の説明 | — |
| マッチングコードの識別方法 | — |
| データの利用と共有（Individual） | — |
| コード補完のデータフロー | — |
| Chat のデータフロー | — |
| Chat の入力処理タイプ | — |
| LLM の一般的な限界（データの偏り、コードの鮮度、コンテキストウィンドウ） | — |

**変化のポイント:**
- 旧試験は Individual/Chat/Code 補完ごとのデータフローを個別に把握する必要があり詳細だったが、新試験では **統合的・要約的な理解**が求められる構成に変化
- LLM の限界に関する項目（データの偏り・鮮度・コンテキストウィンドウ制限）は統合されて簡略化

---

### 2.4 プロンプトエンジニアリング（旧 Domain 4 / 新 Apply Prompt Engineering and Context Crafting）

| 旧スキル（9%） | 新スキル（10〜15%） |
|--------------|-------------------|
| コンテキストの決定方法の説明 | プロンプト構造とコンテキストの説明 |
| プロンプトの言語オプションの説明 | コンテキストの決定方法の理解 |
| プロンプトの各部分の説明 | Zero-shot / Few-shot prompting の使い分け |
| ロールプロンプティングの説明 | プロンプト作成のベストプラクティスの適用 |
| Zero-shot と Few-shot の違いの説明 | プロンプトエンジニアリングの原則の説明 |
| チャット履歴の使われ方の説明 | プロンプト処理フローとチャット履歴の扱いの説明 |
| プロンプト作成のベストプラクティスの識別 | — |
| プロンプトエンジニアリングの原則・訓練方法・ベストプラクティスの説明 | — |
| プロンプト処理フローの説明 | — |

**変化のポイント:**
- 内容はほぼ同様だが、旧試験では「ロールプロンプティング」「言語オプション」などの細かい分類が含まれていた
- 配点は 9% → 10〜15% へ増加（プロンプト設計の重要度が上がっている）

---

### 2.5 開発者生産性（旧 Domain 5 / 新 Improve Developer Productivity）

| 旧スキル Domain 5（14%） | 新スキル（10〜15%） |
|----------------------|-------------------|
| 一般的なユースケースでの生産性向上の説明 | コード生成・リファクタリング・ドキュメント生成への利用 |
| 新言語・フレームワークの学習 | 学習の加速とコンテキストスイッチの削減 |
| 言語翻訳 | サンプルデータ生成とレガシーコードのモダナイズ |
| コンテキストスイッチ | ユニットテスト・統合テストの生成（旧 Domain 6 より移動） |
| ドキュメント生成 | エッジケースの識別とアサーションの作成（旧 Domain 6 より移動） |
| パーソナライズされたコンテキスト応答 | セキュリティ改善とパフォーマンス最適化の提案（旧 Domain 7 より移動） |
| サンプルデータ生成 | — |
| レガシーアプリのモダナイズ | — |
| デバッグ | — |
| データサイエンス | — |
| コードリファクタリング | — |
| SDLC 管理への利用 | — |
| Copilot の限界の説明 | — |
| 生産性 API の利用 | — |

**変化のポイント:**
- 旧試験では「データサイエンス」「デバッグ」「言語翻訳」「SDLC 管理」「生産性 API」など多岐にわたる項目があったが、新試験では **シンプルに統合**
- 旧 Domain 6（テスト）と旧 Domain 7 のセキュリティ部分が**このドメインに統合**

---

### 2.6 テスト（旧 Domain 6 → 新 Improve Developer Productivity に統合）

旧試験では **独立した 9% のドメイン**として存在していたが、新試験では独立したドメインとしては廃止され、「Improve Developer Productivity」の「Support testing and security」サブトピックに統合された。

| 旧 Domain 6 スキル（9%） | 新（統合先 Improve Developer Productivity） |
|----------------------|------------------------------------------|
| ユニットテスト・統合テストへの Copilot の利用 | ユニットテストと統合テストの生成 |
| エッジケースの識別・テスト提案支援 | エッジケースの識別とアサーションの作成 |
| — | セキュリティ改善とパフォーマンス最適化の提案 |

> **注:** 旧 Domain 6 には「SKU の違いとプライバシー」「組織レベルのコード提案設定」「Editor config ファイル」などのサブトピックも含まれていた。これらは旧試験でのドメイン名（テスト）とは合致しにくいが公式ガイドに記載されていた。新試験ではこれらは他のドメインに分散・整理された。

---

### 2.7 プライバシーと除外設定（旧 Domain 7 / 新 Configure Privacy, Content Exclusions, and Safeguards）

| 旧 Domain 7 スキル（15%） | 新スキル（10〜15%） |
|------------------------|-------------------|
| リポジトリ・組織でのコンテンツ除外の設定方法 | コンテンツ除外とエディタ設定の構成 |
| コンテンツ除外の効果の説明 | 出力の所有権と制約の説明 |
| コンテンツ除外の制限の説明 | 重複検知とセキュリティ警告の有効化 |
| GitHub Copilot 出力の所有権の説明 | 提案や除外設定の問題の切り分け |
| 重複検知フィルターの説明 | — |
| 契約上の保護の説明 | — |
| GitHub.com での Copilot 設定（重複検知の有効化/無効化、プロンプト・提案収集の有効化/無効化） | — |
| セキュリティチェックと警告の説明 | — |
| トラブルシューティング（提案が表示されない、除外設定が適用されない等） | — |
| **テストの効果改善**（既存テストへの活用） ※Domain 7 に混在していた | 削除（Improve Developer Productivity に移動） |
| **セキュリティ・パフォーマンス改善**（コードレビューへの活用） | 削除（Improve Developer Productivity に移動） |

**変化のポイント:**
- 旧試験では Domain 7 に「テスト改善」「セキュリティ・パフォーマンス活用」が混在していたが、新試験では整理されてこれらは Domain 6 相当に移動
- 「契約上の保護」は削除または他のドメインへ吸収
- 配点は 15% → 10〜15% と若干減少

---

## 3. 新試験で追加された主要トピック

新試験（2026 年 1 月〜）で**初めて登場**したか、大幅に強調されたトピックは以下の通り。

| トピック | スキルグループ |
|--------|-------------|
| Agent Mode | Use GitHub Copilot Features |
| Edit Mode | Use GitHub Copilot Features |
| MCP（Model Context Protocol） | Use GitHub Copilot Features |
| Sub-Agents | Use GitHub Copilot Features |
| Agent Sessions | Use GitHub Copilot Features |
| Plan Mode | Use GitHub Copilot Features |
| Copilot Spaces | Use GitHub Copilot Features |
| GitHub Spark | Use GitHub Copilot Features |
| instructions files（カスタムレビュー基準） | Use GitHub Copilot Features |
| prompt file の再利用 | Use GitHub Copilot Features |
| Copilot Code Review ポリシー | Use GitHub Copilot Features |

---

## 4. 旧試験から削除・縮小された主要トピック

| トピック | 旧スキルグループ | 備考 |
|--------|---------------|------|
| GitHub Copilot Individual の独立した機能比較 | Domain 2 | 新試験ではプラン比較の詳細が後退 |
| **Knowledge Bases**（Enterprise） | Domain 2 | 新試験では言及なし |
| カスタムモデルの利用 | Domain 2 | 新試験では言及なし |
| non-GHE 向け Copilot Business | Domain 2 | 新試験では言及なし |
| 生産性 API | Domain 5 | 削除 |
| データサイエンスへの活用 | Domain 5 | 削除 |
| SDLC 管理 | Domain 5 | 削除 |
| 契約上の保護 | Domain 7 | 削除 |
| テスト（独立ドメイン） | Domain 6 | 「開発者生産性」に統合 |
| Editor config ファイル | Domain 6 | 削除または統合 |

---

## 5. 受験準備への影響まとめ

### 旧教材・問題集を使う際の注意点

公式ガイドの Change log にも明記されているとおり、**2026 年 1 月の改訂は大規模なもの**です。2025 年以前の Udemy コース・問題集・ブログ記事には以下のズレが生じている可能性があります。

1. **「責任ある AI」が 7% のつもりで準備していると、実際の配点（15〜20%）と大きくズレる**
2. **Knowledge Bases は出題されない可能性が高い**（新ガイドに記載なし）
3. **Individual / Business / Enterprise の詳細な比較問題が減り、機能の使い方を問う問題が増えている**
4. **テストのドメインが独立して 9% あったが、現在は統合されている**
5. **Agent Mode・MCP・Sub-Agents・Spaces・Spark など新機能のトピックは旧教材に存在しない**

### 新試験の学習優先度

| 優先度 | スキルグループ | 理由 |
|:-----:|-------------|------|
| ★★★ | 責任ある AI の利用（15〜20%） | 配点が 2〜3 倍に増加 |
| ★★★ | Copilot の機能を使う（25〜30%） | 最大配点、新機能が多数追加 |
| ★★ | プロンプトエンジニアリング（10〜15%） | 配点増加 |
| ★★ | 開発者生産性（10〜15%） | テスト・セキュリティも統合 |
| ★★ | プライバシー・除外設定（10〜15%） | トラブルシューティングが重要 |
| ★ | データとアーキテクチャ（10〜15%） | 内容は旧試験から大きく変わらない |

---

## 6. 旧試験学習済みの人向け 差分学習プラン

旧試験範囲（〜2025年末）をすでに学習・習得済みの前提で、**新試験に合格するために追加で何をどう学ぶか**を整理します。

### 6.1 スキップできる領域（旧知識が有効）

以下は内容がほぼ変わっていないため、旧試験で習得済みであれば再学習は不要（または軽い確認で十分）。

| 領域 | 理由 |
|------|------|
| データとアーキテクチャの基礎（プロキシ・LLM の限界・コンテキスト収集） | 概念は同一。新試験は整理・簡略化されただけ |
| プロンプトエンジニアリングの基礎（Zero-shot/Few-shot・ベストプラクティス） | 旧 Domain 4 とほぼ同内容 |
| コンテンツ除外の設定と効果 | 旧 Domain 7 の核心部分がそのまま継続 |
| 重複検知・セキュリティ警告の有効化 | 旧 Domain 7 から継続 |
| トラブルシューティング（提案が出ない・除外設定が適用されない） | 旧 Domain 7 から継続 |
| コード生成・リファクタリング・ドキュメント生成 | 旧 Domain 5 から継続 |
| ユニット/統合テスト生成・エッジケース対応 | 旧 Domain 6 から継続（スキルグループは変わったが内容は同じ） |

### 6.2 追加学習が必要な領域

#### A. 責任ある AI の深掘り（優先度: 最高）

**なぜ必要か:** 旧試験は 7% だったが新試験は 15〜20%。旧試験で「概念として知っている」レベルでは配点に対応できない。

**学習すべき内容:**
- 「責任ある AI の原則」を暗記するだけでなく、**具体的なシナリオでどう判断するか**を練習する
  - 例: AI が出力したコードに潜在的な脆弱性がある場合、何をすべきか
  - 例: 生成 AI ツールの導入可否をチームに説明するとき、どのリスクを挙げるか
- 旧試験で出ていた項目（偏り・公平性・透明性・プライバシー）に加え、**「緩和策」の実践的な選択肢**を具体的に押さえる
- Microsoft の Responsible AI の 6 原則（公平性・信頼性・プライバシー・包括性・透明性・説明責任）との対応関係

**推奨リソース:**
- [Responsible use of GitHub Copilot（Microsoft Learn モジュール）](https://learn.microsoft.com/en-us/training/modules/responsible-ai-with-github-copilot/)
- [Responsible use of GitHub Copilot text completion（GitHub Docs）](https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-text-completion)

**学習方法:** シナリオ問題形式で自問自答する。「この状況で Copilot をそのまま使うべきか、人間がレビューすべきか、使用を避けるべきか」という3択思考を繰り返す。

---

#### B. 新機能群（優先度: 最高）

旧試験には存在しなかった機能で、新試験の「Use GitHub Copilot Features（25〜30%）」に含まれる。**ここが最大の差分**。

##### B-1. Agent Mode / Edit Mode / Plan Mode

| 機能 | 概要 | 確認すべき点 |
|------|------|------------|
| **Agent Mode** | Copilot が複数ファイルにまたがる変更を自律的に提案・実行するモード | 通常の Chat との違い、使用条件、ターミナルコマンドの実行可否 |
| **Edit Mode** | 複数ファイルを明示的に選択し、一括編集を依頼するモード | Agent Mode との違い、対象ファイルの指定方法 |
| **Plan Mode** | 変更を実行する前に計画だけを表示し確認できるモード | Agent Mode と組み合わせた使い方、なぜ Plan Mode を使うのか |

**推奨リソース:**
- [Use GitHub Copilot agents（GitHub Docs）](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents)
- [Copilot Edits について（GitHub Docs）](https://docs.github.com/ja/copilot/how-tos/use-copilot-agents)

**学習方法:** 実際に VS Code で Agent Mode と Edit Mode を起動し、同じタスクを両方で試す。違いを言語化できるようにする。

---

##### B-2. Sub-Agents / Agent Sessions / MCP

| 機能 | 概要 | 確認すべき点 |
|------|------|------------|
| **Sub-Agents** | Agent が別の Agent にタスクを委譲する仕組み | なぜ使うのか（コンテキスト最適化）、どう設定するか |
| **Agent Sessions** | Agent の実行セッションを管理・追跡する機能 | セッションの開始・終了・参照方法 |
| **MCP（Model Context Protocol）** | 外部ツールや API を Copilot に接続するプロトコル | 設定方法、できることとできないこと |

**推奨リソース:**
- [Model Context Protocol and GitHub Copilot coding agent（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/agents/coding-agent/mcp-and-coding-agent)
- [About agent skills（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/agents/about-agent-skills)

**学習方法:** MCP の概念は実装より「何のためにあるか・どう設定するか」を押さえる。試験では概念理解問題が中心と想定される。

---

##### B-3. Copilot Spaces / GitHub Spark

| 機能 | 概要 | 確認すべき点 |
|------|------|------------|
| **Copilot Spaces** | プロジェクト・ドキュメント・コードなどをまとめてコンテキストとして保存・共有する機能 | Knowledge Bases（旧機能）との違い、作成・共有方法 |
| **GitHub Spark** | 自然言語で Web アプリ（マイクロアプリ）を作成・デプロイできる機能 | 用途、対象ユーザー、制約 |

**推奨リソース:**
- [GitHub Copilot Spaces について（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/context/spaces)
- [About GitHub Spark（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/spark)

**補足:** Spaces は旧試験の Knowledge Bases と役割が近い（コンテキストの蓄積・共有）が、個人でも使える点や UI が異なる。「Knowledge Bases を学んでいたが Spaces に置き換わった」と理解するのが最短。

---

##### B-4. instructions files / prompt files

| 機能 | 概要 | 確認すべき点 |
|------|------|------------|
| **instructions files** | リポジトリにコードレビューの基準や回答スタイルを記述する設定ファイル | 配置場所（`.github/copilot-instructions.md`）、スコープ（リポジトリ/組織） |
| **prompt files** | よく使うプロンプトを再利用可能なファイルとして保存する機能 | 保存場所、呼び出し方 |

**推奨リソース:**
- [GitHub Copilot のリポジトリ カスタム命令を追加する（GitHub Docs）](https://docs.github.com/ja/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- [GitHub Copilot の応答のカスタマイズについて（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/prompting/response-customization)

**学習方法:** 実際に `.github/copilot-instructions.md` を作成してみる。どのようなコンテキストがどのような応答変化を生むかを体験する。

---

#### C. Copilot CLI の強化（優先度: 中）

旧試験では CLI は Domain 2 の 1 項目（インストール・コマンド確認程度）だったが、新試験では**独立したサブトピック**に昇格し、セッション管理・スクリプト生成まで要求される。

**追加で学習すべき内容:**
- `gh copilot` コマンド体系（`suggest`・`explain`・`alias` など）
- **対話的セッションの開始と終了**
- スクリプト生成のユースケース（例: 「このコマンドを実行するシェルスクリプトを生成して」）
- ファイル操作との組み合わせ

**推奨リソース:**
- [GitHub Copilot CLI について（GitHub Docs）](https://docs.github.com/ja/copilot/concepts/agents/copilot-cli/about-copilot-cli)
- [GitHub Copilot CLI を使う（GitHub Docs）](https://docs.github.com/ja/copilot/how-tos/copilot-cli/use-copilot-cli-agents/overview)

**学習方法:** `gh copilot suggest` と `gh copilot explain` を実際に使い、セッションとして続けて会話できることを確認する。

---

#### D. Copilot Code Review ポリシー（優先度: 中）

旧試験でも組織ポリシー・監査ログは Domain 2 に含まれていたが、新試験では **Code Review ポリシー**が明示的に追加された。

**追加で学習すべき内容:**
- Code Review ポリシーの有効化手順（組織設定から）
- IDE と github.com で機能の可用性を制御する方法
- 旧試験の「組織ポリシー管理・監査ログ・REST API」はそのまま継続なのでこれに上乗せする形

**推奨リソース:**
- [Organization で GitHub Copilot のポリシーと機能を管理する（GitHub Docs）](https://docs.github.com/ja/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)

---

### 6.3 差分学習のロードマップ

```
Week 1: 責任ある AI の深掘り
  └─ Microsoft Learn の Responsible AI モジュールを再受講（シナリオ問題に集中）
  └─ 旧知識を「概念理解」から「判断・操作できる」レベルに引き上げる

Week 2: 新機能 - Agent Mode / Edit Mode / Plan Mode
  └─ VS Code で実際に Agent Mode / Edit Mode を操作
  └─ Plan Mode で変更前の確認フローを体験
  └─ GitHub Docs の該当ページを読んで用語と動作を整理

Week 3: 新機能 - Sub-Agents / MCP / Spaces / Spark
  └─ GitHub Docs で MCP の概念を押さえる（実装より概要理解）
  └─ Copilot Spaces を使ってみる（旧 Knowledge Bases との差を確認）
  └─ Spark を触ってみる（何が作れて何ができないかを把握）

Week 4: instructions files / prompt files / Copilot CLI 強化
  └─ .github/copilot-instructions.md を作成して動作確認
  └─ gh copilot suggest / explain を対話的に使う
  └─ Code Review ポリシーの設定手順を確認

Week 5: 統合復習 + 模擬問題
  └─ 現行の公式学習ガイドのスキル一覧を再読し、漏れを確認
  └─ 「旧試験ベースの問題集」をやる際は、新機能問題が出ないことを差し引いて活用
  └─ 責任ある AI・新機能の章はシナリオ形式で自作問題を解く
```

### 6.4 旧知識を「足を引っ張る知識」にしないための注意

| 旧知識 | 新試験での扱い | 注意点 |
|--------|--------------|--------|
| Knowledge Bases の詳細設定 | **削除** | 出てきても現在は廃止相当。Spaces に置き換えて考える |
| Individual / Business / Enterprise の細かい機能差 | 後退 | 旧試験レベルの詳細比較は出題頻度が下がっている。ざっくり理解で十分 |
| 生産性 API（Copilot の影響測定） | **削除** | 問題集に出てきても現行範囲外 |
| テストが独立した 9% のドメイン | **統合** | 「生産性向上」の一部として出題される。比重は下がっている |
| Domain 7 にあった「テスト改善」「コラボレーティブコードレビュー」 | 整理・移動 | 現在は「Improve Developer Productivity」に統合 |

---

## 参考資料

- [試験 GH-300 の学習ガイド（Microsoft Learn、現行）](https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/gh-300)
- [旧試験ガイド（Wayback Machine 2025年12月アーカイブ）](https://web.archive.org/web/20251201000000/https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)
- [GH-300 公式ドキュメント URL 集](./OFFICIAL-DOC-LINKS.md)
- [試験調査メモ](./README.md)
