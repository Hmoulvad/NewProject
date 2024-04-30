import { Dropdown } from "@/components/UI";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
  },
};
export default meta;

export const First: StoryObj<typeof Dropdown> = {
  name: "Dropdown",
  render: (args) => <Dropdown {...args} />,
};
