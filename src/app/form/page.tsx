import { Button } from "@/components/UI/Button";
import { RadioGroup } from "@/components/UI/Form/RadioGroup";
import { Metadata } from "next";
import styles from "./styles.module.css";
import { Input } from "@/components/UI/Form/Input";
import { TextArea } from "@/components/UI/Form/TextArea";
import { Checkbox } from "@/components/UI/Form/Checkbox";
import { Select } from "@/components/UI/Form/Select";
import { Calender } from "@/components/UI/Form/Calender";

export const metadata: Metadata = {
  title: "Form",
};

export default function FormPage() {
  return (
    <>
      <form className={styles.form}>
        <Input
          placeholder="Search for product..."
          label="Product Search"
          name="search"
        />
        <TextArea
          label="Description"
          name="Description"
          placeholder="Insert your description here..."
        />
        <Checkbox label="Show only available products" name="available" />
        <Select
          name="Car choice"
          label="Select a car"
          options={["Volvo", "Saab", "Mercedes", "Audi"]}
        />
        <Calender label="Select a date" name="DeliveryDate" />
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
    </>
  );
}
