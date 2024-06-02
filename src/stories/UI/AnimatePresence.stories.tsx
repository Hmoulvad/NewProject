import { Button } from "@/components/UI";
import AnimatePresence from "@/lib/AnimatePresence";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnimatePresence> = {
  title: "UI/AnimatePresence",
  component: AnimatePresence,
};
export default meta;

export const First: StoryObj<typeof AnimatePresence> = {
  name: "AnimatePresence",
  render: (args) => (
    <AnimatePresence as="section" {...args}>
      <Button>You can see me</Button>
    </AnimatePresence>
  ),
};
