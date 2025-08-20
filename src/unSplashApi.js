import axios from "axios";

const ACCESSKEY = "?client_id=znIuyREAwkBzu-4HpGy2ofDXXwFqpC-08a7GjCAYoss";
const PERPAGE = 12;
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

async function searchImages(filter, page = 1, perPage = PERPAGE) {
  const images = await axios.get(
    ACCESSKEY + "&page=" + page + "&per_page=" + perPage + "&query=" + filter
  );
  return images.data;
}

export { searchImages };
