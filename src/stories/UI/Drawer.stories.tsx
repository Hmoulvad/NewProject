import { Button } from "@/components/UI/Button";
import Drawer from "@/components/UI/Drawer";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  argTypes: {
    isOpen: {
      control: {
        disable: true,
      },
    },
    onClose: {
      control: {
        disable: true,
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};
export default meta;

export const Component: StoryObj<typeof Drawer> = {
  name: "Drawer",
  render: () => <DrawerSimple />,
};

function DrawerSimple() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Button onClick={() => setIsOpen(true)}>Open drawer</Button>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Header title="Drawer" />
        <Drawer.Content>
          <Button>This is content</Button>
        </Drawer.Content>
        <Drawer.Footer>
          <Button onClick={() => setIsOpen(false)} fill>
            Cancel
          </Button>
          <Button fill>Save</Button>
        </Drawer.Footer>
      </Drawer>
    </section>
  );
}
