<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      :class="{ 'on-hover': isHovering }"
      v-bind="props"
      class="ma-1"
      width="inherit"
      @click="
        () => {
          router.push({ path: `/show/${showId}`, params: { id: showId } });
        }
      "
    >
      <div class="d-flex fill-height align-center justify-center">
        <v-img
          v-if="src"
          :lazy-src="lazySrc ?? ''"
          aspect-ratio="2/3"
          min-height="225"
          min-width="150"
          cover
          :src="src"
        >
          <ImageOverlay
            :is-hovering="isHovering"
            :show-name="showName"
            :show-ratings="showRatings"
          />
        </v-img>
        <div class="text-h6 text-img" v-else>
          {{ showName }}
          <ImageOverlay
            :is-hovering="isHovering"
            :show-name="showName"
            :show-ratings="showRatings"
          />
        </div>
      </div>
    </v-card>
  </v-hover>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

import ImageOverlay from "@/components/Show/ImageOverlay.vue";

const router = useRouter();

defineProps<{
  src?: string;
  lazySrc?: string;
  showName: string;
  showId: number | string;
  showRatings?: number;
}>();
</script>