import { Button } from "@/components/UI/Button";
import { Modal } from "@/components/UI/Modal";
import { Typography } from "@/components/UI/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useState } from "react";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    variant: {
      control: "select",
      options: ["center", "sidebar"],
    },
  },
  args: {
    variant: "center",
  },
};
export default meta;

export const First: StoryObj<typeof Modal> = {
  name: "Modal",
  render: (args) => <OpenModal {...args} />,
};

function OpenModal({ variant }: ComponentProps<typeof Modal>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="secondary" onClick={() => setIsOpen((prev) => !prev)}>
        Open Modal
      </Button>
      <Modal variant={variant} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Typography inverted>This is content within the Modal</Typography>
      </Modal>
    </>
  );
}
