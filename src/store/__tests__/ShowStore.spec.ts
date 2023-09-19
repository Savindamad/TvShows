import { setActivePinia, createPinia } from "pinia";
import { useShowStore } from "./../ShowStore";
import { fetchResponse, filteredResponse } from "./mock/shows.mock";
import {
  createSuccessResponse,
  createErrorResponse,
} from "./utils/fetchResponse";

describe("ShowStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch Shows success", async () => {
    const searchStore = useShowStore();

    const showsResponse = [
      {
        id: 0,
        name: "name",
      },
    ];

    global.fetch = vi
      .fn()
      .mockResolvedValue(createSuccessResponse(showsResponse));

    await searchStore.fetchShows();

    expect(searchStore.shows.length).equal(1);
  });

  it("should fetch Shows error", async () => {
    const searchStore = useShowStore();
    global.fetch = vi
      .fn()
      .mockResolvedValue(createErrorResponse(500, "Internal server error"));

    await searchStore.fetchShows();

    expect(searchStore.shows.length).equal(0);
    expect(searchStore.error).equal(true);
  });

  it("should filter and sort Shows", async () => {
    const searchStore = useShowStore();
    searchStore.shows = fetchResponse;

    expect(JSON.stringify(searchStore.getShowsByGenres("Action"))).equal(
      JSON.stringify(filteredResponse)
    );
  });
});
