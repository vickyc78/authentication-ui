<template>
  <v-card
    rounded="lg"
    :color="color"
    :shaped="shaped"
    :to="to"
    :width="width"
    :height="height"
    :max-width="maxWidth"
    :max-height="maxHeight"
    class=""
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  name: "base-card",
  props: {
    color: {
      type: String,
      default: "",
      required: false,
      description: "Card color",
    },
    shaped: {
      type: String,
      default: "",
      required: false,
      description:
        "Applies a large border radius on the top left and bottom right of the card",
    },
    to: {
      type: String,
      default: "",
      required: false,
      description: "The target route of the link",
    },
    width: {
      type: String,
      default: "",
      required: false,
      description: "Width of the card",
    },
    height: {
      type: String,
      default: "",
      required: false,
      description: "Height of the card",
    },
    maxWidth: {
      type: String,
      default: "",
      required: false,
      description: "Max-Width of the card",
    },
    maxHeight: {
      type: String,
      default: "",
      required: false,
      description: "Max-Height of the card",
    },
  },
};
</script>
