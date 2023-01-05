<template >
    <div>
        All:{{ allTodoCount }} Complete:{{ completedTodosCount }} Pending:{{ pendingTodosCount }}
    </div>
</template>
<script>


import { useTodoStore } from '../stores/TodoStore';
import { mapState } from 'pinia';

export default {
    name: "MenuSection",

    computed: {
        ...mapState(useTodoStore, ['allTodoCount', 'pendingTodosCount', 'completedTodosCount'])

    },
}
</script>
<style scoped>

</style>