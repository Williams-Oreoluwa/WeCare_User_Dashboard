import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Verification = () => {
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
              <h2>Verification</h2>
              <h5>
                We sent an email to james@uba.com with instructions on how to
                verify your account
              </h5>
              <h6 style={{ color: "#552BCC", cursor: "pointer" }}>
                Change email address
              </h6>
            </div>
            <div>
              <div className="button-wrapper">
                <div className="button-container">
                  <button
                    style={{
                      width: "100%",
                      background: "#FFFFFF",
                      border: "1px solid #C2C2C2",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: ".9rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="./image 7.png"
                        alt=""
                        style={{ width: "2rem", height: "2rem" }}
                      />
                      Open Gmail
                    </div>
                  </button>
                </div>
                <div className="button-container">
                  <button
                    style={{
                      width: "100%",
                      background: "#FFFFFF",
                      border: "1px solid #C2C2C2",
                      color: "black",
                      paddingTop:'.6rem'
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: ".9rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="./image 9.png"
                        alt=""
                        style={{ width: "1.3rem", height: "1.3rem" }}
                      />
                      Open Email app
                    </div>
                  </button>
                </div>
                <div className="button-container">
                  <button
                    style={{
                      width: "100%",
                      background: "#FFFFFF",
                      border: "1px solid #C2C2C2",
                      color: "black",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: ".9rem",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="./image 8.png"
                        alt=""
                        style={{ width: "2rem", height: "2rem" }}
                      />
                      Open 
                    </div>
                  </button>
                </div>
              </div>

              <button style={{ width: "100%", paddingTop: "8px" }}>
                continue
              </button>
              <div className="login-details" style={{ left: "-1rem" }}>
                <h5>
                  Already have an account? <a href="#">Login</a>
                </h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Verification;
