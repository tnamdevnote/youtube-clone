import { axios } from "./axios";

const ENDPOINT = "/search";

export async function getSearchResult(queryString: string) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: "snippet",
      maxResults: 25,
      q: queryString,
    },
  });

  return data;
}

export async function getRelatedVideo(videoId: string) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: "snippet",
      relatedToVideoId: videoId,
      type: "video",
    },
  });

  return data;
}
