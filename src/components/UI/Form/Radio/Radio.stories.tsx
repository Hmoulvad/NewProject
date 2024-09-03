import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./Radio";

const meta = {
  title: "UI/Form/Radio",
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "name",
    label: "label",
    value: "value",
  },
};
