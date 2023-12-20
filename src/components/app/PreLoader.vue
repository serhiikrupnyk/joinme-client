<template>
    <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        bottom
        color="deep-purple-accent-4"
    >
    </v-progress-linear>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    loading: Boolean
  },
  mounted() {
    this.loading
  }
})
</script>