<template>
  <v-form ref="loginForm" v-model="authValid" lazy-validation>
    <div>
      <base-input
        v-model="loginForm.email"
        label="Email"
        prepend-inner-icon="mdi-account"
        :rules="rules.email"
      />
    </div>
    <div>
      <base-input
        v-model="loginForm.password"
        label="Password"
        prepend-inner-icon="mdi-lock"
        type="password"
        :rules="rules.password"
      />
    </div>

    <v-card-text class="text-right pt-0 px-0 mt-n2">
      <router-link to="/forgot-password" class="text-decoration-none">
        Forgot password?
      </router-link>
    </v-card-text>

    <v-card-actions class="pa-0">
      <v-spacer></v-spacer>
      <base-button block title="login" @click="login()" />
    </v-card-actions>

    <v-card-text class="text-center pb-0 px-0">
      First time here?
      <router-link to="/register" class="text-decoration-none">
        Register</router-link
      ></v-card-text
    >
  </v-form>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
export default {
  components: { BaseInput, BaseButton },
  data() {
    return {
      authValid: true,
      loginForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [v => !!v || "Email is required"],
        password: [v => !!v || "Password is required"]
      }
    };
  },
  methods: {
    async login() {
      if (this.$refs.loginForm.validate()) {
        let userLoginData = await this.$store.dispatch(
          "auth/userLogin",
          this.loginForm
        );
        console.log("userLoginData userLoginData", userLoginData);
        if (
          userLoginData &&
          userLoginData.data &&
          userLoginData.status == 200
        ) {
          localStorage.setItem("accessToken", userLoginData.data.accessToken);
          if (userLoginData.data.accessLevel == "User") {
            this.$router.push("user-dashboard");
          } else if (userLoginData.data.accessLevel == "Owner") {
            this.$router.push("owner-dashboard");
          } else if (userLoginData.data.accessLevel == "Admin") {
            this.$router.push("admin-dashboard");
          }
        } else if (userLoginData.status == 410) {
          this.$toast.open({
            message: userLoginData.data,
            type: "info",
            position: "top"
          });
        } else {
          this.$toast.open({
            message: userLoginData.data,
            type: "error",
            position: "top"
          });
        }
      }
    }
  }
};
</script>
