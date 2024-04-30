import { Typography } from "@/components/UI";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  args: {
    variant: "body",
    inverted: false,
    children: "Typography Component",
  },
};
export default meta;

export const First: StoryObj<typeof Typography> = {
  name: "Typography",
  render: (args) => <Typography {...args} />,
};
