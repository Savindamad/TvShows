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
          v-model="query"
          density="compact"
          variant="solo"
          label="Search.."
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-card-text>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useSearchStore } from "./../../store/SearchStore";

const { query } = storeToRefs(useSearchStore());
const router = useRouter();

watch(query, () => {
  console.log("Value changed: ", query.value);
  if (query.value) {
    router.replace({ path: "/search", query: { q: query.value } });
  } else {
    router.push({ path: "/" });
  }
});
</script>
