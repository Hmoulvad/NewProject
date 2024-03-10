import { Button } from "@/components/UI";
import { Input, Select } from "@/components/UI/Form";
import styles from "./styles.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <Input
        label="Search"
        type="text"
        name="search"
        placeholder="Spotify Search"
      />
      <Select
        label="Search type"
        name="type"
        options={["Artist", "Album", "Track"]}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
