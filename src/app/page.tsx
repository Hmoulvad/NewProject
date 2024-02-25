import { ProductCard } from "@/components/Features/Product";
import { PageContainer } from "@/components/UI";
import { Carousel } from "@/components/UI/Carousel";

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
