<template>
  <div>
    <h1>User Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: "user-dashboard",
  data() {
    return {
      title: "user-dashboard"
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", this.title);
    // await this.$store.dispatch("auth/getOneUser", {});
  }
};
</script>

<style></style>
