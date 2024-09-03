import type { Meta, StoryObj } from "@storybook/react";

import AnimatePresence from "./AnimatePresence";
import { Button } from "../Button";

const meta = {
  title: "UI/AnimatePresence",
  component: AnimatePresence,
} satisfies Meta<typeof AnimatePresence>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isVisible: true,
    children: <Button>You can see me</Button>,
  },
};
