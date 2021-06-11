<template>
  <v-form ref="registerForm" v-model="authValid" lazy-validation>
    <div>
      <base-input
        v-model="registerForm.email"
        label="Email"
        prepend-inner-icon="mdi-email"
        :rules="rules.email"
      />
    </div>
    <div>
      <base-input
        v-model="registerForm.name"
        label="Username"
        prepend-inner-icon="mdi-account"
        :rules="rules.username"
      />
    </div>
    <div>
      <base-select
        item-text="name"
        label="AccessLevel"
        placeholder="Select AccessLevel"
        :items="accesslevels"
        :orderStatus="registerForm.accessLevel"
        :rules="rules.accessLevel"
        @statusChanged="changeStatus"
      />
    </div>
    <div>
      <base-input
        v-model="registerForm.password"
        label="Password"
        prepend-inner-icon="mdi-lock"
        type="password"
        :rules="rules.password"
      />
    </div>

    <v-card-actions class="pa-0">
      <v-spacer></v-spacer>
      <base-button
        block
        title="register"
        :disabled="registerDisable"
        @click="register()"
      />
    </v-card-actions>

    <v-card-text class="text-center pb-0 px-0">
      Already a user?
      <router-link to="/login" class="text-decoration-none">
        Login</router-link
      ></v-card-text
    >
  </v-form>
</template>

<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import BaseSelect from "@/components/BaseSelect";
export default {
  components: { BaseInput, BaseButton, BaseSelect },
  data() {
    return {
      authValid: true,
      registerForm: {
        email: "",
        name: "",
        password: "",
        accessLevel: ""
      },
      registerDisable: false,
      accesslevels: [
        {
          name: "Admin"
        },
        {
          name: "Owner"
        },
        {
          name: "User"
        }
      ],
      rules: {
        email: [
          v => !!v || "Email is required",
          v => /.+@.+\..+/.test(v) || "Please enter valid email address"
        ],
        username: [v => !!v || "Username is required"],
        password: [v => !!v || "Password is required"],
        accessLevel: [v => !!v || "AccessLevel is required"]
      }
    };
  },
  methods: {
    async register() {
      // if (this.$refs.registerForm.validate()) {
      //   this.$router.push("/login");
      // }
      if (!this.$refs.registerForm.validate()) {
        return;
      }
      let registerData = await this.$store.dispatch(
        "auth/registerUser",
        this.registerForm
      );
      if (registerData && registerData.data && registerData.status == 200) {
        localStorage.setItem("accessToken", registerData.data.accessToken);
        this.$toast.open({
          message: "You are register with us successfully",
          type: "success",
          position: "top"
        });
        this.registerForm = {};
        if (registerData.data.accessLevel == "User") {
          this.$router.push("user-dashboard");
        } else if (registerData.data.accessLevel == "Owner") {
          this.$router.push("owner-dashboard");
        } else if (registerData.data.accessLevel == "Admin") {
          this.$router.push("admin-dashboard");
        }
      } else if (registerData.status == 410) {
        this.$toast.open({
          message: registerData.data,
          type: "info",
          position: "top"
        });
      } else {
        this.$toast.open({
          message: registerData.data,
          type: "error",
          position: "top"
        });
      }
    },
    changeStatus(data) {
      console.log(data);
      this.registerForm.accessLevel = data;
    }
  }
};
</script>
