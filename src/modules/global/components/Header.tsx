import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo/01.png";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="header-top-area">
            <ul className="lab-ul left">
              <li>
                <i className="icofont-ui-call"></i>{" "}
                <span>+800-123-4567 6587</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> Beverley, New York 224
                USA
              </li>
            </ul>
            <ul className="lab-ul social-icons d-flex align-items-center">
              <li>
                <p>Find us on :</p>
              </li>
              <li>
                <Link to="#" className="fb">
                  <i className="icofont-facebook-messenger"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="twitter">
                  <i className="icofont-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="vimeo">
                  <i className="icofont-vimeo"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="skype">
                  <i className="icofont-skype"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="rss">
                  <i className="icofont-rss-feed"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <div className="menu">
                <ul className="lab-ul">
                  <li>
                    <Link to="/">Home</Link>
                    <ul className="lab-ul">
                      <li>
                        <Link to="/" className="active">
                          Home One
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Home Two</Link>
                      </li>
                      <li>
                        <Link to="/">Home Three</Link>
                      </li>
                      <li>
                        <Link to="/">Home Four</Link>
                      </li>
                      <li>
                        <Link to="/">Home Five</Link>
                      </li>
                      <li>
                        <Link to="/">Home Six</Link>
                      </li>
                      <li>
                        <Link to="/">Home Seven</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">Courses</Link>
                    <ul className="lab-ul">
                      <li>
                        <Link to="/course">Course</Link>
                      </li>
                      <li>
                        <Link to="/course-details">Course Details</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="/">Blog</Link>
                    <ul className="lab-ul">
                      <li>
                        <Link to="/">Blog Grid</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Style 2</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Style 3</Link>
                      </li>
                      <li>
                        <Link to="/">Blog Single</Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to="/">Pages</Link>
                    <ul className="lab-ul">
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li>
                        <Link to="/">Team</Link>
                      </li>
                      <li>
                        <Link to="/">Instructor</Link>
                      </li>
                      <li>
                        <Link to="/">Shop Pages</Link>
                        <ul className="lab-ul">
                          <li>
                            <Link to="/">Shop Page</Link>
                          </li>
                          <li>
                            <Link to="/">Shop Details Page</Link>
                          </li>
                          <li>
                            <Link to="/">Shop Cart Page</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/">Search Page</Link>
                      </li>
                      <li>
                        <Link to="/">Search None</Link>
                      </li>
                      <li>
                        <Link to="/">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <Link to="/sign-in" className="login">
                <i className="icofont-user"></i> <span>LOG IN</span>
              </Link>
              <Link to="/sign-up" className="signup">
                <i className="icofont-users"></i> <span>SIGN UP</span>
              </Link>
              <div className="header-bar d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="ellepsis-bar d-lg-none">
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
