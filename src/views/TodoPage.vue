<template >
    Todos
    <button @click="addTodo">Add Todo</button>
    <ul>
        <SingleTodo v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" />
    </ul>

</template>


<script>

import { useTodoStore } from '../stores/TodoStore';
import { mapState } from 'pinia';
import SingleTodo from '../components/SingleTodo.vue';

export default {
    name: "TodoPage",
    data() {
        return {};
    },
    computed: {
        ...mapState(useTodoStore, ["todos"]),
    },
    methods: {
        addTodo() {
            useTodoStore().addTodo({
                id: this.todos.length + 1,
                title: "Todo" + (this.todos.length + 1),
                completed: false,
            });
        }
    },
    components: { SingleTodo }
}
</script>
<style scoped>

</style>