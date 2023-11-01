# 📑ChobsPDF

[체험하러 가기](https://chobs-pdf.vercel.app/)
내 문서에게 궁금한 점을 질문하세요!
느릿느릿한 PDF 업로드 속도, 불편한 UI, 한줄 한줄 읽으며 정리하는 업무는 이제 그만!

---

### 🤔어떤 역할을 하나요?

- `Free Plan`: PDF를 업로드해 자유롭게 확대/축소, 회전하고 조회할 수 있는 뷰어에요!
- `PRO Plan`: AI에게 PDF의 내용에 대해 질문하고 특정 내용이 몇 페이지의 어디에 존재하는지까지 간편하게 질문할 수 있어요!

---

### 😊어떻게 실행하나요?

필요모듈 설치
```
npm install
```

데이터베이스 관리 GUI 실행
```
npx prisma studio
```

로컬환경에 실행 (localhost:3000)
```
npm run dev
```

---

### 🤔어떤 기술이 사용되었나요?

- Framework
  - NextJS
- DB
  - PostgreSQL
  - Prisma
- UI
  - radix-ui
  - lucide-react
- ai
  - pinecone
  - kinde
  - langchain
  - openai
- etc
  - trpc
  - tailwindcss
  - clsx
  - date-fns
  - react-dropzone
  - react-pdf
  - react-loading-skeleton
  - react-resize-detector
  - react-textarea-autosize
  - stripe
  - uploadthing
  - zod

---

### 😎UI는 어떤가요?

![image](https://github.com/kwb020312/ChobsPDF/assets/46777310/2a991c50-295f-4661-a608-c3b14bd399d6)

![image](https://github.com/kwb020312/ChobsPDF/assets/46777310/0b13bca0-e5bf-45e5-921b-801ebdb15b80)

![image](https://github.com/kwb020312/ChobsPDF/assets/46777310/678471b7-efaf-4375-a1bc-e0c40b6e435f)

![image](https://github.com/kwb020312/ChobsPDF/assets/46777310/c06e716a-1751-425d-80db-bb7709e2a500)

---

### 😘무료로 이용할 순 없나요?

현재 테스트 버전을 진행중이며, 이용카드 등록 시, 카드 번호를 `4242424242...` 로 입력해주신 후 나머지 입력 부분을 아무렇게나 입력하셔도 `PRO` 버전을 체험하실 수 있게 해두었습니다.

---

### 😶문제가 있어요..

이슈사항을 등록해주시면 바로 확인해보겠습니다.

---

### 😙정보

`2023-11-01` Chat GPT 이용요금 초과 확인

유료 요금제 회원에 한해 순차적으로 정상동작하도록 변경하겠습니다.

