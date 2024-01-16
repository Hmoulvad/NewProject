import ky from "ky";

export const spotifyTokenAPI = ky.create({
  prefixUrl: "https://accounts.spotify.com/api",
});

export const spotifyAPI = ky.create({
  prefixUrl: "https://api.spotify.com/v1",
});
