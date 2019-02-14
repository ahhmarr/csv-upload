import { shallowMount } from "@vue/test-utils";
import ProgressBar from "@/components/ProgressBar";
describe("ProgressBar.vue", () => {
  const wrapper = shallowMount(ProgressBar, {
    propsData: {
      progress: 69
    }
  });
  it("should have desired structure", () => {
    const main = wrapper.find("#progress > #progress-container");
    const percent = main.find("#percentage");
    const loader = main.find("#progress-loader");
    expect(main.exists()).toBe(true);
    expect(percent.exists()).toBe(true);
    expect(loader.exists()).toBe(true);
  });
  it("progress props should be accepted", () => {
    let props = wrapper.props("progress");
    expect(props).toBe(69);
  });
  it("should set width of the loader according to the progress", () => {
    wrapper.setProps({ progress: 0 });
    let loader = wrapper.find("#progress-loader");
    let style = loader.element.style;
    expect(style.width).toBe("0%");
    wrapper.setProps({ progress: 100 });
    expect(style.width).toBe("100%");
  });
  it("should hide loader when progress is not started or finished", () => {
    let loader = wrapper.find("#progress");
    let style = loader.element.style;
    wrapper.setProps({ progress: 0 });
    expect(style.visibility).toBe("hidden");
    wrapper.setProps({ progress: -100 });
    expect(style.visibility).toBe("hidden");
    wrapper.setProps({ progress: 100 });
    expect(style.visibility).toBe("hidden");
    wrapper.setProps({ progress: 10101 });
    expect(style.visibility).toBe("hidden");
  });
  it("should display loader when in progress", () => {
    wrapper.setProps({ progress: 23 });
    let loader = wrapper.find("#progress");
    let style = loader.element.style;
    expect(style.visibility).toBe("visible");
  });
});
