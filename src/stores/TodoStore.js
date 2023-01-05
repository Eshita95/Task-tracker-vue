import { defineStore } from "pinia";
import { transformWithEsbuild } from "vite";

export const useTodoStore = defineStore('TodoStore', {
    // state

    state: () => ({
        todos: [
            { id: 1, title: 'Todo 1', completed: false },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: false },
            { id: 4, title: 'Todo 4', completed: true },
            { id: 5, title: 'Todo 5', completed: false },
        ]
    }),

    // actions

    actions: {
        addTodo(todo) {
            this.todos.push(todo);

        },

        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id === id);
        }
    }
    // getters

});