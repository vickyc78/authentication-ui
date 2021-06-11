<template>
  <div>
    <!-- app bar -->
    <v-app-bar color="primary" height="70" dark app>
      <!-- <v-btn v-if="drawer" icon class="mr-2" @click="mini = !mini">
        <v-icon>mdi-chevron-{{ `${mini ? "right" : "left"}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title class="text-capitalize">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <span v-if="$vuetify.breakpoint.smAndUp" @click="logout">
        <span class="mr-4"> <v-icon>mdi-logout</v-icon>Logout </span></span
      >
    </v-app-bar>
  </div>
</template>

<script>
// import computeLogo from "@/assets/logo/tlu-logo.png";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // computeLogo,
      drawer: true,
      mini: false
    };
  },
  computed: {
    // title(){
    //   return this.$store.state.dashboard.title
    // },
    // ...mapState({
    //   title: state => state.dashboard.title
    // }),

    // title(){
    //   return this.$store.state.title
    // },
    ...mapState(["title", "sidebarMenu"]),

    notifications() {
      return this.$store.state.notifications.notifications;
    },
    account() {
      return this.$store.state.account;
    },
    profile() {
      return this.$store.state.auth.adminProfile;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>
