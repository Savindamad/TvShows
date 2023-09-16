<template>
  <FullPageSpinnerComponent v-if="loading" />
  <div v-else-if="error">
    <ErrorComponent
      :title="'Somthing went wrong'"
      :message="'This is the error message'"
      :image-src="''"
    />
  </div>
  <div v-else-if="show">
    <v-row class="d-flex justify-center">
      <v-col offset-md="1" offset-lg="2">
        <v-row>
          <v-col cols="4" sm="4" md="3">
            <v-card class="ma-1">
              <div class="d-flex fill-height align-center justify-center">
                <v-img
                  v-if="show.image?.original"
                  :lazy-src="show.image?.medium ?? ''"
                  cover
                  :src="show.image?.original"
                ></v-img>
                <div class="text-h6" v-else>{{ show.name }}</div>
              </div>
            </v-card>
          </v-col>
          <v-col cols="8" sm="8" md="7">
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab :value="'info'">Info</v-tab>
              <v-tab :value="'episodes'">Episodes</v-tab>
              <v-tab :value="'cast'">Cast</v-tab>
            </v-tabs>
            <v-window v-model="tab">
              <v-window-item :key="1" :value="'info'">
                <MainInfoComponent />
              </v-window-item>
              <v-window-item :key="2" :value="'episodes'">
                <EpisodesComponent />
              </v-window-item>
              <v-window-item :key="3" :value="'cast'">
                <CastComponent />
              </v-window-item>
            </v-window>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import { storeToRefs } from "pinia";

import FullPageSpinnerComponent from "@/components/spinner/FullPageSpinnerComponent.vue";
import MainInfoComponent from "@/components/Show/ShowInfo/MainInfoComponent.vue";
import EpisodesComponent from "@/components/Show/ShowInfo/EpisodesComponent.vue";
import CastComponent from "@/components/Show/ShowInfo/CastComponent.vue";
import ErrorComponent from "@/components/Error/ErrorComponent.vue";
import { useShowInfoStore } from "@/store/ShowInfoStore";

const { loading, error, show } = storeToRefs(useShowInfoStore());
const { fetchShowById } = useShowInfoStore();
const route = useRoute();
const showId = String(route.params.id);
const tab = ref("info");

fetchShowById(showId);
</script>
