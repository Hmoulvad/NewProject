import ky from "ky";
import { Spotify } from "../types";

export default function getSpotifyToken() {
  return ky
    .post("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
    })
    .json<Spotify.AuthTokenResponse>();
}
