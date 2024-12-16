import CourseOne from "../../../../assets/images/course/01.jpg";
import AuthorOne from "../../../../assets/images/course/author/01.jpg";
import CourseTwo from "../../../../assets/images/course/02.jpg";
import AuthorTwo from "../../../../assets/images/course/author/02.jpg";
import CourseThree from "../../../../assets/images/course/03.jpg";
import AuthorThree from "../../../../assets/images/course/author/03.jpg";
import CourseFour from "../../../../assets/images/course/04.jpg";
import AuthorFour from "../../../../assets/images/course/author/04.jpg";
import CourseFive from "../../../../assets/images/course/05.jpg";
import AuthorFive from "../../../../assets/images/course/author/05.jpg";
import CourseSix from "../../../../assets/images/course/06.jpg";
import AuthorSix from "../../../../assets/images/course/author/06.jpg";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div>
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2>Archives: Courses</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-select-section">
        <div className="container">
          <div className="section-wrapper">
            <div className="row align-items-center g-4">
              <div className="col-md-1">
                <div className="group-select-left">
                  <i className="icofont-abacus-alt"></i>
                  <span>Filters</span>
                </div>
              </div>
              <div className="col-md-11">
                <div className="group-select-right">
                  <div className="row g-2 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Categories</option>
                          <option value="uncategorized">Uncategorized</option>
                          <option value="academy">Academy</option>
                          <option value="agency">Agency</option>
                          <option value="app">App</option>
                          <option value="bar">Bar</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Language</option>
                          <option value="java">JAVA</option>
                          <option value="php">PHP</option>
                          <option value="html">HTML</option>
                          <option value="python">PYTHON</option>
                          <option value="javascript">JAVASCRIPT</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Prices</option>
                          <option value="29">29</option>
                          <option value="39">39</option>
                          <option value="69">69</option>
                          <option value="99">99</option>
                          <option value="199">199</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="select-item">
                        <select>
                          <option value="">All Skills</option>
                          <option value="html">HTML</option>
                          <option value="css">CSS</option>
                          <option value="php">PHP</option>
                          <option value="java">JAVA</option>
                          <option value="javascript">JAVASCRIPT</option>
                          <option value="wordpress">WORDPRESS</option>
                          <option value="react">REACT</option>
                          <option value="vue">VUE</option>
                          <option value="angular">ANGULAR</option>
                        </select>
                        <div className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Featured Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseOne} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Adobe XD</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>Fundamentals of Adobe XD Theory Learn New</h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorOne} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            William Smith
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseTwo} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Photoshop</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>
                          Certified Graphic Design with Free Project Course
                        </h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorTwo} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            Lora Smith
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseThree} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Photoshop</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>Theory Learn New Student And Fundamentals</h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorThree} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            Robot Smith
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseFour} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Adobe XD</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>
                          Computer Fundamentals Basic Startup Ultricies Vitae
                        </h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorFour} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            Zinat Zaara
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseFive} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Adobe XD</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>
                          Boozy Halloween Drinks for the Grown Eleifend Kuismod
                        </h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorFive} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            Billy Rivera
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={CourseSix} alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <Link to="#">Adobe XD</Link>
                        </div>
                        <div className="course-reiew">
                          <span className="ratting">
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                            <i className="icofont-ui-rating"></i>
                          </span>
                          <span className="ratting-count"> 03 reviews </span>
                        </div>
                      </div>
                      <Link to="course-single.html">
                        <h5>Student Want to Learn About Science And Arts</h5>
                      </Link>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> 18x Lesson
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-signal"></i> Online Class
                        </div>
                      </div>
                      <div className="course-footer">
                        <div className="course-author">
                          <img src={AuthorSix} alt="course author" />
                          <Link to="team-single.html" className="ca-name">
                            Subrina Kabir
                          </Link>
                        </div>
                        <div className="course-btn">
                          <Link
                            to="course-single.html"
                            className="lab-btn-text"
                          >
                            Read More <i className="icofont-external-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
