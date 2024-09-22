import { createPortal } from "react-dom";
import React from "react";
import { modal } from "./modal.css.ts";

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  const renderRoot = document.querySelector(".portal-root");

  return renderRoot
    ? createPortal(<div className={modal}> {children}</div>, renderRoot)
    : null;
}
