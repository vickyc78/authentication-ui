<template>
  <v-app>
    <base-header />
    <v-main class="content">
      <div class="pa-6">
        <!-- <v-container> -->
        <router-view />
        <!-- </v-container> -->
      </div>
    </v-main>
  </v-app>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
export default {
  name: "DefaultLayout",
  components: { BaseHeader }
};
</script>

<style lang="scss" scoped>
.content {
  background-color: $body-bg;
}
</style>
