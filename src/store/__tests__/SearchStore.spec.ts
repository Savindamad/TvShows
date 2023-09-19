import { setActivePinia, createPinia } from "pinia";

import { useSearchStore } from "./../SearchStore";
import {
  createSuccessResponse,
  createErrorResponse,
} from "./utils/fetchResponse";
import { fetchResponse } from "./mock/search.mock";

describe("SearchStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch ShowsSearch success", async () => {
    const searchStore = useSearchStore();

    global.fetch = vi
      .fn()
      .mockResolvedValue(createSuccessResponse(fetchResponse));

    searchStore.query = "test";
    await searchStore.fetchShowsSearch();

    expect(searchStore.showSearch.length).equal(7);
  });

  it("should fetch ShowsSearch error", async () => {
    const searchStore = useSearchStore();

    global.fetch = vi.fn().mockResolvedValue(createErrorResponse(500, "Error"));

    searchStore.query = "test";
    await searchStore.fetchShowsSearch();

    expect(searchStore.showSearch.length).equal(0);
    expect(searchStore.error).equal(true);
  });

  it("should not fetch ShowsSearch when query is empty", async () => {
    const searchStore = useSearchStore();

    global.fetch = vi
      .fn()
      .mockResolvedValue(createSuccessResponse(fetchResponse));

    await searchStore.fetchShowsSearch();

    expect(searchStore.showSearch.length).equal(0);
  });
});
