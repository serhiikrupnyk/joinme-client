<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">New Password</div>

      <v-text-field
        density="compact"
        placeholder="Naw password"
        prepend-inner-icon="mdi-password"
        variant="outlined"
        v-model="password"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="handleReset"
      >
        Reset
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const password = ref("");

    const handleReset = async () => {
      const id = router.currentRoute.value.params.id;
      const accessToken = router.currentRoute.value.params.accessToken;

      try {
        await store.dispatch("resetPassword", {
          id,
          accessToken,
          password: password.value,
        });
        console.log(1);
        router.push("/signin");
        console.log(2);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    return {
      password,
      handleReset,
    };
  },
};
</script>
