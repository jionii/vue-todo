# 📝 Vue TodoList Project

Vue 3 Composition API를 공부하면서 만든 간단한 TodoList 프로젝트입니다.  
할 일 추가, 완료 체크, 삭제 등의 기능을 직접 구현하며 Vue의 컴포넌트 구조와 이벤트 흐름을 익혔습니다.

---

## 🚀 주요 기능

- 할 일 추가 (`Enter` 또는 `+` 버튼)
- 할 일 완료 체크 (클릭하면 줄 긋기)
- 할 일 삭제 (✖ 버튼)
- 컴포넌트 간 props / emit 통신 학습
- 기본적인 CSS 스타일링 적용

---

## 🛠️ 사용 기술

- **Vue 3 Composition API**
- JavaScript (ES6+)
- HTML, CSS (Scoped 스타일)
- Vite (또는 Vue CLI 기반 프로젝트 구조)

---

## 📂 컴포넌트 구성

| 컴포넌트명       | 설명                            |
| ---------------- | ------------------------------- |
| `TodoHeader.vue` | 상단 헤더 영역                  |
| `TodoInput.vue`  | 할 일 입력창 및 버튼            |
| `TodoList.vue`   | 할 일 목록 출력, 완료/삭제 기능 |
| `TodoFooter.vue` | 하단 푸터 영역                  |

---

## ⚙️ 설치 및 실행 방법

```bash
# 1. 레포지토리 클론
git clone https://github.com/your-username/vue-todolist.git
cd vue-todolist

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run serve
# 또는
npm run dev
```
