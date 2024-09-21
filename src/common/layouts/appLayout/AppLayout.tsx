import React from "react";
import {
  childMenu,
  footer,
  header,
  layout,
  listItems,
  listItemTitle,
  logo,
  main,
  nav,
} from "./appLayout.css";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={layout}>
      <nav className={nav}>
        <ul>
          <li className={header}>
            <button className={logo} onClick={() => navigate("/")}>
              the Basics 101
            </button>
            <h6>
              도구리의 험난한 소프트웨어 엔지니어가 되는 모험에 필요한 인벤
            </h6>
          </li>
          {contents.map(({ title, menus, route }, index) => (
            <li key={index}>
              <div className={listItems}>
                <p className={listItemTitle}>{title}</p>
                {menus.map((item, index) => (
                  <button
                    key={index}
                    className={childMenu}
                    onClick={() => navigate(route)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </li>
          ))}
          <li>
            <footer className={footer}>
              <h6>© 2024 the Basics 101</h6>
              <h6>hello@ireneworks.com</h6>
            </footer>
          </li>
        </ul>
      </nav>
      <main className={main}>{children}</main>
    </div>
  );
};

const contents = [
  {
    title: "객체지향 OOP",
    menus: ["SOLID 원칙 톺아보기"],
    route: "/solidPrinciple",
  },
];
