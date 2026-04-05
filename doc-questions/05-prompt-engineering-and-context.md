# GH-300 Section 5: Apply Prompt Engineering and Context Crafting

## 単一選択

### 問1
Copilot 向けのプロンプト設計で、まず意識すべき組み立て方として最も適切なのはどれですか。

- A) まず大まかな目的を示し、その後で具体的な条件や制約を追加する
- B) 最初から細部だけを書き、全体の目的は省略する
- C) できるだけ曖昧に書いて、Copilot に解釈を任せる
- D) 何も条件を書かず、回答の質は後で調整する

### 問2
Copilot が応答を作るときに参照しうる追加コンテキストとして適切なのはどれですか。

- A) 自分の GitHub バッジ一覧
- B) 端末の全ファイルシステム
- C) 現在のファイルのコードとチャット履歴
- D) 他人の非公開リポジトリの内容

### 問3
毎回同じ背景説明を書かずに済ませたいとき、最も適切な方法はどれですか。

- A) いつも空のプロンプトだけ送る
- B) リポジトリにカスタム命令を用意する
- C) 絶対に例を示さない
- D) 返信のたびに別のアカウントを使う

### 問4
GitHub 上のカスタム命令の優先順位として正しいものはどれですか。

- A) Organization > Repository > Personal
- B) Repository > Personal > Organization
- C) Organization > Personal > Repository
- D) Personal > Repository > Organization

### 問5
Spaces の主な役割として最も適切なのはどれですか。

- A) Copilot 向けのコンテキストを整理し、共有して応答を改善する
- B) Git のコミット履歴を自動で圧縮する
- C) リポジトリの権限を一括で変更する
- D) プルリクエストを自動マージする

## 複数選択

### 問6
GitHub 上の custom instructions の種類として正しいものを 3 つ選んでください。

- A) Personal instructions
- B) Repository custom instructions
- C) Organization custom instructions
- D) Issue template instructions

### 問7
Repository custom instructions として文書中で扱われている場所を 3 つ選んでください。

- A) `.github/instructions/**/*.instructions.md`
- B) `.github/copilot-instructions.md`
- C) `AGENTS.md`
- D) `README.md`

### 問8
プロンプト エンジニアリングのベストプラクティスとして正しいものを 3 つ選んでください。

- A) 関連するコードや例を示す
- B) 複雑なタスクを単純なタスクに分割する
- C) あいまいさを意図的に増やす
- D) 重要な前提はできるだけ明示する

### 問9
Spaces について正しいものを 3 つ選んでください。

- A) Copilot が使うコンテキストを整理して共有できる
- B) リポジトリ、PR、Issue、メモ、画像、ファイルを格納できる
- C) 所有形態に応じて、チーム共有や公開共有ができる
- D) 管理者だけが作成できる

### 問10
カスタム命令の優先順位や扱いについて正しいものを 3 つ選んでください。

- A) Organization instructions が最優先である
- B) Personal instructions が最優先である
- C) Repository instructions は personal の次に優先される
- D) 品質が気になるときは repository instructions を一時的に無効化できる
