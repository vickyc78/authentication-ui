<template>
  <v-icon
    :color="color"
    :small="small"
    :large="large"
    :x-small="xSmall"
    :x-large="xLarge"
    v-bind="$attrs"
    v-on="$listeners"
    >{{ icon }}</v-icon
  >
</template>

<script>
export default {
  name: "base-icon",
  props: {
    color: {
      type: String,
      default: "",
      required: false,
      description: "Applies color to the icon",
    },
    icon: {
      type: String,
      default: "",
      required: true,
      description: "Icon name",
    },
    small: {
      type: Boolean,
      default: false,
      required: false,
      description: "Makes the component small",
    },
    large: {
      type: Boolean,
      default: false,
      required: false,
      description: "Makes the component large",
    },
    xSmall: {
      type: Boolean,
      default: false,
      required: false,
      description: "Makes the component extra small",
    },
    xLarge: {
      type: Boolean,
      default: false,
      required: false,
      description: "Makes the component extra large",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
