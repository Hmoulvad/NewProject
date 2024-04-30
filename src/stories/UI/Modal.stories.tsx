import { Button, Modal, Typography } from "@/components/UI";
import { ModalOperations } from "@/components/UI/Modal/Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, useRef } from "react";

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
  const ref = useRef<ModalOperations>(null);

  return (
    <>
      <Button variant="secondary" onClick={() => ref.current?.open()}>
        Open Modal
      </Button>
      <Modal variant={variant} ref={ref}>
        <Typography inverted>This is content within the Modal</Typography>
      </Modal>
    </>
  );
}
