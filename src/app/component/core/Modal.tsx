'use client';
import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";


function ActionModal({ children, width, headerText, onBeforeClose }: { children: React.ReactNode, width: any, headerText: any, onBeforeClose: any }, ref: any) {
  const [showModal, setShowModal] = useState(false);

  useImperativeHandle(ref, () => ({
    show: (toggle: boolean) => {
      if (onBeforeClose && !toggle) {
        onBeforeClose();
      }
      setShowModal(toggle);
    },
  }));

  const footer = (
    <div>
      <Button
        label="Yes"
        icon="pi pi-check"
        onClick={() => setShowModal(false)}
      />
      <Button
        label="No"
        icon="pi pi-times"
        onClick={() => setShowModal(false)}
      />
    </div>
  );
  return (
    <div className="z-50" ref={ref} onClick={(e) => e.stopPropagation()}>
      <Dialog
        header={<h5 className="text-lg font-semibold ">{headerText}</h5>}
        // footer={footer}
        visible={showModal}
        style={{ width: width ?? "50vw" }}
        modal
        onHide={() => {
          if (onBeforeClose) {
            onBeforeClose();
            setShowModal(false);
          } else {
            setShowModal(false);
          }
        }}
      >
        {children}
      </Dialog>
    </div>

  );
}

export default forwardRef(ActionModal);
