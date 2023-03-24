<template>
  <p class="progress-bar">Progress:{{ progress }} %</p>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "progress-bar",
  computed: {
    ...mapGetters({
      progress: "todo/progress",
    }),
    ...mapState(["auth"]),
  },
};
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
