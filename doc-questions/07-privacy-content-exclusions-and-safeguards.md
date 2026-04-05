# GH-300 Section 7 クイズ: Configure Privacy, Content Exclusions, and Safeguards

対象ドキュメント:
- [GitHub Copilot のコンテンツ除外](https://docs.github.com/ja/copilot/concepts/context/content-exclusion)
- [GitHub Copilot からコンテンツを除外する](https://docs.github.com/ja/copilot/how-tos/configure-content-exclusion/exclude-content-from-copilot)
- [コンテンツ除外の構成と監査](https://docs.github.com/ja/copilot/how-tos/configure-content-exclusion)
- [Organization で GitHub Copilot のポリシーと機能を管理する](https://docs.github.com/ja/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies)
- [機能とモデルの可用性を制御する GitHub Copilot ポリシー](https://docs.github.com/ja/copilot/concepts/policies)
- [REST API: Copilot user management](https://docs.github.com/ja/rest/copilot/copilot-user-management)

## 単一選択

### 問1
GitHub Copilot の content exclusion の説明として最も適切でないものはどれですか。

- A) リポジトリのスター数を非表示にする
- B) 組織の所有者ロールを変更する
- C) Copilot が特定のコンテンツを対象外として扱えるようにする
- D) 監査ログを完全に削除する

**解答:** B

**解説:** content exclusion は、Copilot が扱う対象から特定の内容を外すための制御であり、組織の所有者ロールを変更する機能ではありません。

### 問2
GitHub Copilot のコンテンツ除外について、正しい説明はどれですか。

- A) すべてのユーザーに自動で無効化される
- B) Issue のラベル設定だけに影響する
- C) 2 要素認証を有効化すると自動で適用される
- D) 個人の設定だけでなく、組織や enterprise の管理と組み合わせて扱う

**解答:** D

**解説:** コンテンツ除外は、個人利用の話だけでなく、組織や enterprise の運用管理とも関係します。

### 問3
GitHub Copilot ポリシーで制御できる内容として最も適切なのはどれですか。

- A) GitHub のサポートへの問い合わせ方法
- B) Copilot の機能やモデルの利用可否
- C) リポジトリの Git 履歴の圧縮方式
- D) pull request のレビュー担当者の顔写真

**解答:** B

**解説:** ポリシーでは、Copilot の機能とモデルをどこまで利用できるかを制御できます。

### 問4
Content exclusion の監査で期待できることとして最も適切なのはどれですか。

- A) コードのコンパイルを高速化できる
- B) モデル推論そのものを実行できる
- C) 除外設定の状態を確認し、管理状況を追跡できる
- D) repository visibility を自動変更できる

**解答:** C

**解説:** 監査は、除外設定がどう構成され、どう管理されているかを追跡するために使います。

### 問5
REST API を使った Copilot user management の説明として最も適切なのはどれですか。

- A) Copilot の利用やサブスクリプション関連の管理を API で扱える
- B) Copilot のコード補完精度を直接変更できる
- C) すべての組織メンバーのパスワードを取得できる
- D) pull request のコメントを自動削除できる

**解答:** A

**解説:** REST API では、Copilot のユーザー管理やサブスクリプション管理に関する操作を扱えます。

## 複数選択

### 問6
GitHub Copilot の content exclusion に関して正しいものを 2 つ選んでください。

- A) 特定のコンテンツを Copilot の対象から除外できる
- B) すべてのプランで同じ既定値になる
- C) 除外の設定状態を確認・監査できる
- D) 除外設定は組織管理と関係しない

**解答:** AC

**解説:** content exclusion では対象外設定そのものと、その設定状態の確認・監査が重要です。

### 問7
GitHub Copilot ポリシーで管理対象になりうるものを 2 つ選んでください。

- A) GitHub Pages のテーマ色
- B) GitHub Mobile の通知音
- C) 利用可能な機能
- D) 利用可能なモデル

**解答:** CD

**解説:** ポリシーでは、どの機能やモデルを使えるかを管理できます。

### 問8
Content exclusion の管理について正しいものを 3 つ選んでください。

- A) pull request のマージ方法を決める機能である
- B) 個人単位だけでなく、組織管理の文脈でも扱う
- C) 除外設定の状態は監査で追跡できる
- D) REST API と連携した管理がある

**解答:** BCD

**解説:** content exclusion は、個人・組織の管理と、監査や API ベースの運用に関わります。

### 問9
GitHub Copilot の safeguards に含まれる考え方として正しいものを 2 つ選んでください。

- A) 出力には所有権や制約があると理解する
- B) ブランチ保護を常に無効にする
- C) 誤提案や除外設定の問題を切り分ける
- D) Issue のテンプレートを自動生成する

**解答:** AC

**解説:** safeguards では、出力の扱い方の理解と、提案や除外設定の問題切り分けが重要です。

### 問10
REST API による Copilot user management について正しいものを 2 つ選んでください。

- A) サブスクリプション管理に関連する操作を扱える
- B) 管理は UI からしか行えない
- C) Copilot のモデル推論そのものを API で実行する機能である
- D) 管理用途の自動化に役立つ

**解答:** AD

**解説:** REST API は、Copilot の管理業務を自動化しやすくするために使えます。
