import SearchArtist from "@/components/Spotify/SearchArtists";
import Page from "@/components/UI/Page";
import Typography from "@/components/UI/Typography";

export default async function Spotify() {
  return (
    <Page>
      <section>
        <Typography as="h1" variant="display2">
          Spotify
        </Typography>
        <SearchArtist />
      </section>
    </Page>
  );
}
