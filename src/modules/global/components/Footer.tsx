import { Link } from "react-router-dom";
import shapeImg from "../../../assets/images/shape-img/03.png";
import shapeTwo from "../../../assets/images/shape-img/04.png";

const Footer = () => {
  return (
    <div>
      <div className="news-footer-wrap">
        <div className="fs-shape">
          <img
            src={shapeImg}
            alt="fst"
            className="fst-1"
          />
          <img
            src={shapeTwo}
            alt="fst"
            className="fst-2"
          />
        </div>
        <div className="news-letter">
          <div className="container">
            <div className="section-wrapper">
              <div className="news-title">
                <h3>Want Us To Email You About Special Offers And Updates?</h3>
              </div>
              <div className="news-form">
                <form action="">
                  <div className="nf-list">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <input type="submit" name="submit" value="Subscribe Now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-top padding-tb pt-0">
            <div className="container">
              <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>Site Map</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            <li>
                              <Link to="#">Documentation</Link>
                            </li>
                            <li>
                              <Link to="#">Feedback</Link>
                            </li>
                            <li>
                              <Link to="#">Plugins</Link>
                            </li>
                            <li>
                              <Link to="#">Support Forums</Link>
                            </li>
                            <li>
                              <Link to="#">Themes</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>Useful Links</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            <li>
                              <Link to="#">About Us</Link>
                            </li>
                            <li>
                              <Link to="#">Help Link</Link>
                            </li>
                            <li>
                              <Link to="#">Terms & Conditions</Link>
                            </li>
                            <li>
                              <Link to="#">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="#">Privacy Policy</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>Social Contact</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            <li>
                              <Link to="#">Facebook</Link>
                            </li>
                            <li>
                              <Link to="#">Twitter</Link>
                            </li>
                            <li>
                              <Link to="#">Instagram</Link>
                            </li>
                            <li>
                              <Link to="#">YouTube</Link>
                            </li>
                            <li>
                              <Link to="#">Github</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="footer-item">
                    <div className="footer-inner">
                      <div className="footer-content">
                        <div className="title">
                          <h4>Our Support</h4>
                        </div>
                        <div className="content">
                          <ul className="lab-ul">
                            <li>
                              <Link to="#">Help Center</Link>
                            </li>
                            <li>
                              <Link to="#">Paid with Mollie</Link>
                            </li>
                            <li>
                              <Link to="#">Status</Link>
                            </li>
                            <li>
                              <Link to="#">Changelog</Link>
                            </li>
                            <li>
                              <Link to="#">Contact Support</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom style-2">
            <div className="container">
              <div className="section-wrapper">
                <p>
                  &copy; 2021 <Link to="index-2.html">LMS</Link> Designed by
                  <Link
                    to="/"
                    target="_blank"
                  >
                    CodexCoder
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
