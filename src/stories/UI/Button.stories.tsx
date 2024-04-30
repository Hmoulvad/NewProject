import { Button } from "@/components/UI";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button content",
  },
};
export default meta;

export const First: StoryObj<typeof Button> = {
  name: "Button",
  render: (args) => <Button {...args} />,
};
