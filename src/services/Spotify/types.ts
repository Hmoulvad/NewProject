export type AuthTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export type SearchRequest = {
  q: string;
  type: string;
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: "audio";
};

export type Artist = {
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
  type: "artist";
  uri: string;
};

export type Album = {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: "album";
  uri: string;
};

export type Track = {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
};

export type Playlist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: "user";
    uri: string;
  };
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: "playlist";
  uri: string;
};

export type Show = {
  available_markets: string[];
  description: string;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  name: string;
  publisher: string;
  type: "show";
  uri: string;
};

export type Episode = {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  is_externally_hosted: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: "episode";
  uri: string;
};

export type Audiobook = {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  is_externally_hosted: boolean;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: "audiobook";
  uri: string;
};

export type SearchResponse = {
  artists?: {
    href: string;
    items: Artist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  albums?: {
    href: string;
    items: Album[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  tracks?: {
    href: string;
    items: Track[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  playlists?: {
    href: string;
    items: Playlist[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  shows?: {
    href: string;
    items: Show[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
  episodes?: {
    href: string;
    items: Episode[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
};
