import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import DialogContent from "./Content";
import { Dialog } from "./Dialog";
import DialogFooter from "./Footer";
import DialogHeader from "./Header";

const meta = {
  title: "UI/Dialog",
  component: Dialog,
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
} satisfies Meta<typeof Dialog>;

export default meta;

export const Default: StoryObj<typeof Dialog> = {
  render: () => <DialogSimple />,
};

function DialogSimple() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeader title="Dialog" />
        <DialogContent>
          <Button>This is content</Button>
        </DialogContent>
        <DialogFooter>
          <Button fill variant="secondary">
            Cancel
          </Button>
          <Button fill>Save</Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

export const WithTabs: StoryObj<typeof Dialog> = {
  render: () => <DialogTabs />,
};

function DialogTabs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);

  return (
    <section>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {!isSecondActive ? (
          <>
            <DialogHeader title="First tab" />
            <DialogContent>
              <Button onClick={() => setIsSecondActive(true)}>
                Open second tab
              </Button>
            </DialogContent>
            <DialogFooter>
              <Button fill variant="secondary">
                Cancel
              </Button>
              <Button fill>Save</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader title="Second tab" />
            <DialogContent>
              <Button onClick={() => setIsSecondActive(false)}>
                Open first tab
              </Button>
            </DialogContent>
            <DialogFooter>
              <Button fill variant="secondary">
                Cancel
              </Button>
              <Button fill disabled>
                Save
              </Button>
            </DialogFooter>
          </>
        )}
      </Dialog>
    </section>
  );
}
