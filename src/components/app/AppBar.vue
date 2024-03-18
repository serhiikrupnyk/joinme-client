<template>
  <v-app-bar>
    <v-toolbar title="Join Me" color="teal-lighten-2">
      <v-menu :location="bottom" width="150px">
      <template v-slot:activator="{ props }">
        <v-btn
          color=""
          dark
          v-bind="props"
        >
        <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item class="pointer" align="left">
          <v-list-item-title>
            <v-icon icon="mdi-account" size="15"></v-icon>
            Account
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="pointer" align="left">
          <v-list-item-title>
            <v-icon icon="mdi-message" size="15"></v-icon>
            Messages
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="pointer" align="left" @click="handleLogout">
          <v-list-item-title>
            <v-icon icon="mdi-login" size="15"></v-icon>
            Logout
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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

<style>
.pointer {
  cursor: pointer;
}

.pointer:hover {
  box-shadow: 2px 0 2px 4px rgba(0.1, 0, 0, 0.1);
}
</style>