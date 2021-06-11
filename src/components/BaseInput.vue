<template>
  <div>
    <div class="text-capitalize subtitle-1 mb-2">{{ label }} :</div>
    <v-text-field
      :placeholder="placeholder"
      :type="type"
      :rules="rules"
      :readonly="readonly"
      :disabled="disabled"
      :class="inputClasses"
      class=""
      outlined
      required
      dense
      :prepend-inner-icon="prependInnerIcon"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </v-text-field>
    <!-- :value="value" -->
  </div>
</template>

<script>
export default {
  name: "base-input",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
      description: "Input label",
    },
    placeholder: {
      type: String,
      default: "",
      required: false,
      description: "Input placeholder",
    },
    type: {
      type: String,
      default: "",
      required: false,
      description: "Input type",
    },
    rules: {
      type: Array,
      default: () => [],
      required: true,
      description: "Validation rules on input",
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
      description: "Make the Input readonly",
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
      description: "Make the Input disabled",
    },
    inputClasses: {
      type: String,
      default: "",
      required: false,
      description: "Input css classes",
    },
    // value: { type: null, default: "" },
    prependInnerIcon: {
      type: String,
      default: "",
      required: false,
      description: "prepend inner icon",
    },
  },
};
</script>

<style lang="scss">
.v-input {
  .v-input__slot{
    margin-bottom: 8px !important;
  }
  .v-input__control {
    .v-text-field__details {
      padding: 0 !important;
    }
  }
}
</style>
