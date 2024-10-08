import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "./TextArea";

const meta = {
  title: "UI/Form/TextArea",
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type something...",
    name: "name",
    label: "Your thoughts",
  },
};
