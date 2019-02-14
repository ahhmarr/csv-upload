import { shallowMount } from "@vue/test-utils";
import ImportForm from "@/components/import/ImportForm";
describe("ImportForm.vue", () => {
  const wrapper = shallowMount(ImportForm, {
    stubs: {
      vueSnotify: "<div></div>"
    }
  });
  it("upload file should be hidden", () => {
    let uplodFile = wrapper.find("#uploadFile");
    expect(uplodFile.exists()).toBe(true);
    expect(uplodFile.element.style.display).toBe("none");
  });
  it("file name should be readonly ", () => {
    let fileName = wrapper.find("#fileName");
    expect(fileName.exists()).toBe(true);
    expect(fileName.attributes().readonly).toBe("readonly");
  });
  it("upload button should be disabled by default ", () => {
    let button = wrapper.find("#uploadButton");
    expect(button.exists()).toBe(true);
    expect(button.attributes().disabled).toBe("disabled");
  });
  it("upload button should be enabled once file is set ", () => {
    let fileName = wrapper.find("#uploadButton");
    wrapper.setData({ fileName: "dummy-file.csv" });
    expect(fileName.attributes().disabled).toBe(undefined);
  });
  it("file name should be have same name as filename", () => {
    wrapper.setData({ fileName: "dummy-file.csv" });
    let fileName = wrapper.find("#fileName");
    expect(fileName.element.value).toBe("dummy-file.csv");
  });
});
