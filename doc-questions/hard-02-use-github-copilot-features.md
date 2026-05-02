# GH-300 難問クイズ Section 2: Use GitHub Copilot Features

> IDE 利用・Copilot CLI・組織ポリシー管理を中心に構成した難問クイズです。
> 単一選択では「2択まで絞れるが最後の1択に悩む」問題を中心に構成しています。
> 出典: [GH-300 Study Guide (Microsoft Learn)](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300)

---

## 単一選択

### 問1
GitHub Copilot Free プランで **IDE 内チャット（chat messages）** を利用できる月間制限と、**コード補完（code completions）** の月間制限の正しい組み合わせはどれですか。

- A) チャット 200 回 / コード補完 2,000 回
- B) チャット 50 回 / コード補完 無制限
- C) チャット 無制限 / コード補完 2,000 回
- D) チャット 50 回 / コード補完 2,000 回


### 問2
**IDE 上の Copilot** において、Agent Mode **のみ** が持つ特徴はどれですか。

- A) 特定のファイルへのコード変更を実行できる
- B) 自然言語の指示に基づいてコードを生成する
- C) 変更対象のファイルを Copilot が自律的に判断し、ユーザーの承認のもとでターミナルコマンドを実行できる
- D) 過去のチャット履歴を参照して回答する


### 問3
**IDE 上の Plan Mode（VS Code）** において、計画フェーズ（planning phase）中の Copilot の動作として最も正確なのはどれですか。

- A) 読み取り専用ツールとコードベース分析のみを使用し、コード変更は行わない
- B) コード変更の下書きを自動保存しながら、並行して計画を作成する
- C) 変更内容を提案ファイルとして `.github/copilot-plan.md` に書き出す
- D) ターミナルコマンドを実行して環境情報を収集しながら計画を立てる


### 問4
**Copilot CLI** の `gh copilot suggest` と `gh copilot explain` コマンドの説明として最も正確なのはどれですか。

- A) `suggest` はコードのリファクタリング案を生成し、`explain` はコードの動作を説明する
- B) `suggest` と `explain` は機能が重複しており、どちらも自然言語でシェルコマンドを提案する
- C) `suggest` はプロンプトファイルを生成し、`explain` はシェルの履歴を解析して最適化案を提示する
- D) `suggest` は自然言語の説明から実行可能なシェルコマンドを提案し、`explain` はコマンドや概念を自然言語で説明する


### 問5
**GitHub.com の組織（Organization）** で Copilot Code Review ポリシーを管理できるのは誰ですか。

- A) Copilot を利用している全メンバーが個人設定から変更できる
- B) Organization オーナーがポリシーを構成し、組織内リポジトリでの Copilot code review の有効・無効を管理できる
- C) リポジトリの maintainer ロール以上であれば、自リポジトリの Copilot code review 設定を Organization のポリシーに関わらず上書きできる
- D) Enterprise 管理者が Organization レベルポリシーを有効にした上で、Organization オーナーが詳細設定を行う二段階構成になっている

---

## 複数選択

### 問6（2つ選択）
**Copilot CLI** で実行できることとして正しいものを **2 つ**選んでください。

- A) `gh copilot suggest` で自然言語からシェルコマンドを生成する
- B) `gh copilot suggest` と `gh copilot explain` は同一コマンドの別名であり、どちらも同じ動作をする
- C) `gh copilot explain` でコマンドや概念を自然言語で説明させる
- D) `gh copilot explain` はシェルスクリプトを別のプログラミング言語に変換する機能を持つ


### 問7（3つ選択）
**IDE 上の Agent Mode** の特徴として正しいものを **3 つ**選んでください。

- A) Copilot が変更対象のファイルを自律的に判断する
- B) ユーザーの承認のもとでターミナルコマンドを実行できる
- C) 作業は常に単一ファイルのみを対象とする
- D) MCP ツールと統合して外部サービスとの連携が可能


### 問8（2つ選択）
**GitHub Copilot Spaces** に格納できるコンテンツとして正しいものを **2 つ**選んでください。

- A) GitHub Actions のシークレット
- B) リポジトリ
- C) Copilot のモデル設定
- D) Issue


### 問9（3つ選択）
**GitHub.com の Organization 全体の Copilot 管理**において、監査ログ（audit log）で追跡できるものとして正しいものを **3 つ**選んでください。

- A) Copilot の機能に関するポリシー設定の変更
- B) Copilot へのシートの割り当て・解除
- C) Copilot が個々のユーザーに対して生成した補完内容の全文
- D) Copilot 関連のリポジトリアクセス設定の変更


### 問10（2つ選択）
**REST API** を使った Copilot の組織管理でできることとして正しいものを **2 つ**選んでください。

- A) 組織内メンバーへの Copilot サブスクリプション（シート）の割り当てと解除
- B) Copilot が生成したコードの品質を直接改善する
- C) Copilot にアクセスできるユーザーの一覧を取得する
- D) Copilot が参照するモデルを API から直接切り替える
