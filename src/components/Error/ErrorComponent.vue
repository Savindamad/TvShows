<template>
  <div class="error-wrap">
    <v-container class="max-md">
      <v-row>
        <v-col cols="12" md="4">
          <div class="image-container">
            <v-img :src="imageSrc" max-width="120"></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="8">
          <p class="text-h4">{{ title }}</p>
          <p class="text-subtitle-1">{{ message }}</p>
          <v-btn
            size="small"
            variant="outlined"
            color="primary"
            class="mt-2"
            @click="
              () => {
                router.push({ path: `/` });
              }
            "
            >{{ $t("back-to-home") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps<{
  title: string;
  message: string;
  imageSrc: string;
}>();
</script>

<style>
.error-wrap {
  align-items: center;
  display: flex;
  min-height: 100vh;
  width: 100%;
  margin-top: -65px;
}
.image-container {
  direction: rtl;
}
</style>
