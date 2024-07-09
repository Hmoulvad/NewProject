import { Button } from "@/components/UI/Button";
import { Typography } from "@/components/UI/Typography";
import { ArrowRight, Basket } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    variant: "secondary",
    size: "medium",
    children: "Button",
  },
};
export default meta;

export const Component: StoryObj<typeof Button> = {
  name: "Button",
  render: (args) => <Button {...args} />,
};

export const Variants: StoryObj<typeof Button> = {
  name: "Variants",
  args: undefined,
  render: () => (
    <article style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography variant="display4">Variants/Size</Typography>
        <Button size="small">This is a primary small button</Button>
        <Button variant="secondary" size="small">
          This is a secondary small button
        </Button>
        <Button>This is a primary medium button</Button>
        <Button variant="secondary">This is a secondary medium button</Button>
        <Button size="large">This is a primary large button</Button>
        <Button variant="secondary" size="large">
          This is a secondary large button
        </Button>
      </section>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography variant="display4">Variants/WithIcon</Typography>
        <Button size="small" icon={<ArrowRight />}>
          This is a secondary small button with icon
        </Button>
        <Button size="small" icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
        <Button icon={<ArrowRight />}>
          This is a primary medium with icon button
        </Button>
        <Button icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
        <Button size="large" icon={<ArrowRight />}>
          This is a primary medium with icon button
        </Button>
        <Button size="large" icon={<ArrowRight />} variant="secondary">
          This is a secondary medium button with icon
        </Button>
      </section>
      <section
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography variant="display4">Variants/OnlyIcon</Typography>
        <Button size="small" icon={<Basket />} />
        <Button size="small" variant="secondary" icon={<Basket />} />
        <Button icon={<Basket />} />
        <Button variant="secondary" icon={<Basket />} />
        <Button size="large" icon={<Basket />} />
        <Button size="large" variant="secondary" icon={<Basket />} />
      </section>
    </article>
  ),
};
