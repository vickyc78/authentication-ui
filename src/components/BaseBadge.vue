<template>
  <v-badge :content="content" :color="color" :icon="icon" overlap>
    <slot />
  </v-badge>
</template>

<script>
export default {
  name: "base-badge",
  props: {
    content: {
      type: String,
      default: "",
      required: true,
      description: "Any content you want to inject as text into the badge",
    },
    icon: {
      type: String,
      default: "",
      required: false,
      description: "Adds icon in the badge",
    },
    color: {
      type: String,
      default: "success",
      required: false,
      description: "Color of the badge",
    },
  },
};
</script>

<style></style>
