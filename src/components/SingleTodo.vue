<template lang="">
   
        <li>{{ todo.title }} <button @click="handleDelete(todo.id)">Delete</button></li>
    
</template>

<script>
import { useTodoStore } from '../stores/TodoStore';

export default {
    name: "SingleTodo",
    props: {
        todo: {
            type: Object
        }
    },

    methods: {
        handleDelete(id){
            useTodoStore().deleteTodo(id);
        }
    },
}


</script>

<style scoped>

</style>