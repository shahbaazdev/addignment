import React from "react";
import { Modal } from "antd";

export const ModalComp = ({
  handleOk,
  handleCancel,
  open,
  closable = true,
  children,
  width = 500,
  className,
}) => {
  return (
    <div className="Modal">
      <Modal
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={<></>}
        closable={closable}
        width={width}
        className={className}
        closeIcon={<></>}
      >
        {children}
      </Modal>
    </div>
  );
};
