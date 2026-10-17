// クイズ問題のマスタープール（全75問：なぞなぞ・ひらめき・雑学）
const masterQuizData = [
  // --- なぞなぞ・言葉遊び (1~25) ---
  {
    question: "「パンはパンでも、食べられないパン」ってなーんだ？",
    answers: ["フライパン", "食パン", "メロンパン", "フランスパン"],
    correct: 0,
    explanation: "料理に使う調理器具の「フライパン」は食べることができません。"
  },
  {
    question: "おじいちゃん（祖父）と一緒に遊ぶスポーツってなーんだ？",
    answers: ["サッカー", "ソフトボール", "バスケットボール", "テニス"],
    correct: 1,
    explanation: "祖父（ソフ）とするボール遊びなので「ソフトボール」です。"
  },
  {
    question: "部屋の中にいても、いつでも「外」に見えている体の一部はどこ？",
    answers: ["目", "爪（つめ）", "髪の毛", "耳"],
    correct: 1,
    explanation: "「中」という漢字の中に「爪」を入れると「外」という漢字になります。"
  },
  {
    question: "朝は4本足、昼は2本足、夕方は3本足で歩くものはなーんだ？",
    answers: ["人間", "ライオン", "イヌ", "モンスター"],
    correct: 0,
    explanation: "人の一生を表しています。赤ん坊（ハイハイ=4本）、大人（2本足）、老人（杖をつく=3本）です。"
  },
  {
    question: "上に行けば行くほど「くだり」が近くなる乗り物はなーんだ？",
    answers: ["エスカレーター", "エレベーター", "飛行機", "観覧車"],
    correct: 0,
    explanation: "階段の上に行けば行くほど、次に待っているのは「下り（くだり）」だからです。"
  },
  {
    question: "起きている時には絶対に見えず、寝ている時にだけ見えるものはなーんだ？",
    answers: ["夢", "まぶたの裏", "影", "空気"],
    correct: 0,
    explanation: "睡眠をとっている時に脳が見せる「夢」のことです。"
  },
  {
    question: "買った時は黒く、使うと赤くなり、捨てる時は灰色になるものはなーんだ？",
    answers: ["炭（すみ）", "タイヤ", "黒鉛筆", "チョコレート"],
    correct: 0,
    explanation: "木炭は買った時黒く、火をつけると赤く燃え、使い終わると灰（灰色）になります。"
  },
  {
    question: "いくら力いっぱい叩いても、絶対に怒られない（むしろ喜ばれる）体の一部は？",
    answers: ["肩（かた）", "お腹", "頭", "背中"],
    correct: 0,
    explanation: "「肩たたき」の肩は、叩いてあげると喜ばれます。"
  },
  {
    question: "「10 ＋ 10 ＝ 100」が正しい計算になるのは、どんな買い物をした時？",
    answers: ["10円玉を10枚集めたとき", "電卓が壊れているとき", "10%引きのとき", "外貨両替のとき"],
    correct: 0,
    explanation: "10円玉を10枚足し合わせると「100円」になります。"
  },
  {
    question: "カメとウサギとサイが買い物に来ました。トイレットペーパーを買ったのはだれ？",
    answers: ["サイ", "カメ", "ウサギ", "店員さん"],
    correct: 0,
    explanation: "トイレットペーパーは再生紙（サイ生紙＝サイが買う紙）だからです。"
  },
  {
    question: "板に乗っているため、横にしか切ることができない食べ物はなーんだ？",
    answers: ["カマボコ", "たくあん", "食パン", "羊羹（ようかん）"],
    correct: 0,
    explanation: "カマボコは木板の上に載った状態で売られているため、縦に切ると板まで切れてしまいます。"
  },
  {
    question: "「前」にあって「後ろ」になく、「上」にあって「下」にない文字は？",
    answers: ["ひらがなの「う」", "ひらがなの「あ」", "漢字の「一」", "数字の「0」"],
    correct: 0,
    explanation: "「ま『え』」「『う』しろ」「『う』え」「した」という言葉の中で、「う」の有無を表しています。"
  },
  {
    question: "どんなに寒くて凍えそうな日でも、名前からしてあたたかい食べ物は？",
    answers: ["厚揚げ（あつあげ）", "アイスクリーム", "かき氷", "冷やし中華"],
    correct: 0,
    explanation: "「厚（アツ）揚げ」は冷めても名前の中に「アツ」が入っています。"
  },
  {
    question: "本州の中で一番「北」にある県はどこ？",
    answers: ["青森県", "北海道", "秋田県", "岩手県"],
    correct: 0,
    explanation: "北海道は「道」なので、本州および全国で最も北にある「県」は青森県です。"
  },
  {
    question: "食べると心が「ホッ」とする、温かいケーキといえばなーんだ？",
    answers: ["ホットケーキ", "ショートケーキ", "チーズケーキ", "ロールケーキ"],
    correct: 0,
    explanation: "「ホッ（安心）」とする温かい（ホット）ケーキだからです。"
  },
  {
    question: "横型の信号機で、一番「右側」に配置されている色は何色？",
    answers: ["赤色", "青色", "黄色", "緑色"],
    correct: 0,
    explanation: "最も重要な「赤」は、街路樹などで隠れにくいよう道路の内側（右側）に配置されています。"
  },
  {
    question: "どんなに足が速い人でも、絶対に追い越すことができないものは？",
    answers: ["自分の影", "風", "音", "自分の後ろ足"],
    correct: 0,
    explanation: "自分の影は自分が動いた分だけ同時に動くため、追い越せません。"
  },
  {
    question: "取れば取るほど、どんどん大きくなっていくものはなーんだ？",
    answers: ["穴（あな）", "年齢", "写真", "体重"],
    correct: 0,
    explanation: "土や砂を削り取れば取るほど、その場所の「穴」は大きくなります。"
  },
  {
    question: "夜になると空に現れて、朝になると姿を消してしまうものは？",
    answers: ["月", "太陽", "雲", "虹"],
    correct: 0,
    explanation: "夜間だけ見えて朝には見えなくなる天体の「月」です。"
  },
  {
    question: "電車が通る時は閉まって、通らない時は開いている場所はどこ？",
    answers: ["踏切（ふみきり）", "自動ドア", "駅の改札", "窓"],
    correct: 0,
    explanation: "踏切の遮断機は、電車通過時に下りて（閉まって）通行を止めます。"
  },
  {
    question: "お風呂に入った時、一番最初に洗うべき場所はどこ？",
    answers: ["浴室のドア（または浴室に入る足）", "頭", "顔", "お腹"],
    correct: 0,
    explanation: "身体を洗う前に、まずお風呂（浴室）に入るための「ドア」や「足元」を通ります。"
  },
  {
    question: "読むとついつい声が大きくなってしまう本ってなーんだ？",
    answers: ["単行本（たんこうぼん）", "絵本", "辞書", "教科書"],
    correct: 0,
    explanation: "単行本（たん「こうぼん」＝怒号・大声）のダジャレです。"
  },
  {
    question: "貝の中でも、一番「買い物」が得意な貝はなーんだ？",
    answers: ["バイ貝", "アサリ", "シジミ", "ホタテ"],
    correct: 0,
    explanation: "英語で買い物を意味する「Buy（バイ）」が入っているからです。"
  },
  {
    question: "世界中で一番大きな「車」ってなーんだ？",
    answers: ["歯医者（はいしゃ）", "バス", "トラック", "水車"],
    correct: 0,
    explanation: "廃車ではなく「歯医者さん（建物）」のことです。"
  },
  {
    question: "いくら水に入れても、絶対に濡れることがないものは？",
    answers: ["影（かげ）", "魚", "氷", "油"],
    correct: 0,
    explanation: "影は光と遮蔽物によってできる現象なので、水に入れても濡れません。"
  },

  // --- ひらめき・論理パズル (26~50) ---
  {
    question: "テーブルの上にリンゴが10個あります。そこからあなたが3個持って行きました。いま「あなた」が持っているリンゴは何個？",
    answers: ["3個", "7個", "10個", "0個"],
    correct: 0,
    explanation: "「あなたが持っていった」数が3個なので、あなたが持っているのは3個です。"
  },
  {
    question: "「1年の中で31日が存在しない月」は全部でいくつある？",
    answers: ["5つ", "1つ（2月だけ）", "7つ", "12個すべて"],
    correct: 0,
    explanation: "31日がない月は2月・4月・6月・9月・11月の「5つ」です。"
  },
  {
    question: "バスに10人の乗客が乗っています。最初のバス停で3人降りて5人乗ってきました。乗務員（運転手）を含めると今バスには何人いる？",
    answers: ["13人", "12人", "10人", "15人"],
    correct: 0,
    explanation: "乗客10人＋運転手1人＝11人。ここから3人降り（8人）、5人乗った（13人）ので13人です。"
  },
  {
    question: "時速60kmで走る車があります。この車が1時間に進む距離は何km？",
    answers: ["60km", "30km", "100km", "120km"],
    correct: 0,
    explanation: "時速60kmとは「1時間あたり60km進む速さ」という意味です。"
  },
  {
    question: "重さ1kgの鉄と、重さ1kgの綿（わた）。重いのはどっち？",
    answers: ["どちらも同じ", "鉄", "綿", "条件による"],
    correct: 0,
    explanation: "どちらも「1kg」と指定されているため、重さは全く同じです。"
  },
  {
    question: "手元にマッチが1本あります。暗い部屋の中に「石油ストーブ」「ろうそく」「ガスコンロ」があります。最初に火をつけるべきものは？",
    answers: ["マッチ", "石油ストーブ", "ろうそく", "ガスコンロ"],
    correct: 0,
    explanation: "何に火をつけるにしても、まずは手に持っている「マッチ」に火をつける必要があります。"
  },
  {
    question: "「10 ＋ 5 ＝ 3」という計算が正しく成り立つのはどんなとき？",
    answers: ["時刻（時計）の計算のとき", "買い物でおつりをもらうとき", "八進法の計算のとき", "温度の計算のとき"],
    correct: 0,
    explanation: "10時に5時間を足すと「15時（＝午後3時）」になります。"
  },
  {
    question: "丸いホールケーキがあります。ナイフで直線に「3回」だけ切って「8等分」にするにはどう切ればいい？",
    answers: ["十字に2回切り、横（側面）から1回切る", "放射状に3回切る", "斜めに3回切る", "平行に3回切る"],
    correct: 0,
    explanation: "上から十字に切って4等分にし、ケーキの側面から水平に包丁を入れることで8等分になります。"
  },
  {
    question: "コインを投げたところ5回連続で「表」が出ました。6回目に「表」が出る確率は？",
    answers: ["2分の1（50%）", "64分の1", "10分の1", "100%"],
    correct: 0,
    explanation: "過去の結果に関わらず、コインを1回投げて表が出る確率は常に50%です。"
  },
  {
    question: "「1, 2, 3, 5, 8, 13, 21, ?」 の法則に従うと、? に入る数字は？",
    answers: ["34", "25", "30", "42"],
    correct: 0,
    explanation: "前の2つの数字を足すと次の数字になる「フィボナッチ数列」です（13 ＋ 21 ＝ 34）。"
  },
  {
    question: "Aさんの父親は、Bさんの息子です。では、AさんとBさんの関係は？",
    answers: ["BさんはAさんのおじいちゃん（またはおばあちゃん）", "BさんはAさんの父親", "BさんはAさんのおじ", "BさんはAさんの兄弟"],
    correct: 0,
    explanation: "Aさんから見ると「父親の親」になるため、Bさんは祖父または祖母です。"
  },
  {
    question: "日本の硬貨（お金）の中で、中央に穴が「2つ」あいているものはどれ？",
    answers: ["存在しない（すべて穴は1つ以下）", "50円玉", "5円玉", "100円玉"],
    correct: 0,
    explanation: "5円玉と50円玉には穴があいていますが、あいている穴の数はどちらも「1つ」です。"
  },
  {
    question: "英語で一月はJanuary、二月はFebruary。では「十三月」は英語で何という？",
    answers: ["存在しない", "Thirteenty", "Next Year", "Undecimber"],
    correct: 0,
    explanation: "1年は12月までしかないため、十三月は存在しません。"
  },
  {
    question: "南に向かって時速100kmで走っている「電気機関車（電車）」があります。煙はどちらへたなびく？",
    answers: ["煙は出ない", "北", "南", "西"],
    correct: 0,
    explanation: "電気で動く電車（電気機関車）からは煙が出ません。"
  },
  {
    question: "1から100までの整数の中に、「9」という数字は全部で何回出てくる？",
    answers: ["20回", "10回", "11回", "19回"],
    correct: 0,
    explanation: "一の位に10回（9,19,29...99）、十の位に10回（90,91,92...99）で合計20回です。"
  },
  {
    question: "ある部屋に電球が1つあり、部屋の外にスイッチが3つ（A, B, C）あります。部屋のドアを1回だけ開けて電球に対応するスイッチを特定する方法は？",
    answers: ["Aをしばらく点灯させて切り、Bをつけて部屋に入る", "適当に2つ押す", "3つ同時に押す", "勘で当てる"],
    correct: 0,
    explanation: "Aの熱で温まった電球（A）、今ついている電球（B）、冷たく消えている電球（C）で特定できます。"
  },
  {
    question: "「1 ＋ 1」の答えが「1」になる身近な物質はどれ？",
    answers: ["水滴（すいてき）", "リンゴ", "コイン", "鉛筆"],
    correct: 0,
    explanation: "水滴同士を合体させると、大きくなって「1つの水滴」になります。"
  },
  {
    question: "父がテニス、母が水泳、兄がサッカーが得意です。この規則でいくと弟が得意な競技は？",
    answers: ["野球（やきゅう）", "バスケ", "卓球", "陸上"],
    correct: 0,
    explanation: "父（チ・テニス）、母（ハ・スイエイ＝水泳）、兄（アニ・サッカー）...頭文字の母音に対応しています。"
  },
  {
    question: "ある文房具を使うと「線を描くほど短くなる」ものはなーんだ？",
    answers: ["鉛筆（えんぴつ）", "定規", "消しゴム", "コンパス"],
    correct: 0,
    explanation: "鉛筆は線を書いて芯を削っていくとどんどん短くなります。"
  },
  {
    question: "兄弟が5人います。1人目に兄が1人、2人目にも兄が1人...全員に兄が1人ずついる場合、男兄弟は何人？",
    answers: ["2人", "5人", "10人", "1人"],
    correct: 0,
    explanation: "長男（兄）が1人と、その下に弟が1人いれば、弟にとって「兄が1人いる」状態になります。"
  },
  {
    question: "1本の直線を引くだけで「98」という数字を「100」にするには？",
    answers: ["真ん中に横線を引いて「100/100（分数）」にする", "98の横に1を書く", "8を削る", "斜め線を引く"],
    correct: 0,
    explanation: "98の真ん中に横線を引くと、分子100・分母100の分数になり値が1（100%）になります。"
  },
  {
    question: "「あ・い・う・え・お」の中で、一番姿勢が良い文字はどれ？",
    answers: ["い", "あ", "う", "え"],
    correct: 0,
    explanation: "「いい姿勢（『い』い姿勢）」だからです。"
  },
  {
    question: "「リンゴ、ゴリラ、ラッパ、パセリ」の次に繋げる言葉として適しているものは？",
    answers: ["リス", "リンゴ", "リモコン", "イチゴ"],
    correct: 0,
    explanation: "しりとりです。「パセリ」の最後の文字「リ」から始まる言葉を選びます。"
  },
  {
    question: "カレンダーの上で「月曜日」の前に「日曜日」が来ない国や場所はどこ？",
    answers: ["辞書の中", "アメリカ", "宇宙ステーション", "オーストラリア"],
    correct: 0,
    explanation: "辞書では五十音順（五十音並び）で載っているため、「げつようび」が「にちようび」より先に来ます。"
  },
  {
    question: "キリンの首がとても長い主な理由はなに？",
    answers: ["高い場所の葉っぱを食べて生き残るため", "首の骨が何百本もあるから", "敵を遠くから見つけるためだけ", "声を出やすくするため"],
    correct: 0,
    explanation: "高い木の上の葉を食べるために適応・進化してきたためです。"
  },

  // --- 自然・雑学・一般常識 (51~75) ---
  {
    question: "日本で一番高い山は富士山ですが、2番目に高い山はどれ？",
    answers: ["北岳（きただけ）", "奥穂高岳", "槍ヶ岳", "阿蘇山"],
    correct: 0,
    explanation: "山梨県にある「北岳（標高3,193m）」が日本で2番目に高い山です。"
  },
  {
    question: "太陽系の中で、最も直径が大きい惑星はどれ？",
    answers: ["木星", "土星", "天王星", "地球"],
    correct: 0,
    explanation: "木星は地球の約11倍の直径を持つ、太陽系最大の惑星です。"
  },
  {
    question: "トランプのカードは、ジョーカーを除くと全部で何枚ある？",
    answers: ["52枚", "48枚", "54枚", "50枚"],
    correct: 0,
    explanation: "4つのマーク（スート）×13枚で、合計52枚あります。"
  },
  {
    question: "世界で最も国土面積が広い国はどこ？",
    answers: ["ロシア", "アメリカ", "中国", "カナダ"],
    correct: 0,
    explanation: "世界最大の面積を持つ国はロシア（約1,710万平方km）です。"
  },
  {
    question: "人間の身体の中で、最も硬い組織（部位）はどこ？",
    answers: ["歯のエナメル質", "頭蓋骨", "大腿骨", "爪"],
    correct: 0,
    explanation: "歯の最表面を覆うエナメル質は、モース硬度5度（水晶に近い硬さ）があります。"
  },
  {
    question: "国際電話をかける際、日本の「国番号（国コード）」は何番？",
    answers: ["+81", "+1", "+86", "+82"],
    correct: 0,
    explanation: "日本の国番号は「+81」です。（アメリカは+1、中国は+86など）"
  },
  {
    question: "オリンピックのシンボル「五輪マーク」に使われていない色はどれ？",
    answers: ["紫", "黒", "緑", "黄"],
    correct: 0,
    explanation: "五輪マークの5色は「青・黄・黒・緑・赤」です。紫は含まれません。"
  },
  {
    question: "キリンの首の骨（頚椎）の数は何本？",
    answers: ["7本", "12本", "20本", "50本"],
    correct: 0,
    explanation: "首の長いキリンですが、人間や多くの哺乳類と同じ「7本」の骨で構成されています。"
  },
  {
    question: "光の三原色（RGB）に含まれない色はどれ？",
    answers: ["黄色（Y）", "赤色（R）", "緑色（G）", "青色（B）"],
    correct: 0,
    explanation: "光の三原色は赤・緑・青（RGB）です。黄色は色の三原色（CMYK）に含まれます。"
  },
  {
    question: "うるう年ではない通常の「1年（365日）」は、およそ何秒？",
    answers: ["約3,153万秒", "約1,000万秒", "約5,000万秒", "約1億秒"],
    correct: 0,
    explanation: "60秒×60分×24時間×365日 ＝ 31,536,000秒です。"
  },
  {
    question: "お寿司に添えられている生姜「ガリ」の効能として誤っているものは？",
    answers: ["体を直接冷やす効果", "殺菌効果", "口直し効果", "生臭さを消す効果"],
    correct: 0,
    explanation: "生姜に含まれるジンゲロール等の成分は、体を「温める」効果があります。"
  },
  {
    question: "サッカーの公式試合で、ピッチ（コート）上に立つ1チームの人数は何人？",
    answers: ["11人", "9人", "10人", "12人"],
    correct: 0,
    explanation: "ゴールキーパーを含めて1チーム11人でプレーします。"
  },
  {
    question: "ミツバチの中で、毒針を持って人を刺すのはどのハチ？",
    answers: ["メス（働きバチ・女王バチ）だけ", "オスだけ", "オス・メス両方", "女王バチだけ"],
    correct: 0,
    explanation: "ハチの針は「産卵管」が変化したものなので、針を持っているのはメスだけです。"
  },
  {
    question: "世界で一番長い川とされるアフリカ大陸の川はどれ？",
    answers: ["ナイル川", "アマゾン川", "ミシシッピ川", "長江"],
    correct: 0,
    explanation: "全長約6,650kmのナイル川が世界最長の川とされています。"
  },
  {
    question: "ダイヤモンドと同じ「炭素」という元素のみからできている身近なものは？",
    answers: ["鉛筆の芯（黒鉛）", "プラスチック", "ガラス", "鉄"],
    correct: 0,
    explanation: "ダイヤモンドと鉛筆の芯（グラファイト）は、どちらも炭素原子からできています。"
  },
  {
    question: "ジャイアントパンダは生物学的な分類において「何科」の動物？",
    answers: ["クマ科", "ネコ科", "イヌ科", "ラクダ科"],
    correct: 0,
    explanation: "食竹性の生態ですが、分類上は食肉目「クマ科」に属します。"
  },
  {
    question: "長さの単位で「1メートル」は何センチメートル？",
    answers: ["100cm", "10cm", "1000cm", "10000cm"],
    correct: 0,
    explanation: "1m ＝ 100cm です。"
  },
  {
    question: "世界一高い建造物（超高層ビル）「ブルジュ・ハリファ」がある都市はどこ？",
    answers: ["ドバイ", "ニューヨーク", "東京", "上海"],
    correct: 0,
    explanation: "アラブ首長国連邦（UAE）のドバイにあり、高さは828mあります。"
  },
  {
    question: "日本の一円硬貨（1円玉）1枚の重さはちょうど何グラム？",
    answers: ["1グラム", "2グラム", "3グラム", "5グラム"],
    correct: 0,
    explanation: "1円玉はアルミニウム100%でできており、重さは正確に1gです。"
  },
  {
    question: "将棋盤のマス目は縦9マス×横9マス。全部でいくつある？",
    answers: ["81マス", "64マス", "100マス", "72マス"],
    correct: 0,
    explanation: "9×9で合計81マスです。（チェス盤は8×8の64マスです）"
  },
  {
    question: "血液型のABO式分類において、存在しない型はどれ？",
    answers: ["C型", "A型", "B型", "O型"],
    correct: 0,
    explanation: "ABO式血液型は A型、B型、O型、AB型の4種類です。"
  },
  {
    question: "化学の元素記号「O」が表している物質は何？",
    answers: ["酸素（Oxygen）", "水素（Hydrogen）", "窒素（Nitrogen）", "金（Gold）"],
    correct: 0,
    explanation: "「O」は酸素（Oxygen）の元素記号です。"
  },
  {
    question: "「かくれんぼ」で隠れる側のプレイヤーの呼び方は何？",
    answers: ["子（こ）", "鬼（おに）", "ターゲット", "ランナー"],
    correct: 0,
    explanation: "かくれんぼは「鬼」と「子」に分かれて遊ぶ伝統的な遊びです。"
  },
  {
    question: "日本で一般的に認識されている「虹（にじ）」の色数は何色？",
    answers: ["7色", "5色", "6色", "8色"],
    correct: 0,
    explanation: "日本では赤・橙・黄・緑・青・藍・紫の「7色」とされています。"
  },
  {
    question: "地球が太陽の周りを1周（公転）するのにかかる期間はおよそどれくらい？",
    answers: ["1年（約365日）", "1日", "1か月", "10年"],
    correct: 0,
    explanation: "地球が太陽の周りを自転しながら1周する期間が「1年」です。"
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
  let comment = "もう少し！ひらめき力を鍛えて再挑戦してみよう！";

  if (percentage === 100) {
    rank = "S";
    comment = "全問正解！素晴らしいひらめき力です！";
  } else if (percentage >= 80) {
    rank = "A";
    comment = "惜しい！あと一歩で満点です！";
  } else if (percentage >= 60) {
    rank = "B";
    comment = "ナイス！なかなか冴えています！";
  }

  rankBadgeEl.textContent = rank;
  scoreDisplayEl.textContent = `${currentQuizData.length}問中 ${score}問 正解 (${Math.round(percentage)}%)`;
  resultCommentEl.textContent = comment;
}

// リトライボタン
btnRestart.addEventListener("click", startQuiz);

// 最初にクイズを開始
startQuiz();