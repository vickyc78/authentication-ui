<template>
  <v-app>
    <v-main class="fill-height primary">
      <v-row
        no-gutters
        class="auth fill-height"
        justify="center"
        align="center"
      >
        <v-col cols="10" md="4" sm="8">
          <base-card class="pa-8">
            <!-- <v-img :src="logo" width="100" class="mx-auto mb-4"></v-img> -->
            <router-view />
          </base-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
// import logo from "@/assets/logo/tlu-logo-purple.png";
import BaseCard from "@/components/BaseCard";
export default {
  name: "AuthLayout",
  components: { BaseCard },
  data() {
    return {
      // logo
    };
  }
};
</script>

<style lang="scss" scoped>
.auth {
  background: linear-gradient(to bottom, #6148ac 50%, #e1e1e1 50%);
}
</style>
