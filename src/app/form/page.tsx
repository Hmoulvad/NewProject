import { Button } from "@/components/UI";
import {
  Calender,
  Checkbox,
  Input,
  Select,
  TextArea,
} from "@/components/UI/Form";
import { RadioGroup } from "@/components/UI/Form/RadioGroup";
import { Metadata } from "next";
import styles from "./styles.module.css";

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
