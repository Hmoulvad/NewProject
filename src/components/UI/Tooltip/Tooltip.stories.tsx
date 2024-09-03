import { Tooltip } from "@/components/UI/Tooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip,
  args: {
    message: "Tooltip Message",
    children: "Tooltip",
  },
};
export default meta;

export const Default: StoryObj<typeof Tooltip> = {
  render: (args) => (
    <section style={{ padding: "1rem" }}>
      <Tooltip {...args} />
    </section>
  ),
};
