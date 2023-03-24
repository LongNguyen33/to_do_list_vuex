<template>
  <form>
    <input type="text" v-model="title" />
    <b-button
      @click="onSubmit"
      style="
        margin: 10px auto;
        padding: 10px;
        border: 0;
        display: block;
        background-color: cyan;
      "
    >
      ADD</b-button
    >
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions("todo", ["addTodo"]),
    onSubmit() {
      this.addTodo({
        id: uuidv4(),
        title: this.title,
        completed: false,
      });
      this.title = "";
    },
  },
};
</script>

<style>
form {
  padding: 10px;
  background: rgb(240, 240, 240);
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  border: 0;
}
</style>
