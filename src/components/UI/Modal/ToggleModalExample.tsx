"use client";

import { useRef } from "react";
import { Typography } from "..";
import { Button } from "../Button";
import Modal, { ModalOperations } from "./Modal";

export default function ToggleModalExample() {
  const sidebarModalRef = useRef<ModalOperations>(null);
  const centerModalRef = useRef<ModalOperations>(null);

  return (
    <>
      <Button
        variant="secondary"
        onClick={() => sidebarModalRef.current?.open()}
      >
        Open Sidebar Modal
      </Button>
      <Modal variant="sidebar" ref={sidebarModalRef}>
        <Typography variant="display4" inverted>
          This is some content of the Modal
        </Typography>
      </Modal>
      <Button
        variant="secondary"
        onClick={() => centerModalRef.current?.open()}
      >
        Open Center Modal
      </Button>
      <Modal variant="center" ref={centerModalRef}>
        <Typography variant="display4" inverted>
          This is some content of the Modal
        </Typography>
      </Modal>
    </>
  );
}
