import { Link } from "@/components/UI";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "UI/Link",
  component: Link,
  args: {
    href: "#",
    children: "Link",
  },
};
export default meta;

export const First: StoryObj<typeof Link> = {
  name: "Link",
  render: (args) => <Link {...args} />,
};
