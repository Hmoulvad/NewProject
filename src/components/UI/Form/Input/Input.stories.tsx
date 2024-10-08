import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "UI/Form/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search anything...",
    type: "text",
    name: "search",
    label: "Your dreams",
  },
};
