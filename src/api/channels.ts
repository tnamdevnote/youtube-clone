import { axios } from "./axios";

const ENDPOINT = "/channels";

export async function getChannelInfo(channelId: string) {
  const { data } = await axios.get(ENDPOINT, {
    params: {
      part: ["snippet", "contentDetails", "statistics"],
      id: channelId,
    },
  });

  return data;
}
