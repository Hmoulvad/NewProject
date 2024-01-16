import { spotifyTokenAPI } from "../api";

type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export default function getAuthToken() {
  return spotifyTokenAPI
    .post("token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${
        process.env.SPOTIFY_CLIENT_ID ?? ""
      }&client_secret=${process.env.SPOTIFY_CLIENT_SECRET ?? ""}`,
    })
    .json<SpotifyTokenResponse>();
}
