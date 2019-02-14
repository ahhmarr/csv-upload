import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card";

describe("Card.vue", () => {
  const wrapper = shallowMount(Card, {
    slots: {
      default: `<div class="fake-slot">fake text</div>`
    }
  });
  it("slots are mounted properly", () => {
    const container = wrapper.find(".card");
    const exists = container.findAll(".fake-slot");
    expect(exists.length).toBe(1);
  });
  it("slots are visible", () => {
    const container = wrapper.find(".card");
    const exists = container.find(".fake-slot");
    expect(exists.isVisible()).toBe(true);
  });
  it("slots are the next children", () => {
    const container = wrapper.find(".card > .fake-slot");
    expect(container.exists()).toBe(true);
  });
});
