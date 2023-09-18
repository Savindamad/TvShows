<template>
  <FullPageSpinnerComponent v-if="loading" />
  <div v-else-if="error">
    <ErrorComponent
      :title="$t('somthing-went-wrong-error-titile')"
      :message="$t('somthing-went-wrong-error-message')"
      :image-src="errorImage"
    />
  </div>
  <div class="mt-10" v-else-if="show">
    <v-row class="d-flex justify-center">
      <v-col offset="1" offset-sm="1" offset-md="1" offset-lg="2">
        <v-row>
          <v-col cols="10" sm="4" md="3" lg="3">
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
          <v-col cols="11" sm="7" md="8" lg="7">
            <v-tabs v-model="tab" color="deep-purple-accent-4">
              <v-tab :value="'info'">{{ $t("show-info") }}</v-tab>
              <v-tab :value="'episodes'">{{ $t("show-episodes") }}</v-tab>
              <v-tab :value="'cast'">{{ $t("show-cast") }}</v-tab>
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
import errorImage from "@/assets/wrong.png";

const { loading, error, show } = storeToRefs(useShowInfoStore());
const { fetchShowById } = useShowInfoStore();
const route = useRoute();
const showId = String(route.params.id);
const tab = ref("info");

fetchShowById(showId);
</script>
