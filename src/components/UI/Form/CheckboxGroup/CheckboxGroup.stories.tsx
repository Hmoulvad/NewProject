import type { Meta, StoryObj } from "@storybook/react";

import CheckboxGroup from "./CheckboxGroup";

const meta = {
  title: "UI/Form/CheckboxGroup",
  component: CheckboxGroup,
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "Car",
        value: "Car",
      },
      {
        label: "Airplane",
        value: "Airplane",
      },
      {
        label: "Boat",
        value: "Boat",
      },
    ],
    name: "TravelBy",
    label: "Travel by",
  },
};
