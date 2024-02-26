import { ProductCard } from "@/test/Product";
import { Carousel, PageContainer } from "@/components/UI";
import { authOptions } from "@/services/Auth/options";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

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
