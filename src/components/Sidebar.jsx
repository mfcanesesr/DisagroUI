import styled from "styled-components";
import logo from "../assets/disagro-logo.ico";
import { NavLink } from "react-router-dom";
import { v } from "../styles/Variables";
import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import {
  CheckBoxOutlined,
  KeyboardArrowLeft,
  PinOutlined,
  RadioButtonCheckedOutlined,
  TabOutlined,
  ToggleOffOutlined,
  ViewModuleOutlined,
  DevicesFoldOutlined,
  SourceOutlined,
  NoteAddOutlined,
  WindPowerOutlined
} from "@mui/icons-material";

export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [subMenuOpen, setSubMenuOpen] = useState({});

  const toggleSubMenu = (label) => {
    setSubMenuOpen((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const { setTheme, theme } = useContext(ThemeContext);

  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="Sidebarbutton" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <KeyboardArrowLeft />
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {linksArray.map(({ label, icon, to, subMenu }) => (
        <div className="LinkContainer" key={label}>
          <div onClick={() => toggleSubMenu(label)}>
            <NavLink to={to} className={({ isActive }) => `Links${isActive ? ` active` : ``}`}>
              <div className="Linkicon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          </div>
          {subMenu && subMenuOpen[label] && (
            <div className="SubMenuContainer">
              {subMenu.map(({ label: subLabel, to: subTo }) => (
                <NavLink key={subLabel} to={subTo} className="SubMenuLink">
                  {subLabel}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#region Data links
const linksArray = [
  {
    label: "Brand elements",
    icon: <WindPowerOutlined />,
    to: "/branElements",
  },
  {
    label: "Components",
    icon: <SourceOutlined />,
    to: "/components",
    subMenu: [
      { label: "Toggle", to: "/toggle" },
      { label: "Tabs", to: "/tabs" },
      { label: "Radio Button", to: "/radioButton" },
      { label: "Check Box", to: "/checkbox" },
      { label: "Number Input", to: "/numberInput" },
      { label: "Content Switcher", to: "/contentSwitcher" },
      { label: "Accordion", to: "/accordion" },
      { label: "Button", to: "/button" },
      { label: "Loading", to: "/loading" },
      { label: "Text Area", to: "/textarea" },
    ],
  },
  {
    label: "Modules",
    icon: <ViewModuleOutlined />,
    to: "/modules",
  },
  {
    label: "Templates",
    icon: <DevicesFoldOutlined />,
    to: "/templates",
  },
  {
    label: "Borradores",
    icon: <NoteAddOutlined />,
    to: "/borradores",
  },
];
//#endregion

//#region STYLED COMPONENTS
const Container = styled.div`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .Sidebarbutton {
    position: absolute;
    top: 20px;
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3}, 0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(0.8)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 16px 0;
      color: ${(props) => props.theme.text};
      height: 50px;
      .Linkicon {
        padding: 8px 16px;
        display: flex;
        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .SubMenuContainer {
    padding-left: 30px;
    .SubMenuLink {
      display: block;
      padding: 8px 0;
      color: ${(props) => props.theme.text};
      text-decoration: none;
      transition: color 0.3s; /* Agregar transición para el cambio de color */
    }
    .SubMenuLink:hover {
      color: ${(props) => props.theme.bg4}; /* Cambiar el color al hacer hover */
    }
    &.active .SubMenuLink {
      color: ${(props) => props.theme.bg4}; /* Mantener el color verde cuando está seleccionado */
    }
  }  
  .Themecontent {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: calc(100% - 40px);
    transition: all 0.3s;
  }
  .Togglecontent {
    margin: ${({ isOpen }) => (isOpen ? `auto 40px` :` auto 15px`)};
    width: 36px;
    height: 20px;
    border-radius: 10px;
    transition: all 0.3s;
    position: relative;
    .theme-container {
      background-blend-mode: multiply, multiply;
      transition: 0.4s;
      .grid {
        display: grid;
        justify-items: center;
        align-content: center;
        height: 100vh;
        width: 100vw;
        font-family: "Lato", sans-serif;
      }
      .demo {
        font-size: 32px;
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
          .theme-swither {
            opacity: 0;
            width: 0;
            height: 0;
            &:checked + .slider:before {
              left: 4px;
              content: "🌑";
              transform: translateX(26px);
            }
          }
          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${({ themeUse }) =>
              themeUse === "light" ? "lightcheckbox" : "checkbox"};
            transition: 0.4s;
            &::before {
              position: absolute;
              content: "☀️";
              height: 0px;
              width: 0px;
              left: -10px;
              top: 16px;
              line-height: 0px;
              transition: 0.4s;
            }
            &.round {
              border-radius: 34px;
              &::before {
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

