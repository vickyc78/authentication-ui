<template>
  <div>
    <h1>Admin Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: "admin-dashboard",
  data() {
    return {
      title: "admin-dashboard"
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", this.title);
    // await this.$store.dispatch("auth/getOneUser", {});
  }
};
</script>

<style></style>
