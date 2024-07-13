import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./Accordion";

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Accordion Title",
    children: "Accordion Content",
  },
};
