import { Link } from "react-router-dom";
import PageNotFountBg from "../../../assets/images/404.png";
import Logo from "../../../assets/images/logo/01.png";
const PageNoteFound = () => {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="four-zero-content">
              <Link to='/' className="logo_404">
                <img src={Logo} alt="logo"></img>
              </Link>
              <h2 className="title">Error 404!</h2>
              <p>Oops! The Page You Are Looking For Could Not Be Found</p>
              <Link to='/' className="lab-btn">
                <span>
                  Go Back To Home <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src={PageNotFountBg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNoteFound;
