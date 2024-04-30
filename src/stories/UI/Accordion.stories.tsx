import { Accordion } from "@/components/UI";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  args: {
    title: "Accordion",
    children: "Accordion Content",
  },
};
export default meta;

export const First: StoryObj<typeof Accordion> = {
  name: "Component",
  render: (args) => <Accordion {...args} />,
};
