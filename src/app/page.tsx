import { ProductCard } from "@/components/Features/Product";
import { Carousel, PageContainer } from "@/components/UI";
import { Checkbox, Input, Select } from "@/components/UI/Form";
import { RadioGroup } from "@/components/UI/Form/RadioGroup";

export default function HomePage() {
  return (
    <PageContainer>
      <Carousel
        title="Product Carousel"
        items={Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      />
      <form>
        <Input
          placeholder="Search for product..."
          label="Product Search"
          name="search"
        />
        <Checkbox label="Show only available products" name="available" />
        <Select
          name="Car choice"
          label="Select a car"
          options={["Volvo", "Saab", "Mercedes", "Audi"]}
        />
        <RadioGroup
          name="Favorite Weblanguage"
          label="Please select your favorite Web language"
          options={[
            { value: "html", label: "HTML" },
            { value: "css", label: "CSS" },
            { value: "js", label: "JavaScript" },
            { value: "ts", label: "TypeScript" },
          ]}
        />
      </form>
    </PageContainer>
  );
}
