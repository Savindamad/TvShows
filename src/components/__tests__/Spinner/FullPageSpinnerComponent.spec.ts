import { mount } from "@vue/test-utils";
import FullPageSpinnerComponent from "./../../Spinner/FullPageSpinnerComponent.vue";
import { describe, expect, test } from "vitest";

describe("FullPageSpinnerComponent", () => {
  test("should mount", () => {});
  const wrapper = mount(FullPageSpinnerComponent);
  expect(wrapper.classes()).toEqual(
    expect.arrayContaining(["v-layout--full-height"])
  );
});
