const xlsx = require('xlsx');

// 1. [Basic] Daily Life Expressions
const basic_korean = [
    { Korean: "안녕하세요!", English: "Hello!" },
    { Korean: "반가워요.", English: "Nice to meet you." },
    { Korean: "감사합니다.", English: "Thank you." },
    { Korean: "죄송합니다.", English: "I'm sorry." },
    { Korean: "얼마예요?", English: "How much is this?" },
    { Korean: "맛있어요.", English: "It's delicious." },
    { Korean: "사랑해요.", English: "I love you." },
    { Korean: "잠시만요.", English: "Just a moment." },
    { Korean: "화이팅!", English: "Cheer up! / Good luck!" },
    { Korean: "안녕히 가세요.", English: "Goodbye. (to someone leaving)" },
    { Korean: "안녕히 계세요.", English: "Goodbye. (to someone staying)" },
    { Korean: "잘 자요.", English: "Good night." },
    { Korean: "배가 고파요.", English: "I'm hungry." },
    { Korean: "어디예요?", English: "Where are you?" },
    { Korean: "화장실 어디예요?", English: "Where is the bathroom?" },
    { Korean: "도와주세요.", English: "Help me." },
    { Korean: "괜찮아요.", English: "I'm okay." },
    { Korean: "축하해요!", English: "Congratulations!" },
    { Korean: "생일 축하해요.", English: "Happy birthday." },
    { Korean: "이름이 뭐예요?", English: "What is your name?" },
    { Korean: "제 이름은 ...입니다.", English: "My name is ..." },
    { Korean: "한국 사람이에요?", English: "Are you Korean?" },
    { Korean: "영어 할 수 있어요?", English: "Can you speak English?" },
    { Korean: "좋아요.", English: "I like it. / Good." },
    { Korean: "싫어요.", English: "I don't like it." },
    { Korean: "진짜요?", English: "Really?" },
    { Korean: "몰라요.", English: "I don't know." },
    { Korean: "알아요.", English: "I know." },
    { Korean: "천만에요.", English: "You're welcome." },
    { Korean: "다음에 봐요.", English: "See you next time." }
];

// 2. [Intermediate] Office Business Talk
const business_korean = [
    { Korean: "안녕하십니까.", English: "Greetings (Formal)." },
    { Korean: "수고하셨습니다.", English: "Good job today. / Thank you for your effort." },
    { Korean: "회의 시작하겠습니다.", English: "Let's start the meeting." },
    { Korean: "의견 있으신가요?", English: "Do you have any opinions?" },
    { Korean: "결재 부탁드립니다.", English: "Please approve this." },
    { Korean: "보고서 제출했습니다.", English: "I submitted the report." },
    { Korean: "이메일 확인 부탁드립니다.", English: "Please check your email." },
    { Korean: "오늘 회식 있나요?", English: "Do we have a team dinner today?" },
    { Korean: "야근해야 할 것 같습니다.", English: "I think I have to work overtime." },
    { Korean: "출장 다녀오겠습니다.", English: "I will go on a business trip." },
    { Korean: "죄송하지만, 잠시 통화 가능하신가요?", English: "Sorry, can you talk for a moment?" },
    { Korean: "담당자 연결해 드리겠습니다.", English: "I will connect you to the person in charge." },
    { Korean: "일정 확인해보겠습니다.", English: "I will check the schedule." },
    { Korean: "협조해주셔서 감사합니다.", English: "Thank you for your cooperation." },
    { Korean: "마감 기한은 언제인가요?", English: "When is the deadline?" },
    { Korean: "문제 없습니다.", English: "No problem." },
    { Korean: "검토 후 연락드리겠습니다.", English: "I will contact you after review." },
    { Korean: "명함 한 장 주시겠습니까?", English: "Could you give me your business card?" },
    { Korean: "승진 축하드립니다.", English: "Congratulations on your promotion." },
    { Korean: "휴가 잘 다녀오세요.", English: "Have a nice vacation." },
    { Korean: "퇴근하겠습니다.", English: "I'm leaving work now." },
    { Korean: "내일 뵙겠습니다.", English: "See you tomorrow." },
    { Korean: "양해 부탁드립니다.", English: "I ask for your understanding." },
    { Korean: "최선을 다하겠습니다.", English: "I will do my best." },
    { Korean: "좋은 결과 기대하겠습니다.", English: "I look forward to good results." },
    { Korean: "거래처 미팅이 있습니다.", English: "I have a meeting with a client." },
    { Korean: "견적서 보내주세요.", English: "Please send me the quotation." },
    { Korean: "계약이 성사되었습니다.", English: "The contract has been signed." },
    { Korean: "프로젝트 진행 상황 보고해주세요.", English: "Please report the project progress." },
    { Korean: "수고하세요.", English: "Keep up the good work. (Formal greeting)" }
];

// 3. [Beginner] Top 100 Essential Verbs (Sample 30)
const verbs_100 = [
    { Korean: "가다", English: "to go" },
    { Korean: "오다", English: "to come" },
    { Korean: "먹다", English: "to eat" },
    { Korean: "마시다", English: "to drink" },
    { Korean: "보다", English: "to see/watch" },
    { Korean: "듣다", English: "to hear/listen" },
    { Korean: "말하다", English: "to speak" },
    { Korean: "하다", English: "to do" },
    { Korean: "자다", English: "to sleep" },
    { Korean: "일어나다", English: "to wake up" },
    { Korean: "사다", English: "to buy" },
    { Korean: "팔다", English: "to sell" },
    { Korean: "주다", English: "to give" },
    { Korean: "받다", English: "to receive" },
    { Korean: "읽다", English: "to read" },
    { Korean: "쓰다", English: "to write/use" },
    { Korean: "배우다", English: "to learn" },
    { Korean: "가르치다", English: "to teach" },
    { Korean: "일하다", English: "to work" },
    { Korean: "쉬다", English: "to rest" },
    { Korean: "놀다", English: "to play" },
    { Korean: "만나다", English: "to meet" },
    { Korean: "헤어지다", English: "to break up" },
    { Korean: "웃다", English: "to laugh" },
    { Korean: "울다", English: "to cry" },
    { Korean: "사랑하다", English: "to love" },
    { Korean: "좋아하다", English: "to like" },
    { Korean: "싫어하다", English: "to dislike/hate" },
    { Korean: "살다", English: "to live" },
    { Korean: "죽다", English: "to die" }
];

// 4. [Travel] Survival Travel Korean
const travel_korean = [
    { Korean: "여권 보여주세요.", English: "Please show me your passport." },
    { Korean: "체크인 부탁합니다.", English: "Check-in, please." },
    { Korean: "예약했습니다.", English: "I made a reservation." },
    { Korean: "방이 추워요.", English: "The room is cold." },
    { Korean: "와이파이 비밀번호가 뭐예요?", English: "What is the Wi-Fi password?" },
    { Korean: "여기 맛집 추천해주세요.", English: "Global restaurant recommendation please." },
    { Korean: "메뉴판 주세요.", English: "Menu please." },
    { Korean: "물 좀 주세요.", English: "Water please." },
    { Korean: "계산서 주세요.", English: "Bill please." },
    { Korean: "여기서 제일 인기 있는 게 뭐예요?", English: "What is the most popular dish here?" },
    { Korean: "덜 맵게 해주세요.", English: "Make it less spicy please." },
    { Korean: "이거 환불 되나요?", English: "Can I get a refund for this?" },
    { Korean: "깎아주세요.", English: "Please give me a discount." },
    { Korean: "입어봐도 되나요?", English: "Can I try this on?" },
    { Korean: "지하철 역이 어디예요?", English: "Where is the subway station?" },
    { Korean: "택시 불러주세요.", English: "Please call a taxi." },
    { Korean: "서울역으로 가주세요.", English: "To Seoul Station, please." },
    { Korean: "얼마나 걸려요?", English: "How long does it take?" },
    { Korean: "사진 좀 찍어주실래요?", English: "Could you take a picture for us?" },
    { Korean: "길을 잃었어요.", English: "I'm lost." }
];

function createExcel(data, filename) {
    const ws = xlsx.utils.json_to_sheet(data);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    // Ensure the output file is written to the assets/files/samples directory
    xlsx.writeFile(wb, `../assets/files/samples/${filename}`);
    console.log(`Created ${filename}`);
}

createExcel(basic_korean, "basic_korean.xlsx");
createExcel(business_korean, "business_korean.xlsx");
createExcel(verbs_100, "korean_verbs_100.xlsx");
createExcel(travel_korean, "travel_korean.xlsx");
