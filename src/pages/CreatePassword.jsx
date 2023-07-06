import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CreatePassword = () => {
  const [navs, setNav] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const nav_data = [
    {
      value: "Organization Details",
      img: "./✅.png",
      link: "/",
    },
    {
      value: "Verification",
      img: "./✅.png",
      link: "/verify",
    },
    {
      value: "Create Password",
      img: "./✅.png",
      link: "/create+password",
    },
    {
      value: "Invite Team Members",
      img: "./✅.png",
      link: "/invite+team+memebers",
    },
  ];

  useEffect(() => {
    setNav(nav_data);
  }, []);

  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="side-menu">
          <ul>
            <div className="logo">
              <img src="./Ellipse 3.png" alt="" />
            </div>
            {navs.map((nav, index) => {
              const { value, img, link } = nav;
              return (
                <>
                  <ul key={index}>
                    <li>
                      <Link to={link}>
                        <div className="nav-btns">
                          <img
                            src={img}
                            alt=""
                            style={{ width: "1rem", height: "1rem" }}
                          />
                          <h2>{value}</h2>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </>
              );
            })}
          </ul>
        </div>
        <section className="details">
          <div className="detail-value">
            <div className="detail-header">
              <h2>Create Password</h2>
              <h5>Almost done, enter your new password & you are set</h5>
            </div>
            <form>
              <h6 style={{ display: "grid", placeItems: "left" }}>
                New Password
              </h6>
              <input
                type="password"
                placeholder="A00125789B"
                style={{ width: "160%" }}
                value={'godofwarkratosman'}
              />
              <h6>Confirm Password</h6>
              <input
                type="password"
                placeholder="Cfc@ubagroup.com"
                style={{ width: "160%" }}
                value={'godofwarkratosman'}
              />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  placeItems: "left",
                }}
              >
                <ul>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".6rem",
                    }}
                  >
                    <img
                      src="./✅.png"
                      alt=""
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    <h6>1 lowercase character</h6>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".6rem",
                    }}
                  >
                    <img
                      src="./✅.png"
                      alt=""
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    <h6>1 lowercase character</h6>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".6rem",
                    }}
                  >
                    <img
                      src="./✅.png"
                      alt=""
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    <h6>1 lowercase character</h6>
                  </li>
                </ul>
                <ul>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".6rem",
                    }}
                  >
                    <img
                      src="./✅.png"
                      alt=""
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    <h6>1 lowercase character</h6>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".6rem",
                    }}
                  >
                    <img
                      src="./✅.png"
                      alt=""
                      style={{ width: ".8rem", height: ".8rem" }}
                    />
                    <h6>1 lowercase character</h6>
                  </li>
                </ul>
              </div>

              <div style={{ paddingTop: "2.5rem" }}>
                <button style={{ width: "162%", paddingTop: "8px" }}>
                  continue
                </button>
              </div>

              <div className="login-details" style={{position:'relative', left:'6rem'}}>
                <h5>
                  Already have an account? <a href="#">Login</a>
                </h5>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CreatePassword;
