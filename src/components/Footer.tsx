import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer-footer {
          background: #050505;
          color: #ffffff;
          padding: 70px 0 25px;
          margin-top: 0;
        }

        .footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-row {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.2fr;
          gap: 50px;
          align-items: flex-start;
        }

        .footer-col h2.footer-heading-footer {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 22px;
          line-height: 1.2;
        }

        .footer-about-text {
          color: rgba(255, 255, 255, 0.82);
          font-size: 19px;
          line-height: 1.9;
          margin: 0 0 26px;
          max-width: 430px;
        }

        .ftco-footer-social-footer {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ftco-footer-social-footer li {
          list-style: none;
        }

        .ftco-footer-social-footer a {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .ftco-footer-social-footer a:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .footer-social-icon {
          width: 80px;
          height: 80px;
          object-fit: contain;
          display: block;
        }

        .list-unstyled-footer {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .list-unstyled-footer li {
          margin-bottom: 14px;
        }

        .list-unstyled-footer li a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 18px;
          line-height: 1.6;
          transition: all 0.3s ease;
        }

        .list-unstyled-footer li a:hover {
          color: #00d9a6;
          padding-left: 4px;
        }

        .block-23-footer ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .block-23-footer li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 18px;
        }

        .block-23-footer .icon {
          color: #00d9a6;
          font-size: 20px;
          line-height: 1.4;
          min-width: 22px;
          margin-top: 2px;
        }

        .block-23-footer .text,
        .block-23-footer .text a {
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          line-height: 1.7;
          text-decoration: none;
          word-break: break-word;
        }

        .block-23-footer .text a:hover {
          color: #00d9a6;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 40px;
          padding-top: 22px;
          text-align: center;
        }

        .copyright-footer {
          margin: 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: 17px;
          line-height: 1.6;
        }

        @media (max-width: 991px) {
          .footer-row {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }
        }

        @media (max-width: 767px) {
          .footer-footer {
            padding: 55px 0 22px;
          }

          .footer-container {
            padding: 0 18px;
          }

          .footer-row {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .footer-col h2.footer-heading-footer {
            font-size: 26px;
            margin-bottom: 16px;
          }

          .footer-about-text,
          .list-unstyled-footer li a,
          .block-23-footer .text,
          .block-23-footer .text a {
            font-size: 16px;
            line-height: 1.7;
          }

          .copyright-footer {
            font-size: 15px;
          }
        }
      `}</style>

      <footer className="footer-footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h2 className="footer-heading-footer">Love and Care</h2>
              <p className="footer-about-text">
                At Love and Care Foundation, we believe in the power of small
                acts of kindness to create big change. Join us in making a
                difference.
              </p>

              <ul className="ftco-footer-social-footer">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61573995627486"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <img
                      src="/images/face.png"
                      alt="Facebook"
                      className="footer-social-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h2 className="footer-heading-footer">Quick Links</h2>
              <ul className="list-unstyled-footer">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* <li><Link to="/project">Project</Link></li> */}
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h2 className="footer-heading-footer">Have a Question?</h2>
              <div className="block-23-footer">
                <ul>
                  <li>
                    <span className="icon">📍</span>
                    <span className="text">
                      Navale IT Zone, Office No. 501, 5th Floor, A-Wing, Near
                      Navale Bridge, Narhe, Pune - 411041
                    </span>
                  </li>
                  <li>
                    <span className="icon">📞</span>
                    <span className="text">
                      <a href="tel:+919168627258">+91 9168627258</a>
                    </span>
                  </li>
                  <li>
                    <span className="icon">✉️</span>
                    <span className="text">
                      <a href="mailto:loveandcare.welfare@gmail.com">
                        loveandcare.welfare@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright-footer">
              Copyright © {new Date().getFullYear()} All rights reserved | Love
              and Care Foundation
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;