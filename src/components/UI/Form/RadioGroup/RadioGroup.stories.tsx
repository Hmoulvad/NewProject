import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "./RadioGroup";

const meta = {
  title: "UI/Form/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

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
  },
};
