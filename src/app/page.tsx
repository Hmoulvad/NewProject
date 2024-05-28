import { ProductCard } from "@/app/_components/Product";
import { Carousel } from "@/components/UI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <>
      <Carousel
        title="Product Carousel"
        items={Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      />
    </>
  );
}
