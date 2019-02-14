import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ImportSearch from "@/components/import/ImportSearch";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("ImportSearch.vue", () => {
  let actions, store, getters, wrapper;
  beforeEach(() => {
    actions = {
      fetchContacts: jest.fn(),
      updateSelected: jest.fn()
    };
    getters = {
      contacts: () => ({
        data: [
          {
            _id: "1",
            name: "aaron abbott",
            age: 46,
            address: "ziif drive, 405 bigag lane"
          },
          {
            _id: "2",
            name: "aaron abbott",
            age: 46,
            createdAt: "2019-02-11T08:40:06.886Z",
            updatedAt: "2019-02-11T08:40:06.886Z"
          },
          {
            _id: "3",
            name: "master name",
            age: 46,
            address: "ziif drive, 405 bigag lane",
            createdAt: "2019-02-11T08:40:06.886Z",
            updatedAt: "2019-02-11T08:40:06.886Z"
          },
          {
            _id: "4",
            name: "game name",
            age: 46,
            createdAt: "2019-02-11T08:40:06.886Z",
            updatedAt: "2019-02-11T08:40:06.886Z"
          },
          {
            _id: "5",
            name: "zulu yankey",
            age: 64,
            createdAt: "2019-02-11T08:40:06.886Z",
            updatedAt: "2019-02-11T08:40:06.886Z"
          }
        ],
        search: "",
        loading: false
      }),
      selected: () => ({})
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    wrapper = shallowMount(ImportSearch, {
      store,
      localVue
    });
  });

  it("view card should be not visible by default", () => {
    let input = wrapper.find('[placeholder="Search"]');
    expect(input.exists()).toBe(true);
  });
  it("search box should have selected text", () => {
    let input = wrapper.find('[placeholder="Search"]');
    input.element.value = "ab";
    input.trigger("input");
    let suggestions = wrapper.findAll(".list-group-item ");
    expect(suggestions.length).toBe(0);
  });
});
