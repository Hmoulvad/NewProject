import { Carousel } from "@/components/UI";
import { PageContainer } from "@/app/_components/PageContainer";
import { ProductCard } from "@/app/_components/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  return (
    <PageContainer>
      <Carousel
        title="Product Carousel"
        items={Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      />
    </PageContainer>
  );
}
