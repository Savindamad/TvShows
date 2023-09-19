<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title
        @click="
          () => {
            router.push({ path: `/` });
          }
        "
      >
        <span class="text-primary"> TV </span>Shows
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-card-text>
        <v-text-field
          id="searchInput"
          v-model="query"
          density="compact"
          variant="solo"
          :label="$t('show-search')"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-card-text>

      <div>
        <v-select
          class="mt-5"
          :items="availableLocales"
          :model-value="locale"
          item-title="name"
          item-value="value"
          variant="solo-filled"
          density="compact"
          @update:modelValue="localeChange"
        ></v-select>
      </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 65px"> </v-container>
    </v-sheet>
  </v-card>
</template>

<script lang="ts" setup>
import { watch, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { Locale, useI18n } from "vue-i18n";

import { storeToRefs } from "pinia";

import { useSearchStore } from "@/store/SearchStore";

const { query } = storeToRefs(useSearchStore());
const router = useRouter();
const i18n = useI18n();
const locale = ref(i18n.locale);

const availableLocales = computed(() => {
  return i18n.availableLocales.map((locale) => {
    return { name: locale.toLocaleUpperCase(), value: locale };
  });
});

const localeChange = (value: Locale) => {
  i18n.locale.value = value;
};

watch(query, () => {
  if (query.value) {
    router.replace({ path: "/search", query: { q: query.value } });
  } else {
    router.push({ path: "/" });
  }
});
</script>

<style>
.v-field__overlay {
  background-color: transparent !important;
}
</style>
