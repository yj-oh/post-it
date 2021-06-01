# 📒 post-it
- 브라우저에서 동작하는 simple Post-it Board
- using localStorage
- https://yj-oh.github.io/post-it

## 🔧 기능 명세
- [X] 브라우저 상에서 동작
- [X] 좌측 보드 목록, 우측 보드
- [X] 보드 목록 최하단의 [+] 버튼으로 새로운 보드 생성
- [X] 보드의 상단에는 보드명, 클릭하여 수정
- [X] 보드를 더블클릭하면, 빈 포스트잇(제목, 본문)
- [ ] **⚠️ 포스트잇 드래그 앤 드랍**
- [ ] **⚠️ 포스트잇 크기 조절**
- [X] 포스트잇 제목, 본문 수정
- [X] 포스트잇 [–] 버튼으로 접기 기능
- [X] 포스트잇 [X] 버튼으로 삭제
  - [X] 내용이 있을 경우 “정말 삭제하시겠습니까?” 라는 확인 다이얼로그
- [X] `ctrl`(or `cmd`)+ `alt` + `N` 으로 빈 포스트잇 생성
  - [ ] **⚠️ 제목 포커스**
- [X] 새로고침 해도 데이터 유지

## 🤹‍♀️ 시작하기
```
git clone https://github.com/yj-oh/post-it.git

yarn install

yarn start
```

## 🔮 Dependencies
`react`, `redux`, `typescript`

dependency | version
--- | ---
react | ^17.0.2
react-dom | ^17.0.2
react-redux | ^7.2.4
redux | ^4.1.0
typescript | ^4.1.2
typesafe-actions | ^5.1.0
formik | ^2.28
styled-components | ^5.3.0

## 🗂 구조
```
🗂 project
...
|-- 📂 public
|-- 📂 src
|   |-- 📂 components
|   |   |-- 📂 board                     # 보드 관련 컴포넌트 (보드 목록, 보드)
|   |   `-- 📂 postIt                    # 포스트잇 관련 컴포넌트
|   |-- 📂 containers
|   |-- 📂 lib
|   |   `-- 📋 storage.ts                # localStorage 관리 함수
|   |-- 📂 store                         # reducer 모음
|   |   |-- 📂 board                     # 보드 관련 리덕스 스토어
|   |   |-- 📂 postIt                    # 포스트잇 관련 리덕스 스토어
|   |   `-- 📋 index.ts
...
```
