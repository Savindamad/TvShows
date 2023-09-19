import { mount } from "@vue/test-utils";
import ErrorComponent from "./../../Error/ErrorComponent.vue";
import { describe, expect, test } from "vitest";

describe("ErrorComponent", () => {
  const errorProps = {
    title: "Error titile",
    message: "Error Message",
    imageSrc: "image src",
  };
  test("should mount", () => {
    const wrapper = mount(ErrorComponent, {
      props: errorProps,
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["error-wrap"]));
    expect(wrapper.find("#errorTitle").text()).toBe(errorProps.title);
    expect(wrapper.find("#errorMessage").text()).toBe(errorProps.message);
  });
});
