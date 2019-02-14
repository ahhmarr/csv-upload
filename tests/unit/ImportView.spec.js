import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ImportView from "@/components/import/ImportView";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("ImportView.vue", () => {
  let actions, store, getters, wrapper;
  beforeEach(() => {
    actions = {
      fetchContacts: jest.fn(),
      updateSelected: (state, data) => {
        state.selected = data;
      }
    };
    getters = {
      contacts: () => ({}),
      selected: () => ({
        name: "ahmar",
        age: 30,
        createdAt: "2019-02-11T08:40:06.886Z",
        address: "ziif drive, 405 bigag lane"
      })
    };
    store = new Vuex.Store({
      actions,
      getters,
      mutations: {
        updateSelected(state, obj) {
          state.selected = obj;
        }
      }
    });
    wrapper = shallowMount(ImportView, {
      store,
      localVue
    });
  });

  it("search box should be visible when there is a selected name", () => {
    let input = wrapper.find("#import-view");
    expect(input.exists()).toBe(true);
  });
  it("name should be displayed properly", () => {
    let name = wrapper.find(".name");
    expect(name.text()).toBe("ahmar,");
  });
  it("age should be displayed properly", () => {
    let name = wrapper.find(".age");
    expect(name.text()).toBe("30");
  });
  it("address should be displayed properly", () => {
    let name = wrapper.find(".address");
    expect(name.text()).toBe("ziif drive, 405 bigag lane");
  });
});
