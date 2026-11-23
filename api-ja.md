---
layout: default
title: AI設定
description: iScriptのAIはApple Intelligenceで動作します。対応するiPhoneでは設定は不要で、そのほかのデバイスではGeminiキーで文の解説を利用できます。
permalink: /api-ja/
locale: ja_JP
page_id: api
---

> Apple Intelligenceに対応したiPhoneでは、設定するものはありません。キーも不要です。

## Apple Intelligenceでできること

Apple Intelligenceに対応したiPhoneで、iOS 27以降を使い、iPhoneの「設定」でApple Intelligenceをオンにしていれば、以下のすべてを利用できます。

- 文の解説（単語、文法、使われる場面）
- 似た例文の作成、丁寧な言い方・くだけた言い方への言い換え
- 文についての質問
- スクリプトの場面でのAIとの会話と、会話のあとの添削
- 読み込むスクリプトの訳を補う

1日に使える量はAppleが定めています。上限に達すると、また使えるようになる時刻をアプリがお知らせします。

## Apple Intelligenceを利用できないデバイスでは

聞く、練習、復習、単語帳は、そのまま利用できます。内蔵スクリプトには解説があらかじめ入っているものがあり、AIなしで読めます。

自分で読み込んだスクリプトの文の解説を見たい場合は、Geminiキーを接続できます。これは任意です。

| | Apple Intelligence | Geminiキー |
| :-- | :-- | :-- |
| 文の解説 | ○ | ○ |
| Geminiの音声で聞く | - | ○ |
| 例文、丁寧な言い方・くだけた言い方、質問 | ○ | × |
| AIと会話 | ○ | × |

## Geminiキーを取得する（任意）

1. [Google AI Studio](https://aistudio.google.com/app/apikey)を開き、Googleアカウントでログインします。
2. **Create API key**をタップしてキーを作成します。
3. 作成されたキーをコピーします。
4. iScriptの**設定** → **Geminiキー**にペーストして保存します。

キーは、このiPhoneのキーチェーンにのみ保管されます。バックアップファイルやお問い合わせのメールには含まれず、開発者に届くこともありません。キーを削除すると、Googleへの送信も止まります。

## よくある質問

### Geminiキーは無料ですか？

Google AI Studioには無料で使える枠があります。上限と料金はGoogleが定めているため、キーを作成するときにGoogleの案内をご確認ください。

### キーを入力したのに解説が表示されません。

コピーしたときにキーの前後に空白が入っていないか確認してください。それでも解決しない場合は、キーを新しく作成して入力してみてください。設定のGeminiキーに「接続済み」と表示されていれば正常です。

### 文はどこに送信されますか？

Apple Intelligenceを使う場合はAppleのサーバーモデルに、Geminiキーを使う場合はGoogleに送信されます。詳しくは[プライバシーポリシー](/privacy-ja/)をご覧ください。
