<template>
  <div class="todolist-box">
    <ul class="todo-list">
      <!-- todoItems 배열 안에 있는 각 항목을 반복하면서, 각 항목을 todo라는 이름으로, 현재 반복 인덱스를 index라는 이름으로 사용하겠다 -->
      <!-- todo: 현재 반복중인 요소 하나(객체 하나), index: 현재 몇 번째인지 나타내는 숫자(0부터 시작) -->
      <!-- key: Vue가 DOM 업데이트를 효율적으로 하기 위해서 꼭 필요함 -->
      <li v-for="(todo, index) in todoItems" :key="index" class="todo-item">
        {{ index + 1 }}. {{ todo.item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps(['todoItems'])  // 부모 컴포넌트(App.vue)에서 todoItems 배열을 전달받음
</script>

<style scoped>
/* 전체 리스트 박스 스타일 */
.todolist-box {
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: rgb(255, 230, 234); /* 배경색 */
  overflow-y: auto; /* 스크롤 가능 */
  box-sizing: border-box;
}

/* ul 기본 스타일 제거 */
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 리스트 하나하나의 항목 스타일 */
.todo-item {
  background-color: white;              /* 항목 배경색 */
  padding: 12px 18px;                   /* 안쪽 여백 */
  margin-bottom: 12px;                  /* 항목 사이 간격 */
  border-radius: 8px;                   /* 둥근 테두리 */
  font-size: 1.1rem;                    /* 글씨 크기 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); /* 그림자 효과 */
  transition: transform 0.2s;
}

/* hover 시 살짝 뜨는 애니메이션 */
.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
}
</style>