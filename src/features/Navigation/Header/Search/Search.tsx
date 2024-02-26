import { Button, Typography } from "@/components/UI";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";
import getSpotifyToken from "@/services/Spotify/actions/getToken";

export default function Search() {
  async function searchAction(formData: FormData) {
    "use server";

    const search = formData.get("search");

    const result = await getSpotifyToken();

    console.log(result);
  }

  return (
    <search className={styles.search}>
      <form action={searchAction}>
        <Typography
          placeholder="Search on this website"
          as="input"
          type="text"
          name="search"
        />
        <Button type="submit" icon={<MagnifyingGlass />} />
      </form>
    </search>
  );
}
