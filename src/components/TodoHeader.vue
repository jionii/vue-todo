<template>
  <header class="todo-header">
    <!-- 제목 영역 -->
    <h1>📝 나의 할 일 목록</h1>
  </header>
</template>

<script setup>
// 헤더는 기능 없이 UI만 담당
</script>

<style scoped>
.todo-header {
  text-align: center;
  background-color: #f7f7f7;
  padding: 1.5rem 1rem;
  border-bottom: 2px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.todo-header h1 {
  font-size: 2rem;
  color: #333;
  margin: 0;
  font-weight: bold;
  letter-spacing: -0.5px;
}
</style>