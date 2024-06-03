import { Button } from "@/components/UI/Button";
import { Typography } from "@/components/UI/Typography";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from "./styles.module.css";

export default function Search() {
  return (
    <search className={styles.search}>
      <form>
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
