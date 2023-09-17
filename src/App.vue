<template>
  <v-app>
    <AppBar />
    <v-main class="main-container">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import AppBar from "@/components/AppBar/AppBarComponent.vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

onMounted(() => {
  const usersLanguage = window.navigator.language;
  if (i18n.availableLocales.includes(usersLanguage)) {
    i18n.locale.value = usersLanguage;
  }
});
</script>

<style>
.main-container {
  padding-top: 0 !important;
}
</style>
