<template>
  <ErrorComponent
    :title="'Page not found!'"
    :message="'Sorry, Page you are looking for is not available.'"
    :image-src="errorImage"
  />
</template>

<script lang="ts" setup>
import ErrorComponent from "@/components/Error/ErrorComponent.vue";
import errorImage from "@/assets/error-404.png";
</script>
