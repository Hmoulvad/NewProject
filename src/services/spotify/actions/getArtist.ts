import { getAuthToken } from ".";
import * as SpotifyAPI from "../index";

export default async function getArtist(id: string) {
  const { access_token } = await getAuthToken();
  return SpotifyAPI.API.get(`artists/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).json<SpotifyAPI.Types.ArtistResponse>();
}
