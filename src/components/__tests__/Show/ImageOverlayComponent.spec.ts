import { mount } from "@vue/test-utils";
import ImageOverlayComponent from "./../../Show/ImageOverlayComponent.vue";
import { describe, expect, test } from "vitest";

describe("ImageOverlayComponent", () => {
  const overlayProps = {
    isHovering: true,
    showName: "",
    showRatings: 5,
  };
  test("should mount", () => {
    const wrapper = mount(ImageOverlayComponent, {
      props: overlayProps,
    });

    expect(wrapper.find("#showName").text()).toBe(overlayProps.showName);
    expect(wrapper.find("#showRatings").text()).toBe(overlayProps.showRatings.toString());
  });
});
