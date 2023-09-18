<template>
  <div v-if="show" class="mt-5">
    <div id="showName" class="text-h4 pb-3">{{ show.name }}</div>
    <div id="showGenres" class="text-h6 pb-2">
      {{ show.genres.join(" | ") }}
    </div>
    <div class="d-flex pb-2" v-if="show.rating.average">
      <v-rating
        v-model="show.rating.average"
        length="10"
        density="compact"
        size="22"
        readonly
      ></v-rating>
      <span class="ml-2 align-center">( {{ show.rating.average }} )</span>
    </div>
    <p class="font-weight-thin pb-3">
      <span v-html="show.summary"></span>
    </p>
    <div>
      <ul>
        <li id="showSchedule" class="pb-1">
          <span class="font-weight-black">{{ $t("show-schedule") }}: </span>
          <span class="font-weight-light">{{
            `${show.schedule.days.join(", ")} ${
              show.averageRuntime ? "( ~ " + show.averageRuntime + " min )" : ""
            }`
          }}</span>
        </li>
        <li id="showStatus" class="pb-1">
          <span class="font-weight-black">{{ $t("show-status") }}: </span>
          <span class="font-weight-light">{{ show.status }}</span>
        </li>
        <li id="showType" class="pb-1">
          <span class="font-weight-black">{{ $t("show-type") }}: </span>
          <span class="font-weight-light">{{ show.type }}</span>
        </li>
        <li id="showLanguage" class="pb-1">
          <span class="font-weight-black">{{ $t("show-language") }}: </span>
          <span class="font-weight-light">{{ show.language }}</span>
        </li>
        <li class="pb-1" v-if="show.webChannel">
          <span class="font-weight-black"
            >{{ $t("show-official-site") }}:
          </span>
          <span>
            <a :href="show.webChannel.officialSite">{{
              show.webChannel.name
            }}</a>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";

import { useShowInfoStore } from "@/store/ShowInfoStore";

const { show } = storeToRefs(useShowInfoStore());
</script>
