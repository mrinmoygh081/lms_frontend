import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login-section padding-tb section-bg">
    <div className="container">
      <div className="account-wrapper">
        <h3 className="title">Register Now</h3>
        <form className="account-form">
          <div className="form-group">
            <input type="text" placeholder="User Name" name="username" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Email" name="email" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <button className="lab-btn">
              <span>Get Started Now</span>
            </button>
          </div>
        </form>
        <div className="account-bottom">
          <span className="d-block cate pt-10">
            Are you a member? <Link to='/sign-up'>Login</Link>
          </span>
          <span className="or">
            <span>or</span>
          </span>
          <h5 className="subtitle">Register With Social Media</h5>
          <ul className="lab-ul social-icons justify-content-center">
            <li>
              <a href="#" className="facebook">
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="twitter">
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="linkedin">
                <i className="icofont-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#" className="instagram">
                <i className="icofont-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" className="pinterest">
                <i className="icofont-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;
