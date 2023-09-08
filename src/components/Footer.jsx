import { Link } from "react-router-dom";

import "./style/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <Link to="/" className="logo">
          <ion-icon name="restaurant"></ion-icon>
        </Link>
        <div style={{ marginLeft: "1rem" }}>
          <h1 className="main-name">Lomond Restaurant</h1>
          <p className="sub-name">The Bests For You</p>
        </div>
      </div>

      <div className="grouping">
        <div className="footer-social-media">
          <ul className="social-media">
            <li className="social-media-item">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="social-media-link"
              >
                <i>
                  <ion-icon name="logo-facebook"></ion-icon>
                </i>
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="social-media-link"
              >
                <i>
                  <ion-icon name="logo-instagram"></ion-icon>
                </i>
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="social-media-link"
              >
                <i>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </i>
              </a>
            </li>
            <li className="social-media-item">
              <a
                href="https://github.com/zahra-m262/"
                target="_blank"
                className="social-media-link"
              >
                <i>
                  <ion-icon name="logo-github"></ion-icon>
                </i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright-paragraph">
            &copy;It`s All For Our Website
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
