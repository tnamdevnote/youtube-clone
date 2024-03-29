import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_YOUTUBE_API_BASE_URL,
  headers: { "X-goog-api-key": import.meta.env.VITE_YOUTUBE_API_KEY },
});
