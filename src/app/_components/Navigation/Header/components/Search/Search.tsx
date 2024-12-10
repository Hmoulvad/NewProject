import { Button } from "@/components/UI/Button";
import { Typography } from "@/components/UI/Typography";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import styles from "./search.module.css";
import { ariaTranslations } from "@/translations/aria";
import { textTranslations } from "@/translations/text";

export default function Search() {
  return (
    <search className={styles.search}>
      <form>
        <Typography
          placeholder={textTranslations.search.placeholder}
          as="input"
          type="text"
          name="search"
        />
        <Button
          type="submit"
          icon={<MagnifyingGlass />}
          aria-label={ariaTranslations.search.submit}
        />
      </form>
    </search>
  );
}
