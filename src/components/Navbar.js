import React from "react";
import AvatownLogo from "../assets/logo_avatown_manual_1_basi_inverse.png";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(prop) {
  const { total } = useSelector((state) => state.cart);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
        style={{
          background: "linear-gradient(to right, #480b48 70%, #741143)",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/market-place"
            style={{ marginRight: "110px" }}
          >
            <img src={AvatownLogo} alt="logo" style={{ height: "50px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-1 mb-lg-0"
              style={{
                width: "80%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/market-place"
                  style={{ fontSize: "32px" }}
                >
                  Go to Marketpage
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      backgroundColor: "#480b48",
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={prop.toggleTheme}
                  >
                    {prop.theme === "light" ? (
                      <FaMoon size={30} />
                    ) : (
                      <FaSun size={30} />
                    )}
                  </div>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control form-control-lg me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ backgroundColor: "white" }}
                    />
                  </form>
                </div>
              </li>
            </ul>
            <ul
              className="navbar-nav me-auto mb-1 mb-lg-0"
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <div className="container mt-3">
                    <div className="position-relative">
                      <IoIosNotificationsOutline size={30} />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        3
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <div className="container mt-3">
                    <div className="position-relative">
                      <FaShoppingCart size={30} />
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {total}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  <div className="container mt-3">
                    <div className="position-relative">
                      <CgProfile size={30} />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
