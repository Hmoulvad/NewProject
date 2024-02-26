import { Button, Typography } from "@/components/UI";
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
        />
        <Button type="submit" icon={<MagnifyingGlass />} />
      </form>
    </search>
  );
}
