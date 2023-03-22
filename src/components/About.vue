<template>
  <div>
    <h1 class="about-page" v-if="auth.isAuthenticated">ABOUT PAGE</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "about-page",
  computed: mapState(["auth"]),
};
</script>

<style>
.about-page {
  text-align: center;
}
</style>
