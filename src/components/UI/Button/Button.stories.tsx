import type { Meta, StoryObj } from "@storybook/react";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Click me",
    icon: <ArrowRight />,
  },
};
