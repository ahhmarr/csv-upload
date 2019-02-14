import { shallowMount } from "@vue/test-utils";
import ImportContainer from "@/components/import/ImportContainer";

describe("ImportContainer.vue", () => {
  const wrapper = shallowMount(ImportContainer, {
    stubs: {
      ImportForm: `<div id="import-form"></div>`,
      ImportSearch: `<div id="import-search"></div>`,
      ImportView: `<div id="import-view"></div>`
    }
  });
  it("should have import form", () => {
    let form = wrapper.find("#import-form");
    expect(form.exists()).toBe(true);
  });
  it("should have import search", () => {
    let form = wrapper.find("#import-search");
    expect(form.exists()).toBe(true);
  });
  it("should have import view", () => {
    let form = wrapper.find("#import-view");
    expect(form.exists()).toBe(true);
  });
  it("should have form then search and then view , in that same order", () => {
    let container = wrapper.find(".import-container");
    let form = wrapper.find(".import-container > #import-form ");
    let search = wrapper.find("#import-form + #import-search ");
    let view = wrapper.find("#import-search + #import-view ");
    expect(container.exists()).toBe(true);
    expect(form.exists()).toBe(true);
    expect(search.exists()).toBe(true);
    expect(view.exists()).toBe(true);
  });
});
