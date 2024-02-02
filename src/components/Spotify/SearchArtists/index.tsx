import Button from "@/components/UI/Button";
import styles from "./styles.module.css";
import { SpotifyLogo } from "@phosphor-icons/react/dist/ssr/SpotifyLogo";
import getArtist from "@/services/spotify/actions/getArtist";

async function onSubmit(formData: FormData) {
  "use server";
  const data = await getArtist(formData.get("artist") as string);
}

export default function SearchArtist() {
  return (
    <form action={onSubmit} className={styles.form}>
      <label htmlFor="artist">Enter artist you want to search for </label>
      <input
        type="text"
        name="artist"
        required
        defaultValue="2YZyLoL8N0Wb9xBt1NhZWg"
      />
      <Button icon={<SpotifyLogo />} variant="secondary" type="submit">
        Search for artists
      </Button>
    </form>
  );
}
