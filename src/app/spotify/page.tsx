import { Typography } from "@/components/UI";
import { Spotify } from "@/services";
import { Metadata } from "next";
import Form from "./_components/Form";

export const metadata: Metadata = {
  title: "Spotify",
};

type PageProps = {
  searchParams: {
    search: string;
    type: ["album", "artist", "playlist", "track", "show", "episode"];
  };
};

export default async function SpotifyPage({ searchParams }: PageProps) {
  const { access_token } = await Spotify.Actions.getToken();
  const results = await Spotify.Actions.search({
    query: searchParams.search,
    token: access_token,
    type:
      typeof searchParams.type === "string"
        ? [searchParams.type]
        : searchParams.type,
  });

  return (
    <>
      <Form />
      {results?.artists?.items.map((artist) => (
        <Typography key={artist.id}>{artist.name}</Typography>
      ))}
    </>
  );
}
