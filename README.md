# SRS 2027 Online Proceedings

Student Research Symposium 2027（2027年12月10日、カオタン技術短期大学）のオンライン・プロシーディング用サイトです。GitHub Pagesでそのまま公開できます。

## フォルダ構成

```
index.html          トップページ（概要・プログラム・論文集・発表要領・シティツアー・表彰）
paper.html          要旨ページ（paper.html?id=S1-01 のように発表ごとに表示。1ファイルで全発表に対応）
assets/style.css    デザイン（色は冒頭の :root の変数で変更）
assets/common.js    言語切替などの共通処理（編集不要）
assets/app.js       トップページの描画（編集不要）
assets/paper.js     要旨ページの描画（編集不要）
assets/cityscape.svg 仮の街並みイラスト（完成版に差し替え）
assets/i18n.js      画面の固定文言（英・日・越）
data/srs-data.js    ★ 大会情報・プログラム・発表一覧・受賞（ここだけ編集する）
papers/             論文PDF（S1-01.pdf のように Paper ID をファイル名にする）
posters/            ポスターPDF
```

## 公開手順（GitHub Pages）

1. GitHubで新しいリポジトリを作る（例：`srs2027`、Public）
2. このフォルダの中身をすべてアップロード（Add file → Upload files）
3. Settings → Pages → Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にして Save
4. 数分後に `https://makiko-takagi.github.io/srs2027/` で公開される

## 発表を登録・更新するとき

`data/srs-data.js` の `papers` を編集します。

- `id`：`S1-01` の形式（セッション番号-順番）。発表時刻は `sessions` の開始時刻と `slotMinutes`（8分）から自動で計算されます
- `authors`：`inst` には `institutions` のコード（AR / CT / OK など）を入れます。発表者には `presenter: true` を付けます
- 他高専が確定したら、`institutions` にコードを追加します（例：`UB: "National Institute of Technology (KOSEN), Ube College"`）
- PDFを `papers/` と `posters/` に置けば、各発表にリンクが表示されます。まだ無い場合は `pdf: ""` にするとボタンが消えます

## 要旨ページ

- 論文集やプログラムのタイトルを押すと `paper.html?id=発表番号` が開きます。発表ごとにHTMLを作る必要はありません
- 表示内容：タイトル（日本語・ベトナム語表示のときは英題も併記）、著者と所属、指導教員、要旨、キーワード、プロシーディング原稿とポスターのPDF表示、ダウンロード、引用表記とBibTeX（コピーボタン付き）、前後の発表への移動
- `S1-01` に記入例とサンプルPDF（papers/S1-01.pdf、posters/S1-01.pdf）を入れています。本番前に差し替えてください

## 公開前に書き換える箇所（共有・プレビュー用）

- `index.html` と `paper.html` の `USERNAME` を、GitHubのアカウント名に置き換えます（`og:url` と `og:image`）。LINE・Facebook・Zalo・メールなどでリンクを送ったときに、`assets/og-image.png` がプレビュー画像として表示されます
- `data/srs-data.js` の `event.url` も公開URLに変えます（共有ボタンが使うURL）
- `event.contact` に事務局のメールアドレスを入れます（「事務局へ問い合わせる」ボタンの宛先）
- 日系企業向けに送るときは、`https://.../srs2027/?lang=ja#companies` のように、言語と「企業の皆さまへ」の位置を指定したリンクを使えます

## トップページの構成

SRSについて → 重要日程（過去の日付は自動で薄く表示）→ プログラム → 論文集 → 発表要領 → 企業の皆さまへ（共有ボタン付き）→ 会場・アクセス → シティツアー → 表彰 → 写真 → 組織

- 写真（`gallery`）と協賛・協力（`partners`）は、データが空のあいだは表示されません
- ヒーローのカウントダウンは `event.startDate` から自動計算です

## ロゴと街並みイラスト

- ヘッダーの丸い点線枠2つが主催校ロゴの仮置きです。`index.html` と `paper.html` の `<span class="logo-slot">` を `<img class="logo" src="assets/logo-cttc.png" alt="Cao Thang Technical College">` のように差し替えます
- トップの街並みは `assets/cityscape.svg` を同名で置き換えれば反映されます（横長、下端揃えで表示）

## 多言語対応（英・日・越）

- 右上のボタンで切り替えます。選んだ言語はブラウザに記憶され、URLにも `?lang=ja` のように付くので、言語指定のリンクをそのまま配れます（例：ベトナム側には `?lang=vi`）
- 初回は閲覧者のブラウザの言語設定で自動選択し、該当しなければ英語になります
- データ側の文言は `{ en: "...", ja: "...", vi: "..." }` と書けば言語ごとに切り替わります。訳が無い言語は英語を表示します
- 見出しやボタンなど画面の固定文言は `assets/i18n.js` で編集します
- 引用表記は言語に関係なく英語で固定です
- ベトナム語訳はカオタン側にも確認してもらってください（特に有明高専の校名表記）

## 表彰後

`awards` に `{ award: "Best Presentation Award", id: "S2-03" }` の形で追記します。

## ローカルで確認

`index.html` をダブルクリックで開けば表示を確認できます（データを .js で読み込んでいるため、サーバーなしで動きます）。
