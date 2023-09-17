<template>
  <FullPageSpinnerComponent v-if="loading" />
  <div v-else-if="error">Error</div>
  <div class="mt-10" v-else>
    <v-row class="mx-4">
      <div v-for="(data, n) in showSearch" :key="n" class="d-flex child-flex">
        <ShowImageCard
          :show-name="data.name"
          :show-id="data.externals?.thetvdb || data.externals?.imdb"
          :src="data.image?.original"
          :lazy-src="data.image?.medium"
        />
      </div>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { storeToRefs } from "pinia";

import FullPageSpinnerComponent from "@/components/spinner/FullPageSpinnerComponent.vue";
import ShowImageCard from "@/components/Show/ShowImageCard.vue";
import { useSearchStore } from "@/store/SearchStore";

const { query, showSearch, loading, error } = storeToRefs(useSearchStore());
const { fetchShowsSearch } = useSearchStore();
const route = useRoute();
const router = useRouter();
const queryText = String(route.query["q"]) || "";

onBeforeMount(() => {
  if (!queryText) {
    router.replace("/");
    return;
  }
  if (query.value !== queryText) {
    query.value = queryText;
  }
});

watch(query, () => {
  fetchShowsSearch();
});
</script>
