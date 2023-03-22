<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <router-link to="/about" @click.native="CHANGE_TO_ABOUT"
        >About</router-link
      >
      <li v-if="auth.isAuthenticated">
        Total Todos: {{ todos.length }}
        <router-link @click.native="TOGGLE_AUTH" to="/" tag="button"
          >Logout</router-link
        >
      </li>
      <router-link v-else @click.native="TOGGLE_AUTH" to="/" tag="button"
        >Login</router-link
      >
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Navbar-todo",
  computed: mapState(["todos", "auth"]),
  methods: mapMutations(["TOGGLE_AUTH", "CHANGE_TO_ABOUT"]),
};
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
