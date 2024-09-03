import { Link } from "@/components/UI/Link";
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

export const Default: StoryObj<typeof Link> = {
  name: "Link",
  render: (args) => <Link {...args} />,
};
