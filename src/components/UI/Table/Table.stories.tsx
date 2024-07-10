import TableSkeleton from "@/components/UI/Table/Table.Skeleton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableSkeleton> = {
  title: "UI/Table",
  component: TableSkeleton,
};
export default meta;

export const Loading: StoryObj<typeof TableSkeleton> = {
  name: "Loading",
  render: () => <TableSkeleton />,
};
