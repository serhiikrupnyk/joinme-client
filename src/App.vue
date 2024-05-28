<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style lang="scss"></style>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import { RouterView } from "vue-router";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
  components: {
    MainLayout,
  },
};
</script>
