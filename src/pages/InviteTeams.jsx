import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const InviteTeams = () => {
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
              <h2>Invite team members</h2>
              <h5>Add other members to the team </h5>
            </div>
            <form>
              <h6 style={{ display: "grid", placeItems: "left" }}>
                Email address
              </h6>
              <div className="invite" >
                <input
                  type="text"
                  placeholder="marketing@ubagroup.com"
                  style={{ width: "98%" }}
                />
                <span style={{padding:'.3rem .5rem', background:'#F3EFFF', fontSize:'1.5rem', borderRadius:'2px'}}>
                <i class="ri-add-fill"></i>
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  flexDirection: "column",
                }}
              >
                <div>
                  <h4>OR</h4>
                </div>

                <div className="invite-link" style={{ textAlign: "center" }}>
                  <h3>Invite link</h3>
                  <h5 style={{ fontWeight: "100" }}>
                    https://www.wecare.com/createaccount/inviteteammembers/fileXMTb9RbdMj8XJY1XCcRbLS/WeCare?node-{" "}
                    <br />
                    id=321%3A358&t=oDKRFAqux17XvMPg-0
                  </h5>
                  <img
                    src="./Group 3577.png"
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>

              <div style={{ paddingTop: "2.5rem" }}>
                <button style={{ width: "98%", paddingTop: "8px" }}>
                  Create an account
                </button>
              </div>
              <div
                className="login-details"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  left: "1rem",
                }}
              >
                <h5 style={{ fontWeight: "100", cursor: "pointer" }}>
                  Continue without adding members
                </h5>
              </div>
            </form>
          </div>
        </section>
      </div>
    </section>
  );
};

export default InviteTeams;
