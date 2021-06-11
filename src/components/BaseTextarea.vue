<template>
  <div>
    <div class="text-capitalize subtitle-1 mb-2">{{ label }} :</div>
    <v-textarea
      :placeholder="placeholder"
      :counter="counter"
      :rules="rules"
      :readonly="readonly"
      clearable
      outlined
      rows="4"
      v-bind="$attrs"
      v-on="$listeners"
    >
    </v-textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
      required: true,
      description: "Input label"
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
      description: "Input placeholder"
    },
    counter: {
      type: String,
      default: "",
      required: false,
      description: "Character count"
    },
    rules: {
      type: Array,
      default: () => [],
      required: true,
      description: "Validation rules on input"
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
      description: "Make the Input readonly"
    }
  }
};
</script>

<style></style>
