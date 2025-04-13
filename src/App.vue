<template>
  <div>
    <TodoHeader/>
    <!-- @addTodo : 이벤트 이름과 정확하게 일치해야함 -->
    <!-- addTodo : App.vue 내부에 정의한 함수 이름 (마음대로 바꿀 수 있음) -->
    <TodoInput @addTodo="addTodo"/>
    <TodoList :todoItems="todoItems"/>
    <TodoFooter/>
  </div>
</template>

<script setup>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import './assets/main.css'
import {ref} from 'vue'

// "할 일 목록 배열"을 담는 반응형 변수 - 빈 배열로 선언
const todoItems = ref([])

// 할 일을 추가하는 함수
// TodoInput 컴포넌트에서 emit('addTodo', text) 할 때 호출
const addTodo = (text) => {
  // push : JS에서 배열에 새 요소를 추가하는 메서드
  todoItems.value.push({ // 진짜 배열(ref([])에서 .value로 꺼낸 것)
    // 하나의 할 일 객체가 이런 형식으로 저장됨
    item: text, // 사용자가 입력한 할 일 내용
    completed: false // 체크 여부 (처음엔 당연히 false)
  })
}

</script>


<style scoped>
</style>