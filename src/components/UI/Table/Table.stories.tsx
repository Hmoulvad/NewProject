import TableSkeleton from "@/components/UI/Table/Table.Skeleton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TableSkeleton> = {
  title: "UI/Table",
  component: TableSkeleton,
};
export default meta;

// export const Component: StoryObj<typeof Table> = {
//   name: "TableNew",
//   render: () => <TableExample />,
// };

// export function TableExample() {
//   return (
//     <Table
//       data={orderOverview}
//       columns={[
//         {
//           label: "Leveringsdato",
//           key: "deliveryDate",
//           render: (row) => row.deliveryDate.toLocaleString(),
//         },
//         {
//           label: "Bestillingsdato",
//           key: "createdDate",
//           render: (row) => row.createdDate.toLocaleString(),
//         },
//         {
//           label: "Bestilt af",
//           key: "referencePerson",
//         },
//         {
//           label: "Webordre nr.",
//           key: "customerReference",
//         },
//         {
//           label: "Ordrereference",
//           key: "referenceNumber",
//         },
//         {
//           label: "Faktura nr.",
//           key: "erpReference",
//         },
//       ]}
//     />
//   );
// }

export const Loading: StoryObj<typeof TableSkeleton> = {
  name: "Loading",
  render: () => <TableSkeleton />,
};
