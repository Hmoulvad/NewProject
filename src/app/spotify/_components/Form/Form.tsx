import { Button } from "@/components/UI/Button";
import { CheckboxGroup, Input } from "@/components/UI/Form";
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
      <CheckboxGroup
        name="type"
        label="Please select the type of search you would like to perform."
        options={[
          { value: "artist", label: "Artist", defaultChecked: true },
          { value: "album", label: "Album" },
          { value: "track", label: "Track" },
        ]}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
