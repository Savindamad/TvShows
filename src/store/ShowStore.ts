import { defineStore } from "pinia";

import { Show } from "@/models/show.model";
import { endpoints } from "@/static/app.config";

type State = {
  shows: Show[];
  loading: boolean;
  error: boolean;
};

export const useShowStore = defineStore("ShowStore", {
  state: (): State => ({
    shows: [],
    loading: false,
    error: false,
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
            .slice(0, 20) || []
        );
      };
    },
  },
  actions: {
    async fetchShows() {
      try {
        this.shows = [];
        this.loading = true;
        this.error = false;
        this.shows = await fetch(`${endpoints.shows}?page=1`).then(
          (res) => {
            if (res.ok) {
              return res.json();
            }
            throw new Error("fetchShows error");
          }
        );
      } catch {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
