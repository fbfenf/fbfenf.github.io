---
layout: default
title: AI 설정
description: iScript의 AI 해설을 쓰는 방법입니다. 지원하는 iPhone에서는 설정할 것이 없고, 그 밖의 기기에서는 Gemini 키로 문장 해설을 쓸 수 있습니다.
permalink: /api/
locale: ko_KR
page_id: api
---

> 듣기, 연습, 복습, 단어장은 AI 없이 됩니다. 내장 대본에는 해설이 미리 들어 있는 것도 있습니다.

## AI로 할 수 있는 것

- 문장 해설 (단어, 문법, 쓰이는 상황)
- 비슷한 예문 만들기, 존댓말·반말로 바꿔 보기
- 문장에 대해 질문하기
- 대본의 상황으로 AI와 대화하고 교정 받기
- 가져온 대본의 번역 채우기

## 쓰는 방법은 두 가지입니다

| | iPhone의 AI | Gemini 키 |
| :-- | :-- | :-- |
| 준비할 것 | 없음 | 키를 받아 넣기 |
| 문장 해설 | 됨 | 됨 |
| Gemini 음성으로 듣기 | - | 됨 |
| 예문, 말투 바꾸기, 질문 | 됨 | 안 됨 |
| AI와 대화 | 됨 | 안 됨 |

### iPhone의 AI

Apple Intelligence를 지원하는 iPhone(iOS 27 이상)에서, iPhone 설정의 Apple Intelligence가 켜져 있으면 됩니다. 앱에서 설정할 것도, 키도 없습니다.

하루에 쓸 수 있는 양은 Apple이 정합니다. 다 쓰면 앱이 다시 쓸 수 있는 시각을 알려 줍니다.

### Gemini 키

그 밖의 iPhone에서 가져온 대본의 문장 해설을 보고 싶을 때 연결합니다. 선택 사항입니다.

## Gemini 키 받기 (선택)

1. [Google AI Studio](https://aistudio.google.com/app/apikey)에 Google 계정으로 들어갑니다.
2. **Create API key**를 눌러 키를 만듭니다.
3. 만들어진 키를 복사합니다.
4. iScript의 **설정** → **Gemini 키**에 붙여 넣고 저장합니다.

키는 이 iPhone의 키체인에만 보관됩니다. 백업 파일이나 문의 메일에 들어가지 않고, 운영자에게도 오지 않습니다. 키를 지우면 Google로 보내는 일도 멈춥니다.

## 자주 묻는 질문

### Gemini 키는 무료인가요?

Google AI Studio에는 무료로 쓸 수 있는 등급이 있습니다. 한도와 요금은 Google의 정책을 따르니, 키를 만들 때 Google의 안내를 확인해 주세요.

### 키를 넣었는데 해설이 나오지 않아요.

복사할 때 앞뒤에 빈칸이 들어가지 않았는지 확인하고, 안 되면 키를 새로 만들어 넣어 보세요. 설정의 Gemini 키에 “연결됨”이 보이면 정상입니다.

### 문장이 어디로 전송되나요?

iPhone의 AI를 쓰면 Apple의 서버 모델로, Gemini 키를 쓰면 Google로 그 문장이 전송됩니다. 자세한 내용은 [개인정보처리방침](/privacy/)에 있습니다.
