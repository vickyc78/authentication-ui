<template>
  <v-btn
    class="rounded-lg"
    :color="color"
    :icon="icon"
    :to="to"
    larges
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-icon v-if="iconLeft" class="mr-2" small>{{ iconLeft }}</v-icon>
    <span v-if="title" class="text-capitalize">{{ title }}</span>
    <v-icon v-if="iconRight" small>{{ iconRight }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "base-button",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
      description: "Title of button",
    },
    color: {
      type: String,
      default: "primary",
      required: false,
      description: "Applies color to button",
    },
    to: {
      type: String,
      default: "",
      required: false,
      description: "The target route of the link",
    },
    icon: {
      type: Boolean,
      default: false,
      required: false,
      description: "Specifies where or not the button is icon",
    },
    iconLeft: {
      type: String,
      default: "",
      required: false,
      description: "Name of the left icon",
    },
    iconRight: {
      type: String,
      default: "",
      required: false,
      description: "Name of the right icon",
    },
  },
};
</script>
