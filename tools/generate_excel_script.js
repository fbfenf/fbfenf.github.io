const xlsx = require('xlsx');

// 1. [Basic] Daily Life Expressions (30 sentences)
const basic_korean = [
    { Korean: "안녕하세요!", English: "Hello!", Japanese: "こんにちは！", Chinese: "你好！" },
    { Korean: "반가워요.", English: "Nice to meet you.", Japanese: "お会いできて嬉しいです。", Chinese: "很高兴见到你。" },
    { Korean: "감사합니다.", English: "Thank you.", Japanese: "ありがとうございます。", Chinese: "谢谢。" },
    { Korean: "죄송합니다.", English: "I'm sorry.", Japanese: "申し訳ありません。", Chinese: "对不起。" },
    { Korean: "얼마예요?", English: "How much is this?", Japanese: "いくらですか？", Chinese: "多少钱？" },
    { Korean: "맛있어요.", English: "It's delicious.", Japanese: "美味しいです。", Chinese: "很好吃。" },
    { Korean: "사랑해요.", English: "I love you.", Japanese: "愛しています。", Chinese: "我爱你。" },
    { Korean: "잠시만요.", English: "Just a moment.", Japanese: "少々お待ちください。", Chinese: "请稍等。" },
    { Korean: "화이팅!", English: "Cheer up! / Good luck!", Japanese: "ファイト！", Chinese: "加油！" },
    { Korean: "안녕히 가세요.", English: "Goodbye. (to someone leaving)", Japanese: "さようなら。", Chinese: "慢走。" },
    { Korean: "안녕히 계세요.", English: "Goodbye. (to someone staying)", Japanese: "さようなら。", Chinese: "留步。" },
    { Korean: "잘 자요.", English: "Good night.", Japanese: "おやすみなさい。", Chinese: "晚安。" },
    { Korean: "배가 고파요.", English: "I'm hungry.", Japanese: "お腹が空きました。", Chinese: "我饿了。" },
    { Korean: "어디예요?", English: "Where are you?", Japanese: "どこですか？", Chinese: "你在哪里？" },
    { Korean: "화장실 어디예요?", English: "Where is the bathroom?", Japanese: "トイレはどこですか？", Chinese: "洗手间在哪里？" },
    { Korean: "도와주세요.", English: "Help me.", Japanese: "助けてください。", Chinese: "请帮帮我。" },
    { Korean: "괜찮아요.", English: "I'm okay.", Japanese: "大丈夫です。", Chinese: "没关系。" },
    { Korean: "축하해요!", English: "Congratulations!", Japanese: "おめでとうございます！", Chinese: "恭喜！" },
    { Korean: "생일 축하해요.", English: "Happy birthday.", Japanese: "お誕生日おめでとうございます。", Chinese: "生日快乐。" },
    { Korean: "이름이 뭐예요?", English: "What is your name?", Japanese: "名前は何ですか？", Chinese: "你叫什么名字？" },
    { Korean: "제 이름은 ...입니다.", English: "My name is ...", Japanese: "私の名前は…です。", Chinese: "我叫...。" },
    { Korean: "한국 사람이에요?", English: "Are you Korean?", Japanese: "韓国人ですか？", Chinese: "你是韩国人吗？" },
    { Korean: "영어 할 수 있어요?", English: "Can you speak English?", Japanese: "英語を話せますか？", Chinese: "你会说英语吗？" },
    { Korean: "좋아요.", English: "I like it. / Good.", Japanese: "いいですね。", Chinese: "好/喜欢。" },
    { Korean: "싫어요.", English: "I don't like it.", Japanese: "嫌です。", Chinese: "不喜欢/讨厌。" },
    { Korean: "진짜요?", English: "Really?", Japanese: "本当ですか？", Chinese: "真的吗？" },
    { Korean: "몰라요.", English: "I don't know.", Japanese: "わかりません。", Chinese: "不知道。" },
    { Korean: "알아요.", English: "I know.", Japanese: "知っています。", Chinese: "我知道。" },
    { Korean: "천만에요.", English: "You're welcome.", Japanese: "どういたしまして。", Chinese: "不客气。" },
    { Korean: "다음에 봐요.", English: "See you next time.", Japanese: "また会いましょう。", Chinese: "下次见。" }
];

// 2. [Intermediate] Office Business Talk (50 sentences)
const business_korean = [
    { Korean: "안녕하십니까.", English: "Greetings (Formal).", Japanese: "こんにちは（丁寧）。", Chinese: "您好。" },
    { Korean: "수고하셨습니다.", English: "Good job today. / Thank you for your effort.", Japanese: "お疲れ様でした。", Chinese: "辛苦了。" },
    { Korean: "회의 시작하겠습니다.", English: "Let's start the meeting.", Japanese: "会議を始めます。", Chinese: "会议开始。" },
    { Korean: "의견 있으신가요?", English: "Do you have any opinions?", Japanese: "ご意見はありますか？", Chinese: "有什么意见吗？" },
    { Korean: "결재 부탁드립니다.", English: "Please approve this.", Japanese: "決裁をお願いします。", Chinese: "请审批。" },
    { Korean: "보고서 제출했습니다.", English: "I submitted the report.", Japanese: "報告書を提出しました。", Chinese: "报告已提交。" },
    { Korean: "이메일 확인 부탁드립니다.", English: "Please check your email.", Japanese: "メールの確認をお願いします。", Chinese: "请查收邮件。" },
    { Korean: "오늘 회식 있나요?", English: "Do we have a team dinner today?", Japanese: "今日の飲み会はありますか？", Chinese: "今天有聚餐吗？" },
    { Korean: "야근해야 할 것 같습니다.", English: "I think I have to work overtime.", Japanese: "残業になりそうです。", Chinese: "可能要加班。" },
    { Korean: "출장 다녀오겠습니다.", English: "I will go on a business trip.", Japanese: "出張に行ってきます。", Chinese: "我去出差了。" },
    { Korean: "죄송하지만, 잠시 통화 가능하신가요?", English: "Sorry, can you talk for a moment?", Japanese: "すみませんが、少し電話可能ですか？", Chinese: "不好意思，现在方便通话吗？" },
    { Korean: "담당자 연결해 드리겠습니다.", English: "I will connect you to the person in charge.", Japanese: "担当者にお繋ぎします。", Chinese: "我为您转接负责人。" },
    { Korean: "일정 확인해보겠습니다.", English: "I will check the schedule.", Japanese: "スケジュールを確認してみます。", Chinese: "我确认一下日程。" },
    { Korean: "협조해주셔서 감사합니다.", English: "Thank you for your cooperation.", Japanese: "ご協力ありがとうございます。", Chinese: "谢谢您的配合。" },
    { Korean: "마감 기한은 언제인가요?", English: "When is the deadline?", Japanese: "締め切りはいつですか？", Chinese: "截止日期是什么时候？" },
    { Korean: "문제 없습니다.", English: "No problem.", Japanese: "問題ありません。", Chinese: "没问题。" },
    { Korean: "검토 후 연락드리겠습니다.", English: "I will contact you after review.", Japanese: "検討後、ご連絡いたします。", Chinese: "审核后会联系您。" },
    { Korean: "명함 한 장 주시겠습니까?", English: "Could you give me your business card?", Japanese: "名刺を一枚いただけますか？", Chinese: "能给我一张名片吗？" },
    { Korean: "승진 축하드립니다.", English: "Congratulations on your promotion.", Japanese: "昇進おめでとうございます。", Chinese: "恭喜升职。" },
    { Korean: "휴가 잘 다녀오세요.", English: "Have a nice vacation.", Japanese: "休暇楽しんできてください。", Chinese: "假期愉快。" },
    { Korean: "퇴근하겠습니다.", English: "I'm leaving work now.", Japanese: "お先に失礼します。", Chinese: "我先下班了。" },
    { Korean: "내일 뵙겠습니다.", English: "See you tomorrow.", Japanese: "また明日お会いしましょう。", Chinese: "明天见。" },
    { Korean: "양해 부탁드립니다.", English: "I ask for your understanding.", Japanese: "ご了承お願いします。", Chinese: "请多包涵。" },
    { Korean: "최선을 다하겠습니다.", English: "I will do my best.", Japanese: "最善を尽くします。", Chinese: "我会尽全力的。" },
    { Korean: "좋은 결과 기대하겠습니다.", English: "I look forward to good results.", Japanese: "良い結果を期待しています。", Chinese: "期待有好结果。" },
    { Korean: "거래처 미팅이 있습니다.", English: "I have a meeting with a client.", Japanese: "取引先とのミーティングがあります。", Chinese: "有个客户会议。" },
    { Korean: "견적서 보내주세요.", English: "Please send me the quotation.", Japanese: "見積書を送ってください。", Chinese: "请发送报价单。" },
    { Korean: "계약이 성사되었습니다.", English: "The contract has been signed.", Japanese: "契約が成立しました。", Chinese: "合同已签署。" },
    { Korean: "프로젝트 진행 상황 보고해주세요.", English: "Please report the project progress.", Japanese: "プロジェクトの進行状況を報告してください。", Chinese: "请汇报项目进展。" },
    { Korean: "수고하세요.", English: "Keep up the good work. (Formal greeting)", Japanese: "お疲れ様です。", Chinese: "辛苦了。" },
    { Korean: "자료 준비되었습니다.", English: "The materials are ready.", Japanese: "資料の準備ができました。", Chinese: "资料准备好了。" },
    { Korean: "언제 시간 되시나요?", English: "When are you available?", Japanese: "いつお時間よろしいですか？", Chinese: "您什么时候有空？" },
    { Korean: "점심 식사 하셨습니까?", English: "Have you had lunch?", Japanese: "お昼ご飯は食べましたか？", Chinese: "吃午饭了吗？" },
    { Korean: "커피 한 잔 하시겠습니까?", English: "Would you like a cup of coffee?", Japanese: "コーヒー一杯いかがですか？", Chinese: "喝杯咖啡吗？" },
    { Korean: "잠시 자리 비우셨습니다.", English: "He/She is away from the desk for a moment.", Japanese: "ただいま席を外しております。", Chinese: "暂时不在座位上。" },
    { Korean: "메모 남겨드릴까요?", English: "Shall I leave a message?", Japanese: "伝言を残しましょうか？", Chinese: "需要留言吗？" },
    { Korean: "팩스로 보내주세요.", English: "Please send it by fax.", Japanese: "ファックスで送ってください。", Chinese: "请发传真。" },
    { Korean: "프레젠테이션 준비 완료했습니다.", English: "Presentation preparation is complete.", Japanese: "プレゼンテーションの準備が完了しました。", Chinese: "演示准备完毕。" },
    { Korean: "예산안 검토 부탁드립니다.", English: "Please review the budget proposal.", Japanese: "予算案の検討をお願いします。", Chinese: "请审核预算案。" },
    { Korean: "다음 주 일정 잡겠습니다.", English: "I will schedule it for next week.", Japanese: "来週の日程を調整します。", Chinese: "我会安排下周的日程。" },
    { Korean: "출근했습니다.", English: "I have arrived at work.", Japanese: "出勤しました。", Chinese: "我到公司了。" },
    { Korean: "병가 내겠습니다.", English: "I will take a sick leave.", Japanese: "病欠を取らせていただきます。", Chinese: "我要请病假。" },
    { Korean: "연차 쓰겠습니다.", English: "I will use my annual leave.", Japanese: "有給休暇を使います。", Chinese: "我要休年假。" },
    { Korean: "급한 일입니까?", English: "Is it urgent?", Japanese: "急用ですか？", Chinese: "急事吗？" },
    { Korean: "우선순위가 어떻게 되나요?", English: "What is the priority?", Japanese: "優先順位はどうなりますか？", Chinese: "优先级是怎样的？" },
    { Korean: "피드백 부탁드립니다.", English: "Please give me feedback.", Japanese: "フィードバックをお願いします。", Chinese: "请给我反馈。" },
    { Korean: "수정해서 다시 보내겠습니다.", English: "I will revise and resend it.", Japanese: "修正して再送します。", Chinese: "修改后重新发送。" },
    { Korean: "성공적인 프로젝트였습니다.", English: "It was a successful project.", Japanese: "成功したプロジェクトでした。", Chinese: "项目很成功。" },
    { Korean: "함께 일해서 즐거웠습니다.", English: "It was a pleasure working with you.", Japanese: "一緒にお仕事できて楽しかったです。", Chinese: "很高兴与您合作。" },
    { Korean: "앞으로도 잘 부탁드립니다.", English: "I look forward to working with you.", Japanese: "今後ともよろしくお願いいたします。", Chinese: "以后也请多关照。" }
];

// 3. [Beginner] Top 100 Essential Verbs (100 verbs, no examples)
const verbs_100 = [
    { Korean: "가다", English: "to go", Japanese: "行く", Chinese: "去" },
    { Korean: "오다", English: "to come", Japanese: "来る", Chinese: "来" },
    { Korean: "먹다", English: "to eat", Japanese: "食べる", Chinese: "吃" },
    { Korean: "마시다", English: "to drink", Japanese: "飲む", Chinese: "喝" },
    { Korean: "보다", English: "to see/watch", Japanese: "見る", Chinese: "看" },
    { Korean: "듣다", English: "to hear/listen", Japanese: "聞く", Chinese: "听" },
    { Korean: "말하다", English: "to speak", Japanese: "話す", Chinese: "说" },
    { Korean: "하다", English: "to do", Japanese: "する", Chinese: "做" },
    { Korean: "자다", English: "to sleep", Japanese: "寝る", Chinese: "睡" },
    { Korean: "일어나다", English: "to wake up", Japanese: "起きる", Chinese: "起床" },
    { Korean: "사다", English: "to buy", Japanese: "買う", Chinese: "买" },
    { Korean: "팔다", English: "to sell", Japanese: "売る", Chinese: "卖" },
    { Korean: "주다", English: "to give", Japanese: "あげる", Chinese: "给" },
    { Korean: "받다", English: "to receive", Japanese: "もらう", Chinese: "收" },
    { Korean: "읽다", English: "to read", Japanese: "読む", Chinese: "读" },
    { Korean: "쓰다", English: "to write/use", Japanese: "書く/使う", Chinese: "写/用" },
    { Korean: "배우다", English: "to learn", Japanese: "学ぶ", Chinese: "学" },
    { Korean: "가르치다", English: "to teach", Japanese: "教える", Chinese: "教" },
    { Korean: "일하다", English: "to work", Japanese: "働く", Chinese: "工作" },
    { Korean: "쉬다", English: "to rest", Japanese: "休む", Chinese: "休息" },
    { Korean: "놀다", English: "to play", Japanese: "遊ぶ", Chinese: "玩" },
    { Korean: "만나다", English: "to meet", Japanese: "会う", Chinese: "见面" },
    { Korean: "헤어지다", English: "to break up", Japanese: "別れる", Chinese: "分手" },
    { Korean: "웃다", English: "to laugh", Japanese: "笑う", Chinese: "笑" },
    { Korean: "울다", English: "to cry", Japanese: "泣く", Chinese: "哭" },
    { Korean: "사랑하다", English: "to love", Japanese: "愛する", Chinese: "爱" },
    { Korean: "좋아하다", English: "to like", Japanese: "好きだ", Chinese: "喜欢" },
    { Korean: "싫어하다", English: "to dislike/hate", Japanese: "嫌いだ", Chinese: "讨厌" },
    { Korean: "살다", English: "to live", Japanese: "住む/生きる", Chinese: "生活" },
    { Korean: "죽다", English: "to die", Japanese: "死ぬ", Chinese: "死" },
    { Korean: "열다", English: "to open", Japanese: "開ける", Chinese: "开" },
    { Korean: "닫다", English: "to close", Japanese: "閉める", Chinese: "关" },
    { Korean: "입다", English: "to wear", Japanese: "着る", Chinese: "穿" },
    { Korean: "벗다", English: "to take off", Japanese: "脱ぐ", Chinese: "脱" },
    { Korean: "신다", English: "to wear (shoes/socks)", Japanese: "履く", Chinese: "穿（鞋袜）" },
    { Korean: "타다", English: "to ride", Japanese: "乗る", Chinese: "坐/乘" },
    { Korean: "내리다", English: "to get off", Japanese: "降りる", Chinese: "下车" },
    { Korean: "걷다", English: "to walk", Japanese: "歩く", Chinese: "走" },
    { Korean: "뛰다", English: "to run", Japanese: "走る", Chinese: "跑" },
    { Korean: "앉다", English: "to sit", Japanese: "座る", Chinese: "坐" },
    { Korean: "서다", English: "to stand", Japanese: "立つ", Chinese: "站" },
    { Korean: "알다", English: "to know", Japanese: "知る", Chinese: "知道" },
    { Korean: "모르다", English: "to not know", Japanese: "知らない", Chinese: "不知道" },
    { Korean: "생각하다", English: "to think", Japanese: "考える", Chinese: "想" },
    { Korean: "기억하다", English: "to remember", Japanese: "覚える", Chinese: "记得" },
    { Korean: "잊다", English: "to forget", Japanese: "忘れる", Chinese: "忘记" },
    { Korean: "느끼다", English: "to feel", Japanese: "感じる", Chinese: "感觉" },
    { Korean: "보내다", English: "to send", Japanese: "送る", Chinese: "发送" },
    { Korean: "빌리다", English: "to borrow", Japanese: "借りる", Chinese: "借" },
    { Korean: "돌려주다", English: "to return", Japanese: "返す", Chinese: "还" },
    { Korean: "돕다", English: "to help", Japanese: "助ける", Chinese: "帮助" },
    { Korean: "필요하다", English: "to need", Japanese: "必要だ", Chinese: "需要" },
    { Korean: "찾다", English: "to find/look for", Japanese: "探す", Chinese: "找" },
    { Korean: "잃어버리다", English: "to lose", Japanese: "失くす", Chinese: "丢失" },
    { Korean: "시작하다", English: "to start", Japanese: "始める", Chinese: "开始" },
    { Korean: "끝나다", English: "to end", Japanese: "終わる", Chinese: "结束" },
    { Korean: "기다리다", English: "to wait", Japanese: "待つ", Chinese: "等" },
    { Korean: "준비하다", English: "to prepare", Japanese: "準備する", Chinese: "准备" },
    { Korean: "약속하다", English: "to promise", Japanese: "約束する", Chinese: "约定" },
    { Korean: "거짓말하다", English: "to lie", Japanese: "嘘をつく", Chinese: "撒谎" },
    { Korean: "고백하다", English: "to confess", Japanese: "告白する", Chinese: "告白" },
    { Korean: "결혼하다", English: "to marry", Japanese: "結婚する", Chinese: "结婚" },
    { Korean: "이혼하다", English: "to divorce", Japanese: "離婚する", Chinese: "离婚" },
    { Korean: "태어나다", English: "to be born", Japanese: "生まれる", Chinese: "出生" },
    { Korean: "자라다", English: "to grow up", Japanese: "育つ", Chinese: "长大" },
    { Korean: "이기다", English: "to win", Japanese: "勝つ", Chinese: "赢" },
    { Korean: "지다", English: "to lose (game)", Japanese: "負ける", Chinese: "输" },
    { Korean: "싸우다", English: "to fight", Japanese: "喧嘩する", Chinese: "吵架/打架" },
    { Korean: "화내다", English: "to get angry", Japanese: "怒る", Chinese: "生气" },
    { Korean: "용서하다", English: "to forgive", Japanese: "許す", Chinese: "原谅" },
    { Korean: "사과하다", English: "to apologize", Japanese: "謝る", Chinese: "道歉" },
    { Korean: "감사하다", English: "to thank", Japanese: "感謝する", Chinese: "感谢" },
    { Korean: "축하하다", English: "to congratulate", Japanese: "祝う", Chinese: "祝贺" },
    { Korean: "노래하다", English: "to sing", Japanese: "歌う", Chinese: "唱歌" },
    { Korean: "춤추다", English: "to dance", Japanese: "踊る", Chinese: "跳舞" },
    { Korean: "그리다", English: "to draw", Japanese: "描く", Chinese: "画" },
    { Korean: "만들다", English: "to make", Japanese: "作る", Chinese: "做/制作" },
    { Korean: "고치다", English: "to fix", Japanese: "直す", Chinese: "修理" },
    { Korean: "청소하다", English: "to clean", Japanese: "掃除する", Chinese: "打扫" },
    { Korean: "요리하다", English: "to cook", Japanese: "料理する", Chinese: "做饭" },
    { Korean: "빨래하다", English: "to do laundry", Japanese: "洗濯する", Chinese: "洗衣服" },
    { Korean: "운전하다", English: "to drive", Japanese: "運転する", Chinese: "开车" },
    { Korean: "여행하다", English: "to travel", Japanese: "旅行する", Chinese: "旅行" },
    { Korean: "운동하다", English: "to exercise", Japanese: "運動する", Chinese: "运动" },
    { Korean: "공부하다", English: "to study", Japanese: "勉強する", Chinese: "学习" },
    { Korean: "일하다", English: "to work", Japanese: "働く", Chinese: "工作" },
    { Korean: "쉬다", English: "to rest", Japanese: "休む", Chinese: "休息" },
    { Korean: "잠자다", English: "to sleep", Japanese: "眠る", Chinese: "睡觉" },
    { Korean: "꿈꾸다", English: "to dream", Japanese: "夢を見る", Chinese: "做梦" },
    { Korean: "믿다", English: "to believe", Japanese: "信じる", Chinese: "相信" },
    { Korean: "바라다", English: "to hope/wish", Japanese: "願う", Chinese: "希望" },
    { Korean: "걱정하다", English: "to worry", Japanese: "心配する", Chinese: "担心" },
    { Korean: "기뻐하다", English: "to rejoice", Japanese: "喜ぶ", Chinese: "高兴" },
    { Korean: "슬퍼하다", English: "to be sad", Japanese: "悲しむ", Chinese: "伤心" },
    { Korean: "놀라다", English: "to be surprised", Japanese: "驚く", Chinese: "惊讶" },
    { Korean: "무서워하다", English: "to be afraid", Japanese: "怖がる", Chinese: "害怕" },
    { Korean: "부러워하다", English: "to envy", Japanese: "羨ましがる", Chinese: "羡慕" },
    { Korean: "질투하다", English: "to be jealous", Japanese: "嫉妬する", Chinese: "嫉妒" },
    { Korean: "존경하다", English: "to respect", Japanese: "尊敬する", Chinese: "尊敬" },
    { Korean: "무시하다", English: "to ignore", Japanese: "無視する", Chinese: "无视" }
];

// 4. [Travel] Survival Travel Korean (20 sentences)
const travel_korean = [
    { Korean: "여권 보여주세요.", English: "Please show me your passport.", Japanese: "パスポートを見せてください。", Chinese: "请出示护照。" },
    { Korean: "체크인 부탁합니다.", English: "Check-in, please.", Japanese: "チェックインをお願いします。", Chinese: "请办理入住。" },
    { Korean: "예약했습니다.", English: "I made a reservation.", Japanese: "予約しました。", Chinese: "我预订了。" },
    { Korean: "방이 추워요.", English: "The room is cold.", Japanese: "部屋が寒いです。", Chinese: "房间很冷。" },
    { Korean: "와이파이 비밀번호가 뭐예요?", English: "What is the Wi-Fi password?", Japanese: "Wi-Fiのパスワードは何ですか？", Chinese: "Wi-Fi密码是多少？" },
    { Korean: "여기 맛집 추천해주세요.", English: "Can you recommend a good restaurant?", Japanese: "この近くの美味しいお店を教えてください。", Chinese: "请推荐这里的好吃的地方。" },
    { Korean: "메뉴판 주세요.", English: "Menu please.", Japanese: "メニューをください。", Chinese: "请给我菜单。" },
    { Korean: "물 좀 주세요.", English: "Water please.", Japanese: "お水をください。", Chinese: "请给我水。" },
    { Korean: "계산서 주세요.", English: "Bill please.", Japanese: "お会計をお願いします。", Chinese: "请结账。" },
    { Korean: "여기서 제일 인기 있는 게 뭐예요?", English: "What is the most popular dish here?", Japanese: "ここで一番人気は何ですか？", Chinese: "这里最受欢迎的是什么？" },
    { Korean: "덜 맵게 해주세요.", English: "Make it less spicy please.", Japanese: "辛くしないでください。", Chinese: "请少放点辣。" },
    { Korean: "이거 환불 되나요?", English: "Can I get a refund for this?", Japanese: "これは払い戻しできますか？", Chinese: "这个可以退款吗？" },
    { Korean: "깎아주세요.", English: "Please give me a discount.", Japanese: "安くしてください。", Chinese: "请便宜一点。" },
    { Korean: "입어봐도 되나요?", English: "Can I try this on?", Japanese: "試着してもいいですか？", Chinese: "可以试穿吗？" },
    { Korean: "지하철 역이 어디예요?", English: "Where is the subway station?", Japanese: "地下鉄の駅はどこですか？", Chinese: "地铁站在哪里？" },
    { Korean: "택시 불러주세요.", English: "Please call a taxi.", Japanese: "タクシーを呼んでください。", Chinese: "请叫一辆出租车。" },
    { Korean: "서울역으로 가주세요.", English: "To Seoul Station, please.", Japanese: "ソウル駅へ行ってください。", Chinese: "请去首尔站。" },
    { Korean: "얼마나 걸려요?", English: "How long does it take?", Japanese: "どのくらいかかりますか？", Chinese: "需要多久？" },
    { Korean: "사진 좀 찍어주실래요?", English: "Could you take a picture for us?", Japanese: "写真を撮っていただけますか？", Chinese: "能帮我拍张照吗？" },
    { Korean: "길을 잃었어요.", English: "I'm lost.", Japanese: "道に迷いました。", Chinese: "我迷路了。" }
];

function createExcel(data, baseFilename) {
    // 1. Original (Korean - English)
    const dataEn = data.map(item => ({ Korean: item.Korean, English: item.English }));
    const wsEn = xlsx.utils.json_to_sheet(dataEn);
    const wbEn = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wbEn, wsEn, "Sheet1");
    // Remove .xlsx extension if provided in baseFilename to avoid duplication
    const cleanFilename = baseFilename.replace('.xlsx', '');
    xlsx.writeFile(wbEn, `../assets/files/samples/${cleanFilename}.xlsx`);
    console.log(`Created ${cleanFilename}.xlsx`);

    // 2. Japanese (Korean - Japanese)
    const dataJa = data.map(item => ({ Korean: item.Korean, Japanese: item.Japanese }));
    const wsJa = xlsx.utils.json_to_sheet(dataJa);
    const wbJa = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wbJa, wsJa, "Sheet1");
    xlsx.writeFile(wbJa, `../assets/files/samples/${cleanFilename}_ja.xlsx`);
    console.log(`Created ${cleanFilename}_ja.xlsx`);

    // 3. Chinese (Korean - Chinese)
    const dataZh = data.map(item => ({ Korean: item.Korean, Chinese: item.Chinese }));
    const wsZh = xlsx.utils.json_to_sheet(dataZh);
    const wbZh = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wbZh, wsZh, "Sheet1");
    xlsx.writeFile(wbZh, `../assets/files/samples/${cleanFilename}_zh.xlsx`);
    console.log(`Created ${cleanFilename}_zh.xlsx`);
}

createExcel(basic_korean, "basic_korean");
createExcel(business_korean, "business_korean");
createExcel(verbs_100, "korean_verbs_100");
createExcel(travel_korean, "travel_korean");
