import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const requiredIcons = [faCoffee, faTimes, faClock];
export default function(vue) {
  library.add(...requiredIcons);
  vue.component("font-awesome-icon", FontAwesomeIcon);
}
