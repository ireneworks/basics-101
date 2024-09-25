import React from "react";
import Divider from "../../components/divider/Divider";
import { description, pageLayout } from "./pageLayout.css";

interface Props {
  title: string;
  desc: string;
  children: React.ReactNode;
}

export default function PageLayout({ title, desc, children }: Props) {
  return (
    <div className={pageLayout}>
      <div>
        <h1>{title}</h1>
        <p className={description}>{desc}</p>
      </div>
      <Divider />
      {children}
    </div>
  );
}
