<template>
  <v-overlay
    :model-value="isHovering"
    contained
    scrim="#000000"
    class="align-end"
  >
    <p id="showName" class="mx-2 text-h5 font-weight-black">
      {{ showName }}
    </p>
    <div v-if="showRatings" class="mx-1 mb-2">
      <v-icon
        size="x-large"
        color="deep-purple-accent-4"
        icon="mdi-star"
      ></v-icon>
      <span id="showRatings" class="font-weight-black ml-1">{{
        showRatings
      }}</span>
    </div>
  </v-overlay>
</template>

<script lang="ts" setup>
defineProps<{
  isHovering: boolean | undefined;
  showName: string;
  showRatings?: number;
}>();
</script>

<style>
.text-img {
  min-width: 150px;
}
</style>
