import { PageContainer, Typography } from "@/components/UI";
import { Metadata } from "next";
import Form from "./_components/Form";
import { PageProps } from "../types";
import { Spotify } from "@/services";

export const metadata: Metadata = {
  title: "Spotify",
};

export default async function SpotifyPage({ searchParams }: PageProps) {
  const { access_token } = await Spotify.Actions.getToken();
  const results = await Spotify.Actions.search({
    query: searchParams.search,
    token: access_token,
  });

  return (
    <PageContainer>
      <Form />
      {results?.artists?.items.map((artist) => (
        <Typography key={artist.id}>{artist.name}</Typography>
      ))}
    </PageContainer>
  );
}
