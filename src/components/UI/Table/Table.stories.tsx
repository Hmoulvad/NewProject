import TableSkeleton from "@/components/UI/Table/Table.Skeleton";
import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
};
export default meta;

export const Loading: StoryObj<typeof Table> = {
  render: () => <TableSkeleton />,
};
