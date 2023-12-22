"use client";

import React from "react";
import Modal, { ModalOperations } from "./index";
import Button from "../Button";
import Typography from "../Typography";

export default function ToggleModalExample() {
  const modalRef = React.useRef<ModalOperations>(null);

  return (
    <>
      <Button variant="secondary" onClick={() => modalRef.current?.open()}>
        Open Modal
      </Button>
      <Modal variant="center" ref={modalRef}>
        <Typography variant="display4" inverted>
          This is some content of the Modal
        </Typography>
      </Modal>
    </>
  );
}
