<template>
  <div>
    <h1>Owner Dashboard</h1>
  </div>
</template>

<script>
export default {
  name: "owner-dashboard",
  data() {
    return {
      title: "owner-dashboard"
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", this.title);
    // await this.$store.dispatch("auth/getOneUser", {});
  }
};
</script>

<style></style>
