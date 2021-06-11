<template>
  <h2 v-if="title" class="mb-4 text-capitalize">{{ title }}</h2>
</template>

<script>
export default {
  name: "base-title",
  props: ["title"],
};
</script>

<style></style>
