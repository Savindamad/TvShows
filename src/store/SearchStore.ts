import { defineStore } from "pinia";

import { Show } from "@/models/show.model";

type State = {
  query: string;
  showSearch: Show[];
  loading: boolean;
  error: boolean;
};

export const useSearchStore = defineStore("SearchStore", {
  state: (): State => ({
    query: "",
    showSearch: [],
    loading: false,
    error: false,
  }),
  actions: {
    async fetchShowsSearch() {
      this.loading = true;
      this.error = false;
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${this.query}`
        ).then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("fetchShowsSearch error");
        });
        this.showSearch = response.map((res: any) => res.show);
      } catch {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    setSearchQuery(query: string) {
      this.query = query;
    },
  },
});
