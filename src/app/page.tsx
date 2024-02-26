import { ProductCard } from "@/components/Features/Product";
import { Carousel, PageContainer } from "@/components/UI";

export default function HomePage() {
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
