import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2 className="footer-heading-footer">Love and Care</h2>
            <p>At Love and Care Foundation, we believe in the power of small acts of kindness to create big change. Join us in making a difference.</p>
            <ul className="ftco-footer-social-footer">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2 className="footer-heading-footer">Quick Links</h2>
            <ul className="list-unstyled-footer">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/event">Event</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h2 className="footer-heading-footer">Have a Question?</h2>
            <div className="block-23-footer">
              <ul>
                <li>
                  <span className="icon"><i className="fa fa-map-marker"></i></span>
                  <span className="text">Navale IT Zone, Office No. 501, 5th Floor, A-Wing, Near Navale Bridge, Narhe, Pune - 411041</span>
                </li>
                <li>
                  <span className="icon"><i className="fa fa-phone"></i></span>
                  <span className="text">+91 9168627258</span>
                </li>
                <li>
                  <span className="icon"><i className="fa fa-paper-plane"></i></span>
                  <span className="text">loveandcare.welfare@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright-footer">
              Copyright &copy; {new Date().getFullYear()} All rights reserved | Love and Care Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
