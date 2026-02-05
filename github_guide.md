---
layout: default
title: GitHub 초심자 가이드
---

# 🚀 GitHub 초심자 가이드

GitHub를 처음 사용하는 분들을 위한 쉽고 친절한 가이드입니다.

---

## 📚 목차

1. [GitHub란 무엇인가요?](#github란-무엇인가요)
2. [Git과 GitHub의 차이](#git과-github의-차이)
3. [기본 개념 이해하기](#기본-개념-이해하기)
4. [GitHub 시작하기](#github-시작하기)
5. [기본 작업 흐름](#기본-작업-흐름)
6. [자주 사용하는 Git 명령어](#자주-사용하는-git-명령어)
7. [자주 묻는 질문 (FAQ)](#자주-묻는-질문-faq)

---

## GitHub란 무엇인가요?

**GitHub**는 코드를 저장하고 관리할 수 있는 온라인 플랫폼입니다. 마치 구글 드라이브가 문서를 저장하는 것처럼, GitHub는 코드를 저장합니다.

### 🎯 GitHub를 사용하는 이유

- **버전 관리**: 코드의 변경 이력을 모두 기록하고 추적할 수 있어요
- **협업**: 여러 사람이 동시에 같은 프로젝트를 작업할 수 있어요
- **백업**: 코드를 안전하게 클라우드에 저장할 수 있어요
- **포트폴리오**: 자신의 프로젝트를 공개하고 공유할 수 있어요

---

## Git과 GitHub의 차이

| Git | GitHub |
|-----|--------|
| 버전 관리 **시스템** (소프트웨어) | Git을 사용하는 **웹 서비스** |
| 내 컴퓨터에서 실행됨 | 인터넷 상의 서버에 있음 |
| 로컬에서 버전 관리 | 온라인 저장소 + 협업 도구 |

**쉽게 설명하면**: Git은 "도구"이고, GitHub는 그 도구를 사용하는 "온라인 저장소 서비스"입니다.

---

## 기본 개념 이해하기

### 🗂️ Repository (저장소)
프로젝트의 모든 파일과 변경 이력이 저장되는 공간입니다. 하나의 폴더라고 생각하면 쉬워요.

### 📝 Commit (커밋)
변경사항을 저장하는 단위입니다. 게임의 "저장하기"와 비슷해요.

### 🌿 Branch (브랜치)
코드의 독립적인 작업 라인입니다. 메인 코드를 건드리지 않고 새로운 기능을 개발할 수 있어요.

### 🔄 Push (푸시)
로컬(내 컴퓨터)의 변경사항을 원격 저장소(GitHub)에 업로드하는 것입니다.

### ⬇️ Pull (풀)
원격 저장소(GitHub)의 최신 변경사항을 로컬로 다운로드하는 것입니다.

### 🔀 Merge (병합)
서로 다른 브랜치의 변경사항을 하나로 합치는 것입니다.

---

## GitHub 시작하기

### 1️⃣ GitHub 계정 만들기

1. [github.com](https://github.com)에 접속
2. "Sign up" 클릭
3. 이메일, 비밀번호, 사용자명 입력
4. 이메일 인증 완료

### 2️⃣ Git 설치하기

**Windows:**
- [git-scm.com](https://git-scm.com)에서 다운로드 후 설치

**Mac:**
```bash
brew install git
```

**설치 확인:**
```bash
git --version
```

### 3️⃣ Git 초기 설정

터미널(또는 명령 프롬프트)에서 다음 명령어를 입력하세요:

```bash
# 사용자 이름 설정
git config --global user.name "당신의이름"

# 이메일 설정 (GitHub 계정 이메일)
git config --global user.email "your.email@example.com"

# 설정 확인
git config --list
```

---

## 기본 작업 흐름

### 📥 새 프로젝트 시작하기

#### 방법 1: 새 저장소 만들기

```bash
# 프로젝트 폴더로 이동
cd /경로/프로젝트폴더

# Git 저장소 초기화
git init

# 파일 스테이징
git add .

# 첫 커밋
git commit -m "첫 번째 커밋"

# GitHub에 원격 저장소 연결
git remote add origin https://github.com/사용자명/저장소명.git

# 푸시
git push -u origin main
```

#### 방법 2: 기존 저장소 복제하기

```bash
# GitHub 저장소를 내 컴퓨터로 복제
git clone https://github.com/사용자명/저장소명.git

# 복제된 폴더로 이동
cd 저장소명
```

### 📝 일상적인 작업 흐름

```bash
# 1. 작업 전에 최신 버전 받아오기
git pull

# 2. 파일 수정/추가/삭제 작업

# 3. 변경사항 확인
git status

# 4. 변경사항 스테이징
git add .                    # 모든 파일
git add 파일명.txt           # 특정 파일만

# 5. 커밋 (변경사항 저장)
git commit -m "변경 내용 설명"

# 6. GitHub에 업로드
git push
```

---

## 자주 사용하는 Git 명령어

### 📊 상태 확인

```bash
# 현재 상태 확인
git status

# 커밋 이력 확인
git log

# 간단한 커밋 이력
git log --oneline

# 변경사항 확인
git diff
```

### 🔄 동기화

```bash
# 원격 저장소에서 가져오기 + 병합
git pull

# 로컬 변경사항 업로드
git push

# 강제 푸시 (주의!)
git push -f
```

### 🌿 브랜치 관리

```bash
# 브랜치 목록 보기
git branch

# 새 브랜치 만들기
git branch 브랜치명

# 브랜치 전환
git checkout 브랜치명

# 브랜치 만들기 + 전환 (한 번에)
git checkout -b 새브랜치명

# 브랜치 병합
git merge 브랜치명

# 브랜치 삭제
git branch -d 브랜치명
```

### ↩️ 되돌리기

```bash
# 마지막 커밋 취소 (변경사항은 유지)
git reset --soft HEAD~1

# 마지막 커밋 취소 (변경사항도 삭제)
git reset --hard HEAD~1

# 특정 파일만 이전 상태로
git checkout -- 파일명

# 스테이징 취소
git reset HEAD 파일명
```

### 🔧 기타 유용한 명령어

```bash
# 원격 저장소 정보 확인
git remote -v

# 원격 저장소 추가
git remote add origin URL

# .gitignore에 파일 추가된 후 캐시 제거
git rm -r --cached .
git add .
git commit -m "Update .gitignore"

# 최근 변경사항 임시 저장
git stash

# 임시 저장한 내용 복원
git stash pop
```

---

## 자주 묻는 질문 (FAQ)

### ❓ Q1: git push할 때 오류가 나요

**A:** 원격 저장소가 로컬보다 앞서 있을 때 발생합니다. 먼저 `git pull`로 최신 버전을 받아온 후 다시 push하세요.

```bash
git pull --rebase
git push
```

### ❓ Q2: 커밋 메시지를 잘못 작성했어요

**A:** 가장 최근 커밋 메시지는 수정할 수 있어요.

```bash
git commit --amend -m "새로운 커밋 메시지"
```

### ❓ Q3: 실수로 파일을 삭제했어요

**A:** 아직 커밋하지 않았다면 복구할 수 있어요.

```bash
git checkout -- 파일명
```

### ❓ Q4: .gitignore가 작동하지 않아요

**A:** 이미 추적 중인 파일은 .gitignore에 추가해도 무시되지 않습니다. 캐시를 제거해야 해요.

```bash
git rm -r --cached .
git add .
git commit -m "Apply .gitignore"
```

### ❓ Q5: 브랜치를 어떻게 사용하나요?

**A:** 일반적인 브랜치 사용 패턴:

```bash
# 새 기능 개발 시작
git checkout -b feature/새기능

# 작업 후 커밋
git add .
git commit -m "새 기능 추가"

# main 브랜치로 전환
git checkout main

# 새 기능 병합
git merge feature/새기능

# 사용 완료한 브랜치 삭제
git branch -d feature/새기능
```

---

## 💡 유용한 팁

### ✅ 좋은 커밋 메시지 작성법

```bash
# 좋은 예
git commit -m "로그인 기능 추가"
git commit -m "버그 수정: 이메일 유효성 검사 오류"
git commit -m "문서 업데이트: README에 설치 방법 추가"

# 나쁜 예
git commit -m "수정"
git commit -m "ㅇㅇㅇ"
git commit -m "aaa"
```

### ✅ .gitignore 작성법

프로젝트 루트에 `.gitignore` 파일을 만들어 Git이 무시할 파일을 지정하세요.

```
# 운영체제 파일
.DS_Store
Thumbs.db

# 편집기 설정
.vscode/
.idea/

# 의존성 폴더
node_modules/
venv/

# 빌드 결과물
dist/
build/

# 환경 변수 파일
.env
.env.local

# 로그 파일
*.log
```

### ✅ GitHub Pages로 웹사이트 호스팅

1. 저장소 Settings → Pages
2. Source에서 브랜치 선택 (보통 `main`)
3. Save 클릭
4. `https://사용자명.github.io/저장소명`으로 접속

---

## 🎓 다음 단계

GitHub 기본을 익혔다면 다음 내용을 학습해보세요:

1. **Pull Request**: 코드 리뷰와 협업
2. **GitHub Actions**: 자동화 및 CI/CD
3. **GitHub Issues**: 버그 추적 및 작업 관리
4. **Fork & Contribute**: 오픈소스 프로젝트 기여하기

---

## 📖 추가 자료

- [GitHub 공식 문서](https://docs.github.com)
- [Git 공식 문서](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Git 치트시트](https://education.github.com/git-cheat-sheet-education.pdf)

---

**🎉 축하합니다!** 이제 GitHub를 사용할 준비가 되었습니다. 
처음에는 어려울 수 있지만, 자주 사용하다 보면 금방 익숙해질 거예요!

궁금한 점이 있다면 [GitHub Community](https://github.community/)에서 질문해보세요.
