<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem">
        <button v-on:click="addTodo">+</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                newTodoItem: ""
            }
        },
        methods: {
            addTodo: function() {
                localStorage.setItem(this.newTodoItem, this.newTodoItem);
                this.clearInput();
            },
            clearInput: function() {
                this.newTodoItem = '';
            }
        }
    }
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>