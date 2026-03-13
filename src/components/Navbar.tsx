import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <div className="top_header" id="home">
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="nav_top_fx_w3layouts_agileits">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              <div className="brand-text">
                <span className="brand-title">Love and Care</span>
                <span className="desc">Every Helping Hand Creates a Brighter Tomorrow</span>
              </div>
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === "/about" ? "active" : ""}>
                <Link to="/about">About</Link>
              </li>
              <li className={location.pathname === "/project" ? "active" : ""}>
                <Link to="/project">Project</Link>
              </li>
              <li className={location.pathname === "/event" ? "active" : ""}>
                <Link to="/event">Event</Link>
              </li>
              <li className={location.pathname === "/team" ? "active" : ""}>
                <Link to="/team">Team</Link>
              </li>
              <li className={location.pathname === "/contact" ? "active" : ""}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="clearfix"></div>
    </div>
  );
};

export default Navbar;
