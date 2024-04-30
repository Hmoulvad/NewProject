import { Carousel, PageContainer } from "@/components/UI";
import { ProductCard } from "@/features/Product";
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
