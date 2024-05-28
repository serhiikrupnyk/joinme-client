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
      <div class="text-subtitle-1 text-medium-emphasis">First Name</div>

      <v-text-field
        density="compact"
        placeholder="First Name"
        prepend-inner-icon="mdi-account"
        variant="outlined"
        v-model="firstName"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>

      <v-text-field
        density="compact"
        placeholder="Last Name"
        prepend-inner-icon="mdi-account"
        variant="outlined"
        v-model="lastName"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Email</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email"
        variant="outlined"
        v-model="email"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        v-model="password"
      ></v-text-field>

      <v-btn
        block
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="handleSignUp"
      >
        Sign Up
      </v-btn>

      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          rel="noopener noreferrer"
          to="/signin"
        >
          Sign in now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSignUp = async () => {
      try {
        await store.dispatch("registration", {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        });
        router.push("/");
      } catch (error) {
        console.error("Registration error:", error);
      }
    };

    return {
      firstName,
      lastName,
      email,
      password,
      handleSignUp,
    };
  },
};
</script>
