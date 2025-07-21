import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { useLocation } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { MdPerson, MdMenu, MdClose, MdArrowDropDown } from "react-icons/md";

import Cart from "../pages/cart";
import { AppFilterContext } from "../context/filterdatacontext";
import { AppStoreContext } from "../context/createcontext";

const NavBar = () => {
  const { data, changedata } = useContext(AppStoreContext);
  const { filteredData, changeFilterData } = useContext(AppFilterContext);
  const { checkedData, changecheckedData } = useContext(AppFilterContext);

  //console.log(checkedData);
  const Filter = (item) => {
    console.log(item.name);
    let arr = [];
    let newcheck = [];
    checkedData.map((x) => {
      if (x.type === item.name) {
        console.log(x.checked);
        x.checked = "true";
        newcheck.push(x);
      } else {
        newcheck.push(x);
        x.checked = "false";
      }
    });
    changecheckedData(newcheck);
    data.map((data) => {
      if (item.name === data.type) {
        arr.push(data);
      }
    });
    changeFilterData(arr);
  };
  const location = useLocation();
  //console.log(location.pathname);
  const [hideTabs, sethideTabs] = useState(false);
  const [Tabs, setTabs] = useState(false);
  const [CartTabs, setCartTabs] = useState(false);

  const [navitmes, setnavitmes] = useState([
    { name: "Home", path: "/", selected: true, length: "1" },
    { name: "Shop", path: "/shop", selected: true, length: "2" },
    { name: "About Us", path: "/about", selected: false, length: "3" },
    { name: "Recipe", path: "/recipe", selected: false, length: "4" },
    { name: "Contact Us", path: "/contact", selected: false, length: "5" },
  ]);
  const [navicons, setnavicons] = useState([
    { name: "Search", path: "/search", length: "1" },
    { name: "Account", path: "/information", length: "2" },
    { name: "Cart", path: "", length: "3" },
  ]);
  const [navdropdown, setnavdropdown] = useState([
    { name: "Beef", length: "1" },
    { name: "Lamb", length: "2" },
    { name: "Chicken", length: "3" },
    { name: "Birds", length: "4" },
  ]);
  const [navdrop, setnavdrop] = useState([
    { name: "Beef", length: "1" },
    { name: "Lamb", length: "2" },
    { name: "Chicken", length: "3" },
    { name: "Birds", length: "4" },
  ]);

  return (
    <div className="fixed-top nav_body">
      <div className="web">
        <div className="nav_btn">
          <div className="">
            {navitmes.map((item) => {
              return (
                <Link to={item.path} className={`nav_btn`}>
                  {item.name}
                  {item.name === "Shop" && (
                    <MdArrowDropDown onClick={() => sethideTabs(!hideTabs)} />
                  )}
                  {hideTabs && item.name === "Shop" && (
                    <div className="box w-100 nav_web_dropdown">
                      <div className="row m-0 p-0 ">
                        <div className="col-md-6 ">
                          <div className="row">
                            {navdrop.map((item) => {
                              return (
                                <div className="col-md-4">
                                  <Link className={`link_2 `}>
                                    <span
                                      onClick={(e) => {
                                        Filter(item);
                                        sethideTabs(false);
                                      }}
                                    >
                                      {item.name}
                                    </span>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div col-md-6>
                          <img className="img_dropdown" src={logo} alt="" />
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="icons ">
          <div className="">
            {navicons.map((item) => {
              return (
                <Link to={item.path} className={`icons nav_btn `}>
                  {item.name}
                  {item.name === "Search" && <FaSearch className="icon_clr" />}
                  {item.name === "Account" && <MdPerson className="icon_clr" />}
                  {item.name === "Cart" && (
                    <FaCartPlus
                      onClick={() => {
                        setCartTabs(true);
                      }}
                      className="icon_clr"
                    />
                  )}
                  {CartTabs && (
                    <div className="cart_box cart_box_web">
                      <div className="row ">
                        <div className="col-md-5">
                          <h3>Shopping Cart</h3>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-2">
                          <button
                            className="btn"
                            onClick={() => setCartTabs(false)}
                          >
                            <MdClose className="close_icon" />
                          </button>
                        </div>
                      </div>
                      <Cart />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="nav_btn">
          <MdMenu
            className="dropdown_menu"
            onClick={() => sethideTabs(!hideTabs)}
          />
          {hideTabs && (
            <div className=" nav_dropdown ">
              {navitmes.map((item) => {
                return (
                  <Link
                    to={item.path}
                    // onClick={() => sethideTabs(false)}
                    className={`${
                      location.pathname === item.path ? "navclr" : ""
                    } link `}
                  >
                    {item.name}{" "}
                    {item.name === "Shop" && (
                      <MdArrowDropDown onClick={() => setTabs(!Tabs)} />
                    )}
                    {Tabs && item.name === "Shop" && (
                      <div className=" nav_dropdown_2">
                        {navdropdown.map((item) => {
                          return (
                            <Link className={`link_2 `}>
                              <span
                                onClick={(e) => {
                                  Filter(item);
                                  sethideTabs(false);
                                }}
                              >
                                {item.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="icons_mobile">
          <div className="nav_btn icons">
            <FaSearch />
          </div>
          <div className="nav_btn icons">
            <FaCartPlus
              onClick={() => {
                setCartTabs(true);
              }}
            />
            {CartTabs && (
              <div className="cart_box cart_box_web">
                <div className="row ">
                  <div className="col-md-5">
                    <h3>Shopping Cart</h3>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-2">
                    <button className="btn" onClick={() => setCartTabs(false)}>
                      <MdClose className="close_icon" />
                    </button>
                  </div>
                </div>
                <Cart />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
