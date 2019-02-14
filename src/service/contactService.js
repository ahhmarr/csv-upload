import axios from "axios";
const API_URL = "";
export async function getContacts(filter = {}) {
  let url,
    resp,
    data = [];
  try {
    url = `${API_URL}/search?${getFilter(filter)}`;
    resp = await axios.get(url);
    data = resp.data;
  } catch (e) {}
  return data;
}
function getFilter(filter) {
  let param = [];
  for (let [key, value] of Object.entries(filter)) {
    param.push(`${key}=${value}`);
  }
  return param.join("&");
}
