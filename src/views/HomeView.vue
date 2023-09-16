<template>
  <FullPageSpinnerComponent v-if="loading" />
  <div v-else-if="error"></div>
  <div v-else>
    <ShowCarousel
      v-for="data in GENRES_LOAD_ORDER"
      :genres="data"
      :shows="getShowsByGenres(data)"
      :key="data"
    />
  </div>
</template>

<script lang="ts" setup>
import FullPageSpinnerComponent from "@/components/spinner/FullPageSpinnerComponent.vue";
import ShowCarousel from "@/components/Show/ShowCarousel.vue";
import { GENRES_LOAD_ORDER } from "@/static/app.constants";

import { storeToRefs } from "pinia";
import { useShowStore } from "./../store/ShowStore";

const { loading, error } = storeToRefs(useShowStore());
const { fetchShows, getShowsByGenres } = useShowStore();

fetchShows();
</script>