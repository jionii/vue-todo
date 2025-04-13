<template>
  <div class="input-box">
    <!-- v-model : 양방향 바인딩이라 내가 타이핑 할 때 값이 자동으로 바뀜-->
    <!-- keypu.enter : enter 누르면 submitTodo 함수 실행 -->
    <input type="text" v-model="newTodo" @keyup.enter="submitTodo">
    <button @click="submitTodo">+</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'

// 현재 컴포넌트가 addTodo라는 커스텀 이벤트를 발생시킬 수 있음을 선언 -> 나중에 부모 컴포넌트에서 @addTodo="..."로 받을 수 있음
const emit = defineEmits(['addTodo'])

// newTodo는 사용자 입력 값을 담는 반응형 함수
// 초기값은 빈 문자열 ''
const newTodo = ref('')

// 사용자가 엔터를 누르거나 버튼을 클릭했을 때 실행되는 함수
const submitTodo = () => {
  // newTodo에서 앞뒤 공백을 제거한 값을 trimmed에 저장
  // ref로 만든 변수는 .value로 접근해야 실제 값이 나옴
  const trimmed = newTodo.value.trim()
  // 입력 값이 공백이 아니면 (즉, 뭔가 입력했으면) if문 실행
  if (trimmed) {
    // emit('이벤트이름') → 부모에서 @이벤트이름 = "이 함수 실행 "
    emit('addTodo', trimmed) // 부모 컴포넌트(App.vue)로 'addTodo'이벤트를 발생시하고 입력한 텍스트를 함께 보내며
    newTodo.value = '' // 입력창 초기화 (enter 치고 나면 다시 비인 입력창으로)
  }
}
</script>

<style scoped>
.input-box {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.input-box input {
  flex: 1;
  max-width: 500px;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
}

.input-box button {
  padding: 10px 15px;
  font-size: 1.2rem;
  border: none;
  background-color: #62acde;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.input-box button:hover {
  background-color: #4e95c7;
}
</style>