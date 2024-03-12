<template>
  <v-app-bar title="Application bar">
    <v-toolbar title="Application" color="grey-lighten-3">

      <v-btn stacked variant="tonal" @click="handleLogout">
        <v-icon icon="mdi-login"></v-icon>

        Logout
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await store.dispatch('logout');
        router.push("/signin");
      } catch (error) {
        console.error('Logout error:', error);
      }
    };

    return {
      handleLogout
    };
  }
}
</script>