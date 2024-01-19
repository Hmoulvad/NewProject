import ky from "ky";

export const AccountAPI = ky.create({
  prefixUrl: "https://accounts.spotify.com/api",
});

export const API = ky.create({
  prefixUrl: "https://api.spotify.com/v1",
});
