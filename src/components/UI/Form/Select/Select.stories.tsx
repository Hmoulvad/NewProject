import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
  title: "UI/Form/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ["Car", "Airplane", "Boat", "Rocket"],
    name: "TravelBy",
    label: "Travel by",
  },
};
