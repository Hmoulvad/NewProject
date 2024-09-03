import type { Meta, StoryObj } from "@storybook/react";

import Calender from "./Calender";

const meta = {
  title: "UI/Form/Calender",
  component: Calender,
} satisfies Meta<typeof Calender>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    label: "Pick a date",
  },
};
