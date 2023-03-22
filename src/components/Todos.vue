<template>
  <div class="todo-list">
    <ul v-if="auth.isAuthenticated">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="todo.completed ? 'completed' : ''"
      >
        {{ todo.title }}
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="MARK_COMPLETED(todo.id)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Todo-list",
  computed: mapState(["todos", "auth"]),
  methods: mapMutations(["MARK_COMPLETED"]),
};
</script>
<style>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}
.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}

.todo-list li input[type="checkbox"] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}
.todo-list li.completed {
  background: rgb(119, 218, 243);
}
</style>
