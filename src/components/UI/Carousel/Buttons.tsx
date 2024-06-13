"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "../Button";
import styles from "./Carousel.module.css";

type Props = {
  targetId: string;
};

export default function CarouselButtons({ targetId }: Props) {
  function scrollToStart() {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }

  function scrollToEnd() {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollTo({
        left: element.scrollWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className={styles.navigate}>
      <Button onClick={scrollToStart} icon={<ArrowLeft />} />
      <Button onClick={scrollToEnd} icon={<ArrowRight />} />
    </div>
  );
}
