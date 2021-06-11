<template>
  <div>
    <v-form ref="forgotPasswordForm" v-model="authValid" lazy-validation>
      <div>
        <base-input
          v-model="forgotPasswordForm.email"
          label="Email"
          prepend-inner-icon="mdi-email"
          :rules="rules.email"
        />
      </div>
      <div>
        <base-input
          v-model="forgotPasswordForm.password"
          label="New Password"
          prepend-inner-icon="mdi-lock"
          type="password"
          :rules="rules.password"
        />
      </div>

      <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <base-button
          block
          title="Forget Password"
          width="100"
          @click="forgetPassword()"
        />
      </v-card-actions>

      <v-card-text class="text-center pb-0 px-0">
        Remember your password?
        <router-link to="/login" class="text-decoration-none">
          Login</router-link
        ></v-card-text
      >
    </v-form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
export default {
  name: "forgot-password",
  components: { BaseInput, BaseButton },
  data() {
    return {
      authValid: true,
      forgotPasswordForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "Please enter valid email address"
        ],
        password: [v => !!v || "Password is required"]
      }
    };
  },
  methods: {
    async forgetPassword() {
      if (!this.$refs.forgotPasswordForm.validate()) {
        return;
      }
      let forgetPasswordData = await this.$store.dispatch(
        "auth/forgetPassword",
        this.forgotPasswordForm
      );
      if (
        forgetPasswordData &&
        forgetPasswordData.data &&
        forgetPasswordData.status == 200
      ) {
        this.$toast.open({
          message: forgetPasswordData.data,
          type: "success",
          position: "top"
        });
        this.$router.push("/login");
      } else if (forgetPasswordData.status == 410) {
        this.$toast.open({
          message: forgetPasswordData.data,
          type: "info",
          position: "top"
        });
      } else {
        this.$toast.open({
          message: forgetPasswordData.data,
          type: "error",
          position: "top"
        });
      }
    }
  }
};
</script>
