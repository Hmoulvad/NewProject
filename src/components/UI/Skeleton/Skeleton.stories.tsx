import { Skeleton } from "@/components/UI/Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Skeleton> = {
  title: "UI/Skeleton",
  component: Skeleton,
};
export default meta;

export const Default: StoryObj<typeof Skeleton> = {
  args: undefined,
  render: (args) => (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        border: 1,
        padding: "1rem",
        gap: "0.5rem",
      }}
    >
      <Skeleton height={200} width={200} {...args} />

      <Skeleton mimic="display3" width={150} />

      <Skeleton mimic="display5" width={100} />

      <div>
        <Skeleton mimic="body" width={200} />
        <Skeleton mimic="body" width={150} />
        <Skeleton mimic="body" width={100} />
      </div>
    </section>
  ),
};
