<template>
  <div v-if="shows?.length">
    <div class="text-h5 ml-15">{{ genres }}</div>
      <v-slide-group
        v-model="selectedItem"
        class="py-4"
        center-active
        show-arrows
      >
        <v-slide-group-item v-for="(data, i) in shows" :key="i">
          <ShowImageCard
            :show-name="data.name"
            :show-id="data.externals.thetvdb || data.externals.imdb"
            :src="data.image?.original"
            :lazy-src="data.image?.medium"
            :show-ratings="data.rating.average"
          />
        </v-slide-group-item>
      </v-slide-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { Show } from "@/models/show.model";
import ShowImageCard from "@/components/Show/ShowImageCard.vue";

defineProps<{
  genres?: string;
  shows?: Show[];
}>();

const selectedItem = ref("");
</script>
