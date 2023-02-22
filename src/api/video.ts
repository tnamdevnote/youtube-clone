import { axios } from "./axios";

const ENDPOINT = "/videos";

export async function getTrendingVideos() {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: "snippet,  contentDetails, statistics",
      chart: "mostPopular",
      maxResults: 25,
      regionCode: "US",
    },
  });

  return data;
}

export async function getVideoById(videoId: string) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: "snippet, contentDetails, statistics",
      id: videoId,
    },
  });

  return data.items;
}