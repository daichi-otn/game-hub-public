// クイズ問題のマスタープール（全75問）
const masterQuizData = [
  // --- HTML基礎 (1~10) ---
  {
    question: "HTMLの正式名称はどれ？",
    answers: ["HyperText Markup Language", "HighText Marking Language", "HyperTool Multi Language", "Home Tool Markup Language"],
    correct: 0,
    explanation: "HTMLは「HyperText Markup Language」の略称です。"
  },
  {
    question: "Webページにハイパーリンクを作成するタグはどれ？",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    explanation: "<a>タグ（Anchorタグ）のhref属性にリンク先URLを指定します。"
  },
  {
    question: "HTMLで改行を入れるために使うタグはどれ？",
    answers: ["<br>", "<lb>", "<break>", "<p>"],
    correct: 0,
    explanation: "<br>タグは「Line Break」の略で、文中で改行を行うために使用します。"
  },
  {
    question: "番号付きリストを作成するタグはどれ？",
    answers: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: 1,
    explanation: "<ol>は「Ordered List」の略で、1, 2, 3...と番号が付くリストを作成します。"
  },
  {
    question: "ユーザーからの入力欄（テキストボックス等）を作るタグはどれ？",
    answers: ["<form>", "<input>", "<select>", "<text>"],
    correct: 1,
    explanation: "<input>タグはtype属性を変えることで、様々な入力フォームを作成できます。"
  },
  {
    question: "外部CSSファイルを読み込むためにHTMLで使用するタグはどれ？",
    answers: ["<style>", "<script>", "<link>", "<import>"],
    correct: 2,
    explanation: "<head>タグ内で <link rel=\"stylesheet\" href=\"style.css\"> のように読み込みます。"
  },
  {
    question: "表（テーブル）の「行」を表すタグはどれ？",
    answers: ["<td>", "<th>", "<tr>", "<table>"],
    correct: 2,
    explanation: "<tr>は「Table Row」の略で、表の横一行を定義します。"
  },
  {
    question: "HTMLで最も大きな見出しを表すタグはどれ？",
    answers: ["<h6>", "<head>", "<p>", "<h1>"],
    correct: 3,
    explanation: "<h1>タグは「Heading 1」の略で、最も重要な大見出しを表します。"
  },
  {
    question: "HTMLで画像を表示するために使うタグはどれ？",
    answers: ["<image>", "<img>", "<picture>", "<src>"],
    correct: 1,
    explanation: "画像表示には <img> タグを使います。src属性で画像ファイルを指定します。"
  },
  {
    question: "日本語Webページでよく使われる標準的な文字コード指定はどれ？",
    answers: ["UTF-8", "Shift_JIS", "EUC-JP", "ASCII"],
    correct: 0,
    explanation: "現在は世界中でUTF-8が標準文字コードとして利用されています。"
  },

  // --- CSS基礎 (11~20) ---
  {
    question: "CSSで「ID指定（id=\"title\"）」の要素にスタイルを適用する記号は？",
    answers: [".", "#", "@", "$"],
    correct: 1,
    explanation: "IDは「#title」、クラス（class）は「.title」で指定します。"
  },
  {
    question: "CSSで要素の内側の余白（パディング）を設定するプロパティは？",
    answers: ["margin", "padding", "border", "spacing"],
    correct: 1,
    explanation: "paddingは枠線の「内側」、marginは枠線の「外側」の余白を指定します。"
  },
  {
    question: "CSSで要素を完全に非表示にする指定はどれ？",
    answers: ["display: none;", "visibility: hidden;", "opacity: 0;", "hidden: true;"],
    correct: 0,
    explanation: "display: none; は要素の存在自体を消し、レイアウト上のスペースも詰めます。"
  },
  {
    question: "CSSで文字の大きさを変えたい時に使うプロパティはどれ？",
    answers: ["font-size", "text-size", "font-weight", "size"],
    correct: 0,
    explanation: "文字の大きさは font-size プロパティで指定します。"
  },
  {
    question: "CSSで文字の色を変えたい時に使うプロパティはどれ？",
    answers: ["font-color", "text-color", "color", "style-color"],
    correct: 2,
    explanation: "正しくは「color」プロパティを使用します。"
  },
  {
    question: "CSSで角丸の丸みをつけるプロパティはどれ？",
    answers: ["border-radius", "border-style", "border-corner", "box-radius"],
    correct: 0,
    explanation: "border-radius を使うと、ボタンや枠線の角を丸くすることができます。"
  },
  {
    question: "CSSで要素の重ね合わせの順序（手前・奥）を指定するプロパティは？",
    answers: ["z-index", "order", "flex-order", "layer"],
    correct: 0,
    explanation: "z-index の数値が大きいほど、要素が手前に表示されます。"
  },
  {
    question: "CSSで透明度を指定するプロパティはどれ？",
    answers: ["transparent", "opacity", "alpha", "filter"],
    correct: 1,
    explanation: "opacity: 0.5; のように0〜1の数値で透明度を指定します。"
  },
  {
    question: "CSSで文字を中央揃えにするプロパティと値の組み合わせは？",
    answers: ["align: center;", "text-align: center;", "vertical-align: middle;", "flex-align: center;"],
    correct: 1,
    explanation: "テキストの横方向の中央揃えには text-align: center; を使用します。"
  },
  {
    question: "CSSで要素を上下左右のぴったり中央に配置する Flexbox の組み合わせは？",
    answers: ["justify-content: center; align-items: center;", "text-align: center; vertical-align: middle;", "margin: auto; padding: auto;", "float: center;"],
    correct: 0,
    explanation: "display: flex; と組み合わせてこの2つを指定すると上下左右中央寄せになります。"
  },

  // --- JavaScript基礎 (21~35) ---
  {
    question: "JavaScriptでブラウザのコンソールに値を表示する命令は？",
    answers: ["console.log()", "print()", "document.write()", "alert()"],
    correct: 0,
    explanation: "デバッグや確認には console.log() がよく使われます。"
  },
  {
    question: "JavaScriptで再代入できない「定数」を宣言するキーワードは？",
    answers: ["var", "let", "const", "function"],
    correct: 2,
    explanation: "constは再代入不可の定数を宣言します。"
  },
  {
    question: "JavaScriptで再代入可能な「変数」を宣言するモダンなキーワードは？",
    answers: ["var", "let", "const", "dim"],
    correct: 1,
    explanation: "現在のJavaScriptでは再代入可能な変数宣言に let を使用します。"
  },
  {
    question: "JavaScriptで配列の末尾に新しい要素を追加するメソッドは？",
    answers: ["add()", "append()", "push()", "insert()"],
    correct: 2,
    explanation: "push() メソッドを使うと配列の最後に要素を追加できます。"
  },
  {
    question: "JavaScriptで配列の要素数を取得するプロパティはどれ？",
    answers: ["length", "size", "count", "index"],
    correct: 0,
    explanation: "array.length で配列に含まれるデータ数が取得できます。"
  },
  {
    question: "JavaScriptで0以上1未満のランダムな小数を生成する関数は？",
    answers: ["Math.random()", "Math.floor()", "Math.round()", "Math.ceil()"],
    correct: 0,
    explanation: "Math.random() は 0 以上 1 未満の疑似乱数を返します。"
  },
  {
    question: "JavaScriptで小数点を切り捨てる関数はどれ？",
    answers: ["Math.random()", "Math.floor()", "Math.round()", "Math.abs()"],
    correct: 1,
    explanation: "Math.floor() は与えられた数値以下の最大の整数（切り捨て）を返します。"
  },
  {
    question: "JavaScriptで指定したIDを持つHTML要素を取得するメソッドは？",
    answers: ["document.getElementById()", "document.querySelector()", "document.getElements()", "document.findId()"],
    correct: 0,
    explanation: "getElementById('id名') で特定のHTML要素を取得できます。"
  },
  {
    question: "JavaScriptでボタンがクリックされた時のイベントを割り当てるメソッドは？",
    answers: ["addEventListener()", "attachEvent()", "onEvent()", "listen()"],
    correct: 0,
    explanation: "element.addEventListener('click', 関数) のように記述します。"
  },
  {
    question: "JavaScriptで変数のデータ型を確認する演算子はどれ？",
    answers: ["typeof", "instanceof", "type()", "checkType"],
    correct: 0,
    explanation: "typeof 'hello' のように使うと \"string\" などの型名が得られます。"
  },
  {
    question: "JavaScriptでポップアップメッセージを表示させる関数はどれ？",
    answers: ["alert()", "console.log()", "print()", "popup()"],
    correct: 0,
    explanation: "alert('メッセージ') でブラウザ上に警告ダイアログを表示します。"
  },
  {
    question: "文字列「123」を数値の 123 に変換するJavaScriptの関数は？",
    answers: ["parseInt()", "toString()", "toNumber()", "convertInt()"],
    correct: 0,
    explanation: "parseInt() や parseFloat() を使って文字列を数値型に変換します。"
  },
  {
    question: "JavaScriptで一定時間（ミリ秒）後に処理を実行するタイマー関数は？",
    answers: ["setTimeout()", "setInterval()", "setTimer()", "wait()"],
    correct: 0,
    explanation: "setTimeout(関数, 時間) で1回限りのタイマー実行を行えます。"
  },
  {
    question: "JavaScriptで条件分岐を行う際に使用する構文はどれ？",
    answers: ["if / else", "for / loop", "try / catch", "switch / break"],
    correct: 0,
    explanation: "条件によって処理を分けるには if / else 構文を使用します。"
  },
  {
    question: "JavaScriptで真偽値（true / false）を表す型名はどれ？",
    answers: ["Boolean", "String", "Number", "Object"],
    correct: 0,
    explanation: "真偽値は Boolean（ブーリアン）型と呼ばれます。"
  },

  // --- PC・Web・IT知識 (36~50) ---
  {
    question: "WebサイトのURLの先頭にある「https」の「s」は何の略？",
    answers: ["System", "Secure", "Server", "Speed"],
    correct: 1,
    explanation: "Secureの略で、通信が暗号化されて安全に保護されていることを表します。"
  },
  {
    question: "Webページが見つからない場合に返されるHTTPエラーコード（ステータスコード）は？",
    answers: ["200", "403", "404", "500"],
    correct: 2,
    explanation: "404 Error (Not Found) は指定したページが存在しない場合に表示されます。"
  },
  {
    question: "キーボードで「すべて選択」を行うショートカットキーは？(Windows)",
    answers: ["Ctrl + C", "Ctrl + V", "Ctrl + A", "Ctrl + Z"],
    correct: 2,
    explanation: "Ctrl + A（All）で画面内の全選択ができます。"
  },
  {
    question: "キーボードで「元に戻す（Undo）」を行うショートカットキーは？(Windows)",
    answers: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + S"],
    correct: 0,
    explanation: "直前の操作を取り消すには Ctrl + Z を押します。"
  },
  {
    question: "ブラウザで「ページの再読み込み（更新）」を行うファンクションキーは？",
    answers: ["F1", "F5", "F8", "F12"],
    correct: 1,
    explanation: "F5キーを押すとWebページを再読み込み（リロード）できます。"
  },
  {
    question: "ブラウザで「開発者ツール（デバッグ画面）」を開くファンクションキーは？",
    answers: ["F2", "F5", "F11", "F12"],
    correct: 3,
    explanation: "F12キーでブラウザの開発者ツールを開くことができます。"
  },
  {
    question: "IPアドレスとドメイン名（〇〇.comなど）を相互変換する仕組みは？",
    answers: ["DNS", "DHCP", "HTTP", "FTP"],
    correct: 0,
    explanation: "DNS（Domain Name System）がインターネット上の住所変換を行っています。"
  },
  {
    question: "プログラムのソースコードの変更履歴を管理する代表的なツールは？",
    answers: ["Git", "Docker", "Node.js", "Linux"],
    correct: 0,
    explanation: "Gitは世界中で広く使われている分散型バージョン管理システムです。"
  },
  {
    question: "Web上でデータを軽量にやり取りするために使われるデータ記述形式は？",
    answers: ["JSON", "CSV", "XML", "TXT"],
    correct: 0,
    explanation: "JSON（JavaScript Object Notation）はJavaScriptと相性が良く軽量な形式です。"
  },
  {
    question: "画像ファイル形式のうち、背景を「透明」に透過できる代表的な形式は？",
    answers: ["JPEG", "PNG", "BMP", "PDF"],
    correct: 1,
    explanation: "PNGやSVG形式は透明度の情報（アルファチャンネル）を保持できます。"
  },
  {
    question: "PCやスマホなど画面幅に応じて表示レイアウトを最適化する設計手法は？",
    answers: ["レスポンシブWebデザイン", "アダプティブWebデザイン", "ダイナミックデザイン", "リバースデザイン"],
    correct: 0,
    explanation: "1つのHTMLで画面サイズに合わせてCSSを変える手法をレスポンシブデザインと呼びます。"
  },
  {
    question: "Webブラウザとサーバー間で通信状態やログイン状態を保持する小さなデータは？",
    answers: ["Cookie", "Cache", "History", "Session Storage"],
    correct: 0,
    explanation: "Cookie（クッキー）に情報を保存することで、ログイン状態の保持などが可能です。"
  },
  {
    question: "HTTP通信において「正常にリクエストが成功した」ことを表すコードは？",
    answers: ["200 OK", "301 Moved Permanently", "400 Bad Request", "503 Service Unavailable"],
    correct: 0,
    explanation: "ステータスコード「200」は通信が正常に完了したことを示します。"
  },
  {
    question: "キーボードで「コピー」を行うショートカットキーは？(Windows)",
    answers: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + P"],
    correct: 0,
    explanation: "Ctrl + C で選択した文字やファイルをコピーします。"
  },
  {
    question: "キーボードで「貼り付け」を行うショートカットキーは？(Windows)",
    answers: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + N"],
    correct: 1,
    explanation: "Ctrl + V でコピーした内容を貼り付けます。"
  },

  // --- HTML発展 (51~55) ---
  {
    question: "HTMLでWebページのタイトル（ブラウザのタブ名）を設定するタグはどれ？",
    answers: ["<title>", "<head>", "<header>", "<meta>"],
    correct: 0,
    explanation: "<title>タグで設定した文字列が、ブラウザのタブや検索結果の見出しとして表示されます。"
  },
  {
    question: "HTML5でページの「フッター（最下部）」を表す構造化タグはどれ？",
    answers: ["<footer>", "<bottom>", "<end>", "<aside>"],
    correct: 0,
    explanation: "<footer>タグはページの最後尾や著作権情報などをグループ化するタグです。"
  },
  {
    question: "別のWebページを枠内に埋め込んで表示するHTMLタグはどれ？",
    answers: ["<iframe>", "<embed>", "<object>", "<frame>"],
    correct: 0,
    explanation: "<iframe>（インラインフレーム）を使うと、YouTube動画やGoogleマップなどをWebページ内に埋め込めます。"
  },
  {
    question: "検索エンジンやメタ情報を記述するために<head>内で使うタグはどれ？",
    answers: ["<meta>", "<info>", "<data>", "<link>"],
    correct: 0,
    explanation: "<meta>タグで文字コードや画面サイズ設定（viewport）、検索用説明文などを記述します。"
  },
  {
    question: "HTMLでフォームの送信ボタンを作る正しい記述はどれ？",
    answers: ["<input type=\"submit\">", "<input type=\"button\">", "<button type=\"send\">", "<input type=\"post\">"],
    correct: 0,
    explanation: "<input type=\"submit\"> や <button type=\"submit\"> でフォームデータを送信できます。"
  },

  // --- CSS発展 (56~62) ---
  {
    question: "CSSで要素の幅（width）にパディングやボーダーを含める指定はどれ？",
    answers: ["box-sizing: border-box;", "box-sizing: content-box;", "width-mode: include;", "border-fit: contain;"],
    correct: 0,
    explanation: "box-sizing: border-box; を使うと、paddingやborderを足しても要素全体の幅が変わらなくなるためレイアウトが崩れにくくなります。"
  },
  {
    question: "CSSで親要素を基準にした絶対位置で配置する position の値は？",
    answers: ["absolute", "relative", "fixed", "sticky"],
    correct: 0,
    explanation: "親要素に position: relative; を指定し、子要素に position: absolute; を指定して位置を調整するのが定番です。"
  },
  {
    question: "CSSで画面サイズ（レスポンシブ）に応じてスタイルを変える構文はどれ？",
    answers: ["@media", "@responsive", "@screen", "@device"],
    correct: 0,
    explanation: "@media (max-width: 768px) { ... } のように書くことで、スマホ用表示などを切り替えられます。"
  },
  {
    question: "CSSで要素の上にマウスカーソルが乗った時、指マーク（ポインター）に変える指定は？",
    answers: ["cursor: pointer;", "pointer: hand;", "mouse: click;", "hover: pointer;"],
    correct: 0,
    explanation: "cursor: pointer; を指定すると、クリック可能であることをユーザーに直感的に伝えられます。"
  },
  {
    question: "CSSで要素からはみ出た部分を「非表示（隠す）」にするプロパティと値は？",
    answers: ["overflow: hidden;", "overflow: scroll;", "display: hidden;", "visibility: none;"],
    correct: 0,
    explanation: "overflow: hidden; を使うと、枠からはみ出た画像やテキストをきれいに隠すことができます。"
  },
  {
    question: "CSSで2次元（行と列）のマス目状レイアウトを作るディスプレイ指定は？",
    answers: ["display: grid;", "display: flex;", "display: block;", "display: table;"],
    correct: 0,
    explanation: "Grid Layout（display: grid;）を使うと、複雑なマス目状のレイアウトを直感的に組むことができます。"
  },
  {
    question: "CSSで色の変化などのアニメーションを滑らかにするプロパティは？",
    answers: ["transition", "animation", "transform", "smooth"],
    correct: 0,
    explanation: "transition: all 0.3s ease; のように指定すると、ホバー時などの変化が滑らかになります。"
  },

  // --- JavaScript発展 (63~70) ---
  {
    question: "JavaScriptで配列の各要素を加工して「新しい配列」を作るメソッドは？",
    answers: ["map()", "forEach()", "filter()", "reduce()"],
    correct: 0,
    explanation: "map() メソッドは、配列内のすべての要素に処理を適用した結果からなる新しい配列を生成します。"
  },
  {
    question: "JavaScriptで条件に合う要素だけを「抽出」して新しい配列を作るメソッドは？",
    answers: ["filter()", "find()", "slice()", "search()"],
    correct: 0,
    explanation: "filter() メソッドは、テスト関数を満たすすべての要素を集めた新しい配列を作成します。"
  },
  {
    question: "JavaScriptでブラウザのストレージにデータを永続保存する仕組みは？",
    answers: ["localStorage", "sessionStorage", "cookieData", "browserCache"],
    correct: 0,
    explanation: "localStorage を使うと、ブラウザを閉じても消えないデータを保存できます。"
  },
  {
    question: "JavaScriptで非同期通信（API呼び出しなど）を行う標準的な関数はどれ？",
    answers: ["fetch()", "get()", "ajax()", "request()"],
    correct: 0,
    explanation: "Fetch API (fetch()) を使うと、ページを更新せずにサーバーからデータを取得できます。"
  },
  {
    question: "JavaScriptでオブジェクトや配列を「JSON形式の文字列」に変換する関数は？",
    answers: ["JSON.stringify()", "JSON.parse()", "JSON.encode()", "JSON.toString()"],
    correct: 0,
    explanation: "JSON.stringify(data) でJavaScriptのデータをJSON文字列に変換できます。"
  },
  {
    question: "JavaScriptで変数が「未定義」であることを表す特別な値はどれ？",
    answers: ["undefined", "null", "NaN", "false"],
    correct: 0,
    explanation: "値がまだ割り当てられていない変数には自動的に undefined が入ります。"
  },
  {
    question: "JavaScriptで配列に特定のデータが含まれているか確認するメソッドは？",
    answers: ["includes()", "contains()", "has()", "exists()"],
    correct: 0,
    explanation: "array.includes(値) を実行すると、含まれている場合 true を返します。"
  },
  {
    question: "JavaScriptで複数の数値の中から「最大値」を取得する関数は？",
    answers: ["Math.max()", "Math.top()", "Math.high()", "Math.biggest()"],
    correct: 0,
    explanation: "Math.max(10, 20, 5) のように渡すと、最も大きい数値（20）を返します。"
  },

  // --- Web・IT知識発展 (71~75) ---
  {
    question: "Webサーバー内部でエラーが発生した場合に返されるHTTPステータスコードは？",
    answers: ["500 Internal Server Error", "404 Not Found", "403 Forbidden", "302 Found"],
    correct: 0,
    explanation: "500番台のエラーはサーバー側でプログラムエラー等の問題が発生したことを示します。"
  },
  {
    question: "アクセス権限がない（閲覧禁止）ページを開こうとした際のエラーコードは？",
    answers: ["403 Forbidden", "404 Not Found", "502 Bad Gateway", "401 Unauthorized"],
    correct: 0,
    explanation: "403 Forbidden はアクセス権限が与えられていないことを意味します。"
  },
  {
    question: "検索エンジンで自分のWebサイトを上位表示させるための取り組みを何と呼ぶ？",
    answers: ["SEO", "SNS", "SEM", "SaaS"],
    correct: 0,
    explanation: "SEO（Search Engine Optimization：検索エンジン最適化）と呼びます。"
  },
  {
    question: "Gitで作業した変更内容をローカルリポジトリに記録（保存）するコマンドは？",
    answers: ["git commit", "git push", "git add", "git save"],
    correct: 0,
    explanation: "git commit -m \"メッセージ\" で変更履歴をローカルに記録します。"
  },
  {
    question: "ソフトウェア同士が機能やデータを連携・共有するための仕組みを何と呼ぶ？",
    answers: ["API", "SDK", "URL", "DNS"],
    correct: 0,
    explanation: "API（Application Programming Interface）を使って外部のデータや機能を呼び出します。"
  }
];

// 出題用の配列と状態管理変数
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;

// HTML要素の取得
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionCountEl = document.getElementById("question-count");
const questionTextEl = document.getElementById("question-text");
const answersGridEl = document.getElementById("answers-grid");
const explanationBoxEl = document.getElementById("explanation-box");
const btnNext = document.getElementById("btn-next");
const progressBarEl = document.getElementById("progress-bar");
const scoreDisplayEl = document.getElementById("score-display");
const btnRestart = document.getElementById("btn-restart");
const rankBadgeEl = document.getElementById("rank-badge");
const resultCommentEl = document.getElementById("result-comment");

// 配列をランダムに並び替える関数
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// クイズの初期化・開始
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  
  // 全75問からランダムに5問抽出
  shuffleArray(masterQuizData);
  currentQuizData = masterQuizData.slice(0, 5);

  quizScreen.style.display = "block";
  resultScreen.style.display = "none";
  showQuestion();
}

// 問題の表示
function showQuestion() {
  const currentQuiz = currentQuizData[currentQuestionIndex];

  const progressPercent = (currentQuestionIndex / currentQuizData.length) * 100;
  progressBarEl.style.width = `${progressPercent}%`;
  questionCountEl.textContent = `第 ${currentQuestionIndex + 1} 問 / ${currentQuizData.length} 問`;
  
  questionTextEl.textContent = currentQuiz.question;

  answersGridEl.innerHTML = "";
  explanationBoxEl.style.display = "none";
  btnNext.disabled = true;

  currentQuiz.answers.forEach((answerText, index) => {
    const button = document.createElement("button");
    button.textContent = `${index + 1}. ${answerText}`;
    button.classList.add("btn-answer");
    button.addEventListener("click", () => selectAnswer(index));
    answersGridEl.appendChild(button);
  });
}

// 選択肢を選んだときの処理
function selectAnswer(selectedIndex) {
  const currentQuiz = currentQuizData[currentQuestionIndex];
  const answerButtons = answersGridEl.querySelectorAll(".btn-answer");

  answerButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQuiz.correct) {
    score++;
    answerButtons[selectedIndex].classList.add("correct");
  } else {
    answerButtons[selectedIndex].classList.add("wrong");
    answerButtons[currentQuiz.correct].classList.add("correct");
  }

  explanationBoxEl.textContent = `【解説】 ${currentQuiz.explanation}`;
  explanationBoxEl.style.display = "block";

  btnNext.disabled = false;
}

// 次の問題へ移動または結果表示
btnNext.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuizData.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// 結果画面の表示
function showResult() {
  progressBarEl.style.width = "100%";
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  const percentage = (score / currentQuizData.length) * 100;
  let rank = "C";
  let comment = "もう少し！解説を読んで再挑戦してみよう！";

  if (percentage === 100) {
    rank = "S";
    comment = "全問正解！完璧な理解度です！";
  } else if (percentage >= 80) {
    rank = "A";
    comment = "素晴らしい！あと一歩で満点です！";
  } else if (percentage >= 60) {
    rank = "B";
    comment = "ナイス！しっかり基礎が身についています！";
  }

  rankBadgeEl.textContent = rank;
  scoreDisplayEl.textContent = `${currentQuizData.length}問中 ${score}問 正解 (${Math.round(percentage)}%)`;
  resultCommentEl.textContent = comment;
}

// リトライボタン
btnRestart.addEventListener("click", startQuiz);

// 最初にクイズを開始
startQuiz();