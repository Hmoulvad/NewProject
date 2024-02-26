import { Button, PageContainer } from "@/components/UI";
import { Checkbox, Input, Select } from "@/components/UI/Form";
import { RadioGroup } from "@/components/UI/Form/RadioGroup";
import styles from "./styles.module.css";

export default function FormPage() {
  return (
    <PageContainer>
      <form className={styles.form}>
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
            { value: "ts", label: "TypeScript", defaultChecked: true },
          ]}
        />
        <Button type="submit">Submit</Button>
      </form>
    </PageContainer>
  );
}
