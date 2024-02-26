import { Carousel, PageContainer } from "@/components/UI";
import { ProductCard } from "@/features/Product";

export default async function HomePage() {
  return (
    <PageContainer>
      <Carousel
        title="Product Carousel"
        items={Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      />
      <Carousel
        title="Product Carousel"
        items={Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      />
    </PageContainer>
  );
}
