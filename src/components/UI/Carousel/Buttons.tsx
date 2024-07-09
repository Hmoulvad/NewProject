"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Button } from "../Button";
import styles from "./Carousel.module.css";
import { ariaTranslations } from "@/translations/aria";

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
      <Button
        onClick={scrollToStart}
        icon={<ArrowLeft />}
        aria-label={ariaTranslations.carousel.scroll.start}
      />
      <Button
        onClick={scrollToEnd}
        icon={<ArrowRight />}
        aria-label={ariaTranslations.carousel.scroll.end}
      />
    </div>
  );
}
