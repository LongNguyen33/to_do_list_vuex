<template>
  <div>
    <AddForm></AddForm>
    <Todos></Todos>
    <StatusBar></StatusBar>
    <ProgressBar></ProgressBar>
  </div>
</template>

<script>
import AddForm from "@/components/AddForm.vue";
import Todos from "@/components/Todos.vue";
import StatusBar from "@/components/StatusBar.vue";
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: "HomeScreen",
  components: {
    AddForm,
    Todos,
    StatusBar,
    ProgressBar,
  },
};
</script>

<style></style>
