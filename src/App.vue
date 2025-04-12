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

const todoItems = ref([])

const addTodo = (text) => {
  todoItems.value.push({
    item: text,
    completed: false
  })
}

</script>


<style scoped>
</style>