<template>
  <div id="app">
    <div v-if="!isAuthenticated">
      <h1>No login</h1>
      <b-button type="is-primary" @click="setAuthenticated(true)"
        >LOGIN</b-button
      >
    </div>
    <div v-else>
      <NavBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NavBar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "auth/isAuthenticated",
    }),
  },
  methods: {
    ...mapActions("auth", ["setAuthenticated"]),
  },
};
</script>

<style>
#app {
  padding: 20px;
}
</style>
