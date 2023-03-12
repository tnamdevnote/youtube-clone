import { axios } from "./axios";

const ENDPOINT = "/search";

export async function getSearchResult(queryString: string) {
  const { data } = await axios.get(ENDPOINT, {
      params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: queryString,
      },
  });

  return data.items;
}

export async function getRelatedVideo(videoId: string) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: "snippet",
      maxResults: 25,
      relatedToVideoId: videoId,
      type: "video",
    },
  });

  return data;
}
