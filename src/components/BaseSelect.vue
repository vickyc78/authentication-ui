<template>
  <div>
    <div class="text-capitalize subtitle-1 mb-2">{{ label }} :</div>

    <v-select
      :items="items"
      item-text="name"
      item-value="name"
      :placeholder="placeholder"
      :rules="rules"
      :readonly="readonly"
      outlined
      dense
      v-model="orderStatus"
      @change="changeStatus(orderStatus)"
    ></v-select>
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
    items: {
      type: Array,
      default: () => [],
      required: true,
      description: "Items list"
    },
    rules: {
      type: Array,
      default: () => [],
      required: true,
      description: "Validation rules on input"
    },
    orderStatus: {
      type: String,
      default: "",
      required: true
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false,
      description: "Make the Input readonly"
    }
  },
  data() {
    return {
      status: "Pending"
    };
  },
  methods: {
    changeStatus(data) {
      this.$emit("statusChanged", data);
    }
  }
};
</script>

<style>
.v-select-list .v-list-item__content .v-list-item__title,
.v-select__selections .v-select__selection {
  text-transform: capitalize;
}
</style>
