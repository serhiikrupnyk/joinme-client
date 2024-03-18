<template>
  <v-app-bar app >
    <v-toolbar title="Join Me" class="gradient">
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

.gradient {
  color: #FFFFFF !important;
  background: rgb(60,199,169) !important;
  background: linear-gradient(90deg, rgba(60,199,169,1) 0%, rgba(9,121,16,0.711922268907563) 49%, rgba(3,152,182,1) 100%) !important;
}
</style>