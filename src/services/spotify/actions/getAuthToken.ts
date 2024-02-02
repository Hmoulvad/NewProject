import * as SpotifyAPI from "../index";

const body = `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`;

export default async function getAuthToken() {
  return SpotifyAPI.AccountAPI.post("token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
    next: {
      revalidate: 3600,
    },
  }).json<SpotifyAPI.Types.AuthTokenResponse>();
}
