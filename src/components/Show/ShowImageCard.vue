<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      :class="{ 'on-hover': isHovering }"
      v-bind="props"
      class="ma-1"
      height="300"
      width="200"
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
          height="300"
          width="200"
          cover
          :src="src"
        >
          <v-overlay
            :model-value="isHovering"
            contained
            scrim="#000000"
            class="align-end"
          >
            <p class="mx-2 text-h5 font-weight-black">
              {{ showName }}
            </p>
            <div v-if="showRatings" class="mx-1 mb-2">
              <v-icon
                size="x-large"
                color="deep-purple-accent-4"
                icon="mdi-star"
              ></v-icon>
              <span class="font-weight-black ml-1">{{ showRatings }}</span>
            </div>
          </v-overlay>
        </v-img>
        <div class="text-h6" v-else>{{ showName }}</div>
      </div>
    </v-card>
  </v-hover>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
  src?: string;
  lazySrc?: string;
  showName: string;
  showId: number | string;
  showRatings?: number;
}>();
</script>
