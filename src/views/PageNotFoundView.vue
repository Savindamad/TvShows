<template>
  <ErrorComponent
    :title="$t('page-not-found-error-titile')"
    :message="$t('page-not-found-error-message')"
    :image-src="errorImage"
  />
</template>

<script lang="ts" setup>
import ErrorComponent from "@/components/Error/ErrorComponent.vue";
import errorImage from "@/assets/error-404.png";
</script>
