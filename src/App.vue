<template>
  <v-app>
    <AppBar />
    <v-main class="main-container">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from "@/components/AppBar/AppBarComponent.vue";
</script>

<style>
.main-container {
  padding-top: 0 !important;
}
</style>
