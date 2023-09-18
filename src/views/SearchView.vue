<template>
  <FullPageSpinnerComponent v-if="loading" />
  <div v-else-if="error">
    <ErrorComponent
      :title="$t('page-not-found-error-titile')"
      :message="$t('page-not-found-error-message')"
      :image-src="errorImage"
    />
  </div>
  <div class="mt-10" v-else>
    <v-row class="mx-4" no-gutters>
      <v-col
        v-for="(data, n) in showSearch"
        :key="n"
        class="d-flex child-flex img-container"
      >
        <ShowImageCard
          :show-name="data.name"
          :show-id="data.externals?.thetvdb || data.externals?.imdb"
          :src="data.image?.original"
          :lazy-src="data.image?.medium"
          :show-ratings="data.rating.average"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import { storeToRefs } from "pinia";
import { debounce } from "lodash";

import FullPageSpinnerComponent from "@/components/Spinner/FullPageSpinnerComponent.vue";
import ShowImageCard from "@/components/Show/ShowImageCard.vue";
import { useSearchStore } from "@/store/SearchStore";
import ErrorComponent from "@/components/Error/ErrorComponent.vue";
import errorImage from "@/assets/wrong.png";

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

watch(
  query,
  debounce(() => {
    fetchShowsSearch();
  }, 500)
);
</script>

<style>
.img-container {
  max-width: "450px";
}
</style>
