import { Typography } from "@/components/UI/Typography";
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

export const Component: StoryObj<typeof Typography> = {
  name: "Component",
  render: (args) => <Typography {...args} />,
};

export const Variants: StoryObj<typeof Typography> = {
  name: "Variants",
  args: undefined,
  render: () => (
    <section style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography as="h1" variant="display1">
        This is a display 1...
      </Typography>
      <Typography as="h2" variant="display2">
        This is a display 2...
      </Typography>
      <Typography as="h3" variant="display3">
        This is a display 3...
      </Typography>
      <Typography as="h4" variant="display4">
        This is a display 4...
      </Typography>
      <Typography as="h5" variant="display5">
        This is a display 5...
      </Typography>
      <Typography variant="body">This is a body...</Typography>
      <Typography variant="caption">This is a caption...</Typography>
    </section>
  ),
};
