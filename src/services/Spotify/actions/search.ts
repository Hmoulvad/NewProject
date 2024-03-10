import { spotifyApi } from "../api";
import { SearchRequest, SearchResponse } from "../types";

type Args = {
  token: string;
  query: string;
  type?: ["album", "artist", "playlist", "track", "show", "episode"];
};

export function search({
  token,
  query,
  type = ["album", "artist", "playlist", "track", "show", "episode"],
}: Args) {
  if (!query) {
    return;
  }

  return spotifyApi
    .get(`search`, {
      searchParams: {
        q: query,
        type: type.join(","),
      } satisfies SearchRequest,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json<SearchResponse>();
}
