<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link to="/" style="margin-left: 15px">Home</router-link>
      </li>
      <li>
        <router-link to="/about" style="margin-left: 15px">About</router-link>
      </li>
      <li>
        <b-button
          style="margin-left: 15px"
          type="is-danger"
          @click="setAuthenticated(false)"
          >LOGOUT</b-button
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  methods: {
    ...mapActions("auth", ["setAuthenticated"]),
  },
};
</script>

<style>
.navbar {
  font-size: 24px;
  background: #f2f2f2;
  padding: 10px;
}
ul {
  list-style-type: none;
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}
router-link {
  margin: 20px;
}
</style>
