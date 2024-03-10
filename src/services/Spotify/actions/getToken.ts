"use server";

import ky from "ky";
import { AuthTokenResponse } from "../types";

export async function getToken() {
  return await ky
    .post("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
      next: {
        revalidate: 3600,
      },
    })
    .json<AuthTokenResponse>();
}
