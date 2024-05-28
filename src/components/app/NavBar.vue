<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
        @click="goHome"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const goHome = async () => {
      try {
        //await store.dispatch('home');
        router.push("/");
      } catch (error) {
        console.error("Logout error:", error);
      }
    };

    return {
      goHome,
    };
  },
};
</script>
