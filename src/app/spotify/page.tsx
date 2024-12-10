import { Typography } from "@/components/UI/Typography";
import { Metadata } from "next";
import { Spotify } from "../_lib/data";
import Form from "./_components/Form";

export const metadata: Metadata = {
  title: "Spotify",
};

type PageProps = {
  searchParams: Promise<{
    search: string;
    type: ["album", "artist", "playlist", "track", "show", "episode"];
  }>;
};

export default async function SpotifyPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const { access_token } = await Spotify.Actions.getToken();
  const results = await Spotify.Actions.search({
    query: resolvedSearchParams.search,
    token: access_token,
    type:
      typeof resolvedSearchParams.type === "string"
        ? [resolvedSearchParams.type]
        : resolvedSearchParams.type,
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
