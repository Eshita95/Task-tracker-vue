<template lang="">
   
        <li>
            {{ todo.title }} 
            <button @click="handleDelete()">Delete</button>
            <button @click="handleChangeStatus">{{todo.completed? 'Make Pending': 'Make Completed'}}</button>
        </li>
    
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
            useTodoStore().deleteTodo(this.todo.id);
        },
        handleChangeStatus(){
            useTodoStore().changeTodosStatus(this.todo.id);
        }
    },
}


</script>

<style scoped>

</style>