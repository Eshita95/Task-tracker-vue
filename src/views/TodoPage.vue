<template >
    Todos
    <button @click="addTodo">Add Todo</button>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>

</template>


<script>

import { useTodoStore } from '../stores/TodoStore';
import { mapState } from 'pinia';

export default {
    name: "TodoPage",
    data() {
        return {

        }
    },

    computed: {
        ...mapState(useTodoStore, ['todos']),
    },

    methods: {
        addTodo() {
            useTodoStore().addTodo({
                id: this.todos.length + 1,
                title: "Todo" + (this.todos.length + 1),
                completed: false,
            })
        }
    }
}
</script>
<style scoped>

</style>