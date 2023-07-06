import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Organization = () => {
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
              <img src="/Ellipse-3.png" alt="" />
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
              <h2>Organization Details</h2>
              <h5>Enter credentials for your organization</h5>
            </div>
            <form>
              <h6 style={{ display: "grid", placeItems: "left" }}>
                Company Name
              </h6>
              <input type="text" placeholder="A00125789B" />
              <h6>Email address</h6>
              <input type="text" placeholder="Cfc@ubagroup.com" />
              <h6>Mobile no</h6>
              <input type="text" placeholder="0700 225 5822" />
              <h6>Company Address</h6>
              <div className="last-input">
                <input type="text" placeholder="57 Marina, Lagos Island, Lagos, Nigeria" />
              </div>

              <button style={{paddingTop:".6rem"}}>continue</button>
              <div className="login-details">
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

export default Organization;
