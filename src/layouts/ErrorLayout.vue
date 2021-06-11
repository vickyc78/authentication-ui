<template>
  <v-app>
    <v-main class="fill-height primary">
      <v-container class="fill-height">
        <v-row no-gutters justify="center" align="center">
          <v-col class="text-center white--text">
            <div class="">
              <v-img
                src="@/assets/images/404.svg"
                class="mx-auto mb-8"
                width="300"
              ></v-img>
            </div>

            <h1 class="mb-8">
              Ooops! Looks like the page you're looking for no longer exists.
            </h1>

            <h2 class="mb-8">But we're here to bring you back to safety.</h2>

            <base-button title="back to home" to="/home" color="white" large />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseButton from "@/components/BaseButton";
export default {
  name: "ErrorLayout",
  components: { BaseButton },
};
</script>
