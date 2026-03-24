import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);

  const isProjectActive =
    location.pathname === "/project" ||
    location.pathname === "/project/visit-aple-ghar" ||
    location.pathname === "/project/toy-distribution";

  return (
    <div className="top_header" id="home">
      <nav className="navbar navbar-default navbar-fixed-top custom-navbar">
        <div className="custom-nav-container">
          <div className="nav_top_fx_w3layouts_agileits custom-nav-wrap">
            <div className="navbar-header custom-brand-wrap">
              <button
                type="button"
                className="navbar-toggle collapsed"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <Link className="navbar-brand custom-brand" to="/">
                <img
                  src="/images/logo2.png"
                  alt="Love and Care Logo"
                  className="brand-logo"
                />

                <div className="brand-text">
                  <span className="brand-title">LOVE AND CARE</span>
                  <span className="desc">
                    Every Helping Hand Creates a Brighter Tomorrow
                  </span>
                </div>
              </Link>
            </div>

            <div
              className={`collapse navbar-collapse custom-menu ${
                mobileOpen ? "in" : ""
              }`}
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav custom-nav-list">
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/" onClick={() => setMobileOpen(false)}>
                    Home
                  </Link>
                </li>

                <li className={location.pathname === "/about" ? "active" : ""}>
                  <Link to="/about" onClick={() => setMobileOpen(false)}>
                    About
                  </Link>
                </li>

                <li
                  className={`dropdown custom-dropdown ${
                    isProjectActive ? "active" : ""
                  } ${projectOpen ? "open" : ""}`}
                  onMouseEnter={() => setProjectOpen(true)}
                  onMouseLeave={() => setProjectOpen(false)}
                >
                  <button
                    type="button"
                    className="dropdown-toggle custom-dropdown-btn"
                    onClick={() => setProjectOpen(!projectOpen)}
                  >
                    Project <span className="caret"></span>
                  </button>

                  <ul
                    className={`dropdown-menu custom-dropdown-menu ${
                      projectOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <Link
                        to="/project"
                        onClick={() => {
                          setMobileOpen(false);
                          setProjectOpen(false);
                        }}
                      >
                        Visit Aple Ghar Orphanage & Old Age Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/project2"
                        onClick={() => {
                          setMobileOpen(false);
                          setProjectOpen(false);
                        }}
                      >
                        Visit Shri Chhatrapati Pratishthan's Nivasi Matimand Vidyalaya
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className={location.pathname === "/event" ? "active" : ""}>
                  <Link to="/event" onClick={() => setMobileOpen(false)}>
                    Event
                  </Link>
                </li>

                <li className={location.pathname === "/team" ? "active" : ""}>
                  <Link to="/team" onClick={() => setMobileOpen(false)}>
                    Team
                  </Link>
                </li>

                <li className={location.pathname === "/contact" ? "active" : ""}>
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="clearfix"></div>
    </div>
  );
};

export default Navbar;