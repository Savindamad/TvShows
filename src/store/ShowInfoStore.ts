import { defineStore } from "pinia";

import { Show } from "@/models/show.model";

type State = {
  show: Show | null;
  loading: boolean;
  error: boolean;
};

export const useShowInfoStore = defineStore("ShowInfoStore", {
  state: (): State => ({
    show: null,
    loading: false,
    error: false,
  }),
  actions: {
    async fetchShowById(id: number | string) {
      try {
        this.loading = true;
        this.error = false;
        this.show = await fetch(
          `https://api.tvmaze.com/lookup/shows?thetvdb=${id}`
        ).then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("fetchShowById error");
        });
      } catch {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
