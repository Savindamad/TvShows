import { mount } from "@vue/test-utils";
import ShowCarouselComponent from "./../../Show/ShowCarouselComponent.vue";
import { describe, expect, test } from "vitest";

describe("ShowCarouselComponent", () => {
  test("Shoud not display Carousel when shows are empty", () => {
    const carouselProps = {
      genres: "Comady",
      shows: [],
    };
    const wrapper = mount(ShowCarouselComponent, {
      props: carouselProps,
    });
    expect(wrapper.find("#showCarousel").exists()).toBeFalsy();
  });
});
