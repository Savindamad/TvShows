// Utilities
import { defineStore } from "pinia";

import { Show } from "@/models/show.model";

type ShowbyGenres = {
  genres: string;
  showList: Show[];
};

type State = {
  shows: ShowbyGenres[];
  loading: boolean;
  error: unknown | null;
};

export const useShowStore = defineStore("show", {
  state: (): State => ({
    shows: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchShowsByGenres(genres: string): Promise<ShowbyGenres> {
      try {
        const showList = await fetch(
          `https://api.tvmaze.com/search/shows?q=${genres}`
        ).then((res) => res.json());
        return { genres, showList };
      } catch {
        throw new Error('fetchShowsByGenres failed');
      }
    },
    async loadShows() {
      this.shows = [];
      this.loading = true;
      try {
        const showsByGenres = ["comody", "action", "drama"].map((item) =>
          this.fetchShowsByGenres(item)
        );
        await Promise.all(showsByGenres).then((data) => {
          this.shows = data;
        });
      } catch (error) {
        this.error =  error
      } finally {
        this.loading = false;
      }
    },
  },
});
