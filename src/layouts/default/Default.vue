<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'

  import { storeToRefs } from 'pinia'
  import { useShowStore } from './../../store/Show'

  const { shows, loading, error } = storeToRefs(useShowStore())
  const { loadShows } = useShowStore()

  loadShows()
</script>
