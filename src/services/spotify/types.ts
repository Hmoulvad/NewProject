export namespace Spotify {
  export type AuthTokenResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
  };

  export type ArtistResponse = {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  };
}
