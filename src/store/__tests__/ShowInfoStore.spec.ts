import { setActivePinia, createPinia } from "pinia";

import { useShowInfoStore } from "../ShowInfoStore";
import {
  createSuccessResponse,
  createErrorResponse,
} from "./utils/fetchResponse";
import { fetchResponse } from "./mock/search.mock";

describe("ShowInfoStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch Show Info success", async () => {
    const searchStore = useShowInfoStore();
    global.fetch = vi
      .fn()
      .mockResolvedValue(createSuccessResponse(fetchResponse[0]));

    await searchStore.fetchShowById(12);

    expect(JSON.stringify(searchStore.show)).equal(
      JSON.stringify(fetchResponse[0])
    );
  });

  it("should fetch Show Info error", async () => {
    const searchStore = useShowInfoStore();

    global.fetch = vi.fn().mockResolvedValue(createErrorResponse(500, "Error"));

    await searchStore.fetchShowById(12);

    expect(searchStore.show).equal(null);
    expect(searchStore.error).equal(true);
  });
});
