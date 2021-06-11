<template>
  <div class="mb-8">
    <base-title v-bind="$attrs" />
    <slot />
  </div>
</template>

<script>
import BaseTitle from "@/components/BaseTitle";
export default {
  name: "base-section",
  components: { BaseTitle },
};
</script>

<style></style>
