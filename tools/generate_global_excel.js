const xlsx = require('xlsx');
// Last updated: 2026-02-09 (English patterns updated to full sentences)

// 1. [English] Native Patterns (30 sentences)
const english_pattern = [
    { English: "I'm gonna grab some coffee.", Korean: "나 커피 좀 사러 갈 거야." },
    { English: "I didn't mean to hurt your feelings.", Korean: "네 기분을 상하게 하려던 건 아니었어." },
    { English: "Are you sure you want to quit?", Korean: "정말 그만두고 싶은 거 맞아?" },
    { English: "I'm here to see Mr. Kim.", Korean: "김 선생님을 뵈러 왔습니다." },
    { English: "It looks like it's going to rain.", Korean: "비가 올 것 같아." },
    { English: "How about we go out for dinner?", Korean: "우리 저녁 먹으러 나가는 거 어때?" },
    { English: "Why don't you take a break?", Korean: "좀 쉬는 게 어때?" },
    { English: "I used to play the piano.", Korean: "예전엔 피아노를 치곤 했어." },
    { English: "I'd like to make a reservation.", Korean: "예약을 하고 싶은데요." },
    { English: "Do you mind if I sit here?", Korean: "여기 앉아도 될까요?" },
    { English: "What if I fail the test?", Korean: "시험에 떨어지면 어떡해?" },
    { English: "It's time to say goodbye.", Korean: "이제 헤어질 시간이야." },
    { English: "There is no need to worry.", Korean: "걱정할 필요 없어." },
    { English: "Make sure to lock the door.", Korean: "문 꼭 잠그도록 해." },
    { English: "I'm looking forward to the party.", Korean: "파티가 정말 기대돼." },
    { English: "Can I get a glass of water?", Korean: "물 한 잔 주시겠어요?" },
    { English: "It takes about an hour to get there.", Korean: "거기까지 가는 데 한 시간 정도 걸려." },
    { English: "That's why I was late.", Korean: "그래서 늦은 거야." },
    { English: "I have no idea what you're talking about.", Korean: "무슨 말을 하는지 전혀 모르겠어." },
    { English: "Let me check my schedule.", Korean: "내 일정 좀 확인해볼게." },
    { English: "I feel like having pizza today.", Korean: "오늘 피자 먹고 싶은 기분이야." },
    { English: "I'm afraid I can't help you.", Korean: "유감스럽지만 널 도와줄 수 없을 것 같아." },
    { English: "You'd better see a doctor.", Korean: "병원에 가보는 게 좋을 거야." },
    { English: "It's hard to believe.", Korean: "믿기 힘들어." },
    { English: "Is it okay to use this phone?", Korean: "이 전화기 써도 괜찮아?" },
    { English: "Thank you for inviting me.", Korean: "초대해줘서 고마워." },
    { English: "I'm thinking of moving to Seoul.", Korean: "서울로 이사 갈까 생각 중이야." },
    { English: "What makes you think so?", Korean: "왜 그렇게 생각하는 거야?" },
    { English: "I didn't see that coming.", Korean: "그건 정말 예상 못 했어." },
    { English: "Long time no see.", Korean: "오랜만이야." }
];

// 2. [Japanese] Travel & Culture (30 sentences)
const japanese_travel = [
    { Japanese: "これ、免税になりますか？", Korean: "이거 면세 되나요?" },
    { Japanese: "おすすめのメニューは何ですか？", Korean: "추천 메뉴는 무엇인가요?" },
    { Japanese: "トイレはどこですか？", Korean: "화장실은 어디인가요?" },
    { Japanese: "お会計お願いします。", Korean: "계산해 주세요." },
    { Japanese: "写真を撮ってもらえますか？", Korean: "사진 좀 찍어주시겠어요?" },
    { Japanese: "日本語はあまり話せません。", Korean: "일본어를 잘 못해요." },
    { Japanese: "英語のメニューはありますか？", Korean: "영어 메뉴판 있나요?" },
    { Japanese: "これをください。", Korean: "이거 주세요." },
    { Japanese: "いくらですか？", Korean: "얼마인가요?" },
    { Japanese: "カードで払えますか？", Korean: "카드로 결제 되나요?" },
    { Japanese: "駅はどこですか？", Korean: "역은 어디인가요?" },
    { Japanese: "このバスは空港に行きますか？", Korean: "이 버스는 공항에 가나요?" },
    { Japanese: "地図を書いてもらえますか？", Korean: "지도를 그려주실 수 있나요?" },
    { Japanese: "試着してもいいですか？", Korean: "입어봐도 되나요?" },
    { Japanese: "少し安くしてもらえますか？", Korean: "조금 깎아주실 수 있나요?" },
    { Japanese: "持ち帰りでお願いします。", Korean: "포장해 주세요 (테이크아웃)." },
    { Japanese: "水をお願いします。", Korean: "물 좀 주세요." },
    { Japanese: "予約しています。", Korean: "예약했습니다." },
    { Japanese: "荷物を預かってもらえますか？", Korean: "짐을 맡아주실 수 있나요?" },
    { Japanese: "いつ出発しますか？", Korean: "언제 출발하나요?" },
    { Japanese: "本当にありがとうございます。", Korean: "정말 감사합니다." },
    { Japanese: "すみません、質問があります。", Korean: "실례합니다, 질문이 있어요." },
    { Japanese: "大丈夫です。", Korean: "괜찮아요." },
    { Japanese: "助けてください！", Korean: "도와주세요!" },
    { Japanese: "ゆっくり話してください。", Korean: "천천히 말해주세요." },
    { Japanese: "もう一度言ってください。", Korean: "다시 한 번 말해주세요." },
    { Japanese: "Wi-Fiのパスワードは何ですか？", Korean: "와이파이 비밀번호가 뭔가요?" },
    { Japanese: "充電してもいいですか？", Korean: "충전해도 될까요?" },
    { Japanese: "なるほど、そういうことか。", Korean: "과연, 그런 거였군. (리액션)" },
    { Japanese: "やっぱり！", Korean: "역시! (리액션)" }
];

// 3. [Chinese] Basic Expressions (30 sentences)
const chinese_basic = [
    { Chinese: "你好。", Korean: "안녕하세요." },
    { Chinese: "谢谢。", Korean: "감사합니다." },
    { Chinese: "对不起。", Korean: "죄송합니다." },
    { Chinese: "没关系。", Korean: "괜찮습니다." },
    { Chinese: "再见。", Korean: "안녕히 가세요 / 또 만나요." },
    { Chinese: "太贵了，便宜一点吧。", Korean: "너무 비싸요, 좀 깎아주세요." },
    { Chinese: "多少钱？", Korean: "얼마예요?" },
    { Chinese: "我要这个。", Korean: "이거 주세요." },
    { Chinese: "听不懂。", Korean: "못 알아듣겠어요." },
    { Chinese: "请慢点说。", Korean: "천천히 말해주세요." },
    { Chinese: "洗手间在哪里？", Korean: "화장실이 어디예요?" },
    { Chinese: "服务员，点菜。", Korean: "저기요(종업원), 주문할게요." },
    { Chinese: "我要买单。", Korean: "계산할게요." },
    { Chinese: "不仅...而且...", Korean: "~뿐만 아니라 ...도 하다." },
    { Chinese: "虽然...但是...", Korean: "비록 ~하지만 ...하다." },
    { Chinese: "因为...所以...", Korean: "왜냐하면 ~하기 때문에 ...하다." },
    { Chinese: "如果您方便的话...", Korean: "당신이 편하시다면..." },
    { Chinese: "好久不见。", Korean: "오랜만이에요." },
    { Chinese: "您贵姓？", Korean: "성함이 어떻게 되세요? (정중)" },
    { Chinese: "我叫...", Korean: "제 이름은 ...입니다." },
    { Chinese: "我是韩国人。", Korean: "저는 한국인입니다." },
    { Chinese: "你会说英语吗？", Korean: "영어 할 줄 아세요?" },
    { Chinese: "请问...", Korean: "말씀 좀 여쭙겠습니다..." },
    { Chinese: "不要辣。", Korean: "맵지 않게 해주세요." },
    { Chinese: "非常好！", Korean: "아주 좋아요!" },
    { Chinese: "我想去...", Korean: "저는 ...에 가고 싶어요." },
    { Chinese: "现在几点？", Korean: "지금 몇 시예요?" },
    { Chinese: "你要去哪儿？", Korean: "어디 가세요?" },
    { Chinese: "我也一样。", Korean: "저도 같아요." },
    { Chinese: "加油！", Korean: "화이팅! (힘내요!)" }
];

function createExcel(data, foreignKey, filename) {
    // Rename keys to match expected format (Column A: Target Lang, Column B: Native Lang)
    const formattedData = data.map(item => {
        return {
            [foreignKey]: item[foreignKey], // Column A
            "Korean": item.Korean           // Column B
        };
    });

    const ws = xlsx.utils.json_to_sheet(formattedData);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    // Ensure the output file is written to the assets/files/samples directory
    xlsx.writeFile(wb, `../assets/files/samples/${filename}`);
    console.log(`Created ${filename}`);
}

createExcel(english_pattern, "English", "english_pattern.xlsx");
createExcel(japanese_travel, "Japanese", "japanese_travel.xlsx");
createExcel(chinese_basic, "Chinese", "chinese_basic.xlsx");
