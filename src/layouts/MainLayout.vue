<template>
    <PreLoader :loading="loading" />
    <v-layout v-if="!loading" class="rounded rounded-md">
        <AppBar />
        <NavBar />
        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
            <RouterView />
        </v-main>
    </v-layout>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from '../components/app/NavBar.vue'
import AppBar from '../components/app/AppBar.vue'
import PreLoader from '../components/app/PreLoader.vue'


</script>

<script>
export default {
    data: () => ({
        loading: false,
    }),
}</script>