import React from "react";
import {
  childMenu,
  childMenuActive,
  footer,
  header,
  layout,
  listItems,
  listItemTitle,
  logo,
  main,
  nav,
  navMobile,
  navMobileContainer,
  navMobileHeader,
  navMobileMenuButton,
} from "./appLayout.css";
import { useLocation, useNavigate } from "react-router-dom";
import { routePath } from "../../constants/routePath.contstants.ts";
import useMediaQuery from "../../../hooks/useMediaQuery.ts";
import MenuIcon from "../../components/icons/MenuIcon.tsx";
import Modal from "../../components/modal/Modal.tsx";
import XIcon from "../../components/icons/XIcon.tsx";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  const { isMobile } = useMediaQuery();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isOpen, toggleIsOpen] = React.useState(false);

  return (
    <>
      <div className={layout}>
        {!isMobile ? (
          <nav className={nav}>
            <ul>
              <li className={header}>
                <button
                  className={logo}
                  onClick={() => navigate(routePath.gateway)}
                >
                  the Basics 101
                </button>
                <h6>도구리의 소프트웨어 엔지니어가 되는 모험에 필요한 인벤</h6>
              </li>
              {contents.map(({ title, menus, routes }, index) => (
                <li key={index}>
                  <div className={listItems}>
                    <p className={listItemTitle}>{title}</p>
                    {menus.map((item, index) => (
                      <button
                        key={index}
                        className={
                          pathname === routes[index]
                            ? childMenuActive
                            : childMenu
                        }
                        onClick={() => {
                          if (!routes[index]) return null;
                          navigate(routes[index]);
                        }}
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
        ) : (
          <nav className={navMobile}>
            <button
              className={logo}
              onClick={() => navigate(routePath.gateway)}
            >
              the Basics 101
            </button>
            <button
              className={navMobileMenuButton}
              onClick={() => toggleIsOpen(!isOpen)}
            >
              <MenuIcon color={"gray900"} width={32} height={32} />
            </button>
          </nav>
        )}
        <main className={main}>{children}</main>
      </div>
      {isOpen && (
        <Modal>
          <div className={navMobileContainer}>
            <div className={navMobileHeader}>
              <button
                className={logo}
                onClick={() => {
                  navigate(routePath.gateway);
                  toggleIsOpen(!isOpen);
                }}
              >
                the Basics 101
              </button>
              <button
                className={navMobileMenuButton}
                onClick={() => toggleIsOpen(!isOpen)}
              >
                <XIcon color={"gray900"} width={32} height={32} />
              </button>
            </div>
            {contents.map(({ title, menus, routes }, index) => (
              <div key={index} className={listItems}>
                <p className={listItemTitle}>{title}</p>
                {menus.map((item, index) => (
                  <button
                    key={index}
                    className={
                      pathname === routes[index] ? childMenuActive : childMenu
                    }
                    onClick={() => {
                      if (!routes[index]) return null;
                      navigate(routes[index]);
                      toggleIsOpen(!isOpen);
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            ))}
            <footer className={footer}>
              <h6>© 2024 the Basics 101</h6>
              <h6>hello@ireneworks.com</h6>
            </footer>
          </div>
        </Modal>
      )}
    </>
  );
};

const contents = [
  {
    title: "리액트 React",
    menus: ["React는 어떻게 랜더링 할까?"],
    routes: [],
  },
  {
    title: "객체지향 OOP",
    menus: [
      "프론트엔드의 SOLID 원칙 활용법",
      "데이터 중심 설계 패턴과 친해지기",
    ],
    routes: [routePath.solidPrinciple],
  },
];
