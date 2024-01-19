"use client";

import Button from "@/components/UI/Button";
import { SpotifyLogo } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function SearchArtist() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form className={styles.form}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button icon={<SpotifyLogo />} variant="secondary" type="submit">
        Search for artists
      </Button>
    </form>
  );
}
