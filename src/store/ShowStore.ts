import { defineStore } from "pinia";

import { Show } from "@/models/show.model";

type State = {
  shows: Show[];
  loading: boolean;
  error: unknown | null;
};

export const useShowStore = defineStore("ShowStore", {
  state: (): State => ({
    shows: [],
    loading: false,
    error: null,
  }),
  getters: {
    getShowsByGenres(state): (genres: string) => Show[] {
      return (genres: string): Show[] => {
        const sortByRatings = (a: Show, b: Show) =>
          b.rating.average - a.rating.average;
        return (
          state.shows
            .filter((show) => show.genres.includes(genres))
            .sort(sortByRatings)
            .slice(0,20) || []
        );
      };
    },
  },
  actions: {
    async fetchShows() {
      try {
        this.shows = [];
        this.loading = true;
        this.shows = await fetch(`https://api.tvmaze.com/shows?page=1`).then(
          (res) => res.json()
        );
      } catch {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
