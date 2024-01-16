import Page from "@/components/UI/Page";
import Typography from "@/components/UI/Typography";
import getAuthToken from "@/services/spotify/actions/getAuthToken";

export default async function Spotify() {
  const data = await getAuthToken();
  return (
    <Page>
      <section>
        <Typography as="h1" variant="display2">
          Spotify
        </Typography>
        <div>{JSON.stringify(data)}</div>
      </section>
    </Page>
  );
}
