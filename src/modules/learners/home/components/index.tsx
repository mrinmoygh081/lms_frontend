import Footer from "../../../global/components/Footer";
import Header from "../../../global/components/Header";
import BannerOne from "../../../../assets/images/banner/01.png";
import SponsorOne from "../../../../assets/images/sponsor/01.png";
import SponsorTwo from "../../../../assets/images/sponsor/02.png";
import SponsorThree from "../../../../assets/images/sponsor/03.png";
import SponsorFour from "../../../../assets/images/sponsor/04.png";
import SponsorFive from "../../../../assets/images/sponsor/05.png";
import SponsorSix from "../../../../assets/images/sponsor/06.png";
import IconOne from "../../../../assets/images/category/icon/01.jpg";
import IconTwo from "../../../../assets/images/category/icon/02.jpg";
import IconThree from "../../../../assets/images/category/icon/03.jpg";
import IconFour from "../../../../assets/images/category/icon/04.jpg";
import IconFive from "../../../../assets/images/category/icon/05.jpg";
import IconSix from "../../../../assets/images/category/icon/06.jpg";
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
import AboutIconOne from "../../../../assets/images/about/icon/01.jpg";
import AboutIconTwo from "../../../../assets/images/about/icon/02.jpg";
import AboutIconThree from "../../../../assets/images/about/icon/03.jpg";
import AboutOne from "../../../../assets/images/about/01.png";
import instructorOne from "../../../../assets/images/instructor/01.jpg";
import instructorTwo from "../../../../assets/images/instructor/02.jpg";
import instructorThree from "../../../../assets/images/instructor/03.jpg";
import instructorFour from "../../../../assets/images/instructor/04.jpg";
import FeedbackOne from "../../../../assets/images/feedback/01.jpg";
import StudentOne from "../../../../assets/images/feedback/student/01.jpg";
import StudentTwo from "../../../../assets/images/feedback/student/02.jpg";
import BlogOne from "../../../../assets/images/blog/01.jpg";
import BlogTwo from "../../../../assets/images/blog/02.jpg";
import BlogThree from "../../../../assets/images/blog/03.jpg";
import AchiveOne from "../../../../assets/images/achive/01.png";
import AchiveTwo from "../../../../assets/images/achive/02.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  return (
    <div>
      <Header />
      <section className="banner-section style-1">
        <div className="container">
          <div className="section-wrapper">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-10">
                <div className="banner-content">
                  <h6 className="subtitle text-uppercase fw-medium">
                    Online education
                  </h6>
                  <h2 className="title">
                    <span className="d-lg-block">Learn The</span> Skills You
                    Need
                    <span className="d-lg-block">To Succeed</span>
                  </h2>
                  <p className="desc">
                    Free online courses from the world’s Leading experts. join
                    18+ million Learners today.
                  </p>
                  <form action="">
                    <div className="banner-icon">
                      <i className="icofont-search"></i>
                    </div>
                    <input type="text" placeholder="Keywords of your course" />
                    <button type="submit">Search Course</button>
                  </form>
                  <div className="banner-catagory d-flex flex-wrap">
                    <p>Most Popular :</p>
                    <ul className="lab-ul d-flex flex-wrap">
                      <li>
                        <Link to="#">Figma</Link>
                      </li>
                      <li>
                        <Link to="#">Adobe XD</Link>
                      </li>
                      <li>
                        <Link to="#">illustration</Link>
                      </li>
                      <li>
                        <Link to="#">Photoshop</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-6">
                <div className="banner-thumb">
                  <img src={BannerOne} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-shapes"></div>
        <div className="cbs-content-list d-none">
          <ul className="lab-ul">
            <li className="ccl-shape shape-1">
              <Link to="#">16M Students Happy</Link>
            </li>
            <li className="ccl-shape shape-2">
              <Link to="#">130K+ Total Courses</Link>
            </li>
            <li className="ccl-shape shape-3">
              <Link to="#">89% Successful Students</Link>
            </li>
            <li className="ccl-shape shape-4">
              <Link to="#">23M+ Learners</Link>
            </li>
            <li className="ccl-shape shape-5">
              <Link to="#">36+ Languages</Link>
            </li>
          </ul>
        </div>
      </section>
      <div className="sponsor-section section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="sponsor-slider">
              <Swiper
                spaceBetween={30}
                slidesPerView={5}
                loop={true}
              >
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorOne} alt="Sponsor One" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorTwo} alt="Sponsor Two" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorThree} alt="Sponsor Three" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorFour} alt="Sponsor Four" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorFive} alt="Sponsor Five" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img src={SponsorSix} alt="Sponsor Six" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="category-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Popular Category</span>
            <h2 className="title">Popular Category For Learn</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconOne} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Computer Science</h6>
                      </Link>
                      <span>24 Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconTwo} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Civil Engineering</h6>
                      </Link>
                      <span>40 Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconThree} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Business Analysis</h6>
                      </Link>
                      <span>27 Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconFour} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Data Science Analytics</h6>
                      </Link>
                      <span>28 Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconFive} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Learning Management</h6>
                      </Link>
                      <span>78 Course</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={IconSix} alt="category" />
                    </div>
                    <div className="category-content">
                      <Link to="course.html">
                        <h6>Computer Engineering</h6>
                      </Link>
                      <span>38 Course</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <Link to="course.html" className="lab-btn">
                <span>Browse All Categories</span>
              </Link>
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
      <div className="about-section">
        <div className="container">
          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
            <div className="col">
              <div className="about-right padding-tb">
                <div className="section-header">
                  <span className="subtitle">About Our LMS</span>
                  <h2 className="title">
                    Good Qualification Services And Better Skills
                  </h2>
                  <p>
                    Distinctively provide acces mutfuncto users whereas
                    transparent proceses somes ncentivize eficient
                    functionalities rather than extensible archtectur
                    communicate leveraged services and cross-platform.
                  </p>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    <li>
                      <div className="sr-left">
                        <img src={AboutIconOne} alt="about icon" />
                      </div>
                      <div className="sr-right">
                        <h5>Skilled Instructors</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="sr-left">
                        <img src={AboutIconTwo} alt="about icon" />
                      </div>
                      <div className="sr-right">
                        <h5>Get Certificate</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="sr-left">
                        <img src={AboutIconThree} alt="about icon" />
                      </div>
                      <div className="sr-right">
                        <h5>Online Classes</h5>
                        <p>
                          Distinctively provide acces mutfuncto users whereas
                          communicate leveraged services
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-left">
                <div className="about-thumb">
                  <img src={AboutOne} alt="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="instructor-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">World-class Instructors</span>
            <h2 className="title">Classes Taught By Real Creators</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              <div className="col">
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={instructorOne} alt="instructor" />
                    </div>
                    <div className="instructor-content">
                      <Link to="team-single.html">
                        <h4>Emilee Logan</h4>
                      </Link>
                      <p>Master of Education Degree</p>
                      <span className="ratting">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </span>
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> 08 courses
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i> 30 students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={instructorTwo} alt="instructor" />
                    </div>
                    <div className="instructor-content">
                      <Link to="team-single.html">
                        <h4>Donald Logan</h4>
                      </Link>
                      <p>Master of Education Degree</p>
                      <span className="ratting">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </span>
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> 08 courses
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i> 30 students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={instructorThree} alt="instructor" />
                    </div>
                    <div className="instructor-content">
                      <Link to="team-single.html">
                        <h4>Oliver Porter</h4>
                      </Link>
                      <p>Master of Education Degree</p>
                      <span className="ratting">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </span>
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> 08 courses
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i> 30 students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={instructorFour} alt="instructor" />
                    </div>
                    <div className="instructor-content">
                      <Link to="team-single.html">
                        <h4>Nahla Jones</h4>
                      </Link>
                      <p>Master of Education Degree</p>
                      <span className="ratting">
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                        <i className="icofont-ui-rating"></i>
                      </span>
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i> 08 courses
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i> 30 students
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center footer-btn">
              <p>
                Want to help people learn, grow and achieve more in life?
                <Link to="team.html">Become an instructor</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="student-feedbak-section padding-tb shape-img">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">Loved by 200,000+ students</span>
            <h2 className="title">Students Community Feedback</h2>
          </div>
          <div className="section-wrapper">
            <div className="row justify-content-center row-cols-lg-2 row-cols-1">
              <div className="col">
                <div className="sf-left">
                  <div className="sfl-thumb">
                    <img src={FeedbackOne} alt="student feedback" />
                    <Link
                      to="https://www.youtube-nocookie.com/embed/jP649ZHA8Tg"
                      className="video-button"
                      data-rel="lightcase"
                    >
                      <i className="icofont-ui-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="stu-feed-item">
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <img src={StudentOne} alt="student feedback" />
                        </div>
                        <div className="sftl-content">
                          <Link to="#">
                            <h6>Oliver Beddows</h6>
                          </Link>
                          <span>UX designer</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <span className="ratting">
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                        </span>
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>
                        Rapidiously buildcollaboration anden deas sharing viaing
                        and with bleedng edgeing nterfaces fnergstcally
                        plagiarize teams anbuling paradgms whereas goingi
                        forward process and monetze
                      </p>
                    </div>
                  </div>
                </div>
                <div className="stu-feed-item">
                  <div className="stu-feed-inner">
                    <div className="stu-feed-top">
                      <div className="sft-left">
                        <div className="sftl-thumb">
                          <img src={StudentTwo} alt="student feedback" />
                        </div>
                        <div className="sftl-content">
                          <Link to="#">
                            <h6>Madley Pondor</h6>
                          </Link>
                          <span>UX designer</span>
                        </div>
                      </div>
                      <div className="sft-right">
                        <span className="ratting">
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                          <i className="icofont-ui-rating"></i>
                        </span>
                      </div>
                    </div>
                    <div className="stu-feed-bottom">
                      <p>
                        Rapidiously buildcollaboration anden deas sharing viaing
                        and with bleedng edgeing nterfaces fnergstcally
                        plagiarize teams anbuling paradgms whereas goingi
                        forward process and monetze
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">FORM OUR BLOG POSTS</span>
            <h2 className="title">More Articles From Resource Library</h2>
          </div>
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
              <div className="col">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <Link to="blog-single.html">
                        <img src={BlogOne} alt="blog thumb" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link to="blog-single.html">
                        <h4>Scottish Creatives To Receive Funded Business.</h4>
                      </Link>
                      <div className="meta-post">
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-ui-user"></i>Begrass Tyson
                          </li>
                          <li>
                            <i className="icofont-calendar"></i>April 23,2021
                          </li>
                        </ul>
                      </div>
                      <p>
                        Pluoresnts customize prancing apcente customer service
                        anding ands asing in straelg Interacvely cordinate
                        performe
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="pf-left">
                        <Link to="blog-single.html" className="lab-btn-text">
                          Read more <i className="icofont-external-link"></i>
                        </Link>
                      </div>
                      <div className="pf-right">
                        <i className="icofont-comment"></i>
                        <span className="comment-count">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <Link to="blog-single.html">
                        <img src={BlogTwo} alt="blog thumb" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link to="blog-single.html">
                        <h4>Scottish Creatives To Receive Funded Business.</h4>
                      </Link>
                      <div className="meta-post">
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-ui-user"></i>Begrass Tyson
                          </li>
                          <li>
                            <i className="icofont-calendar"></i>April 23,2021
                          </li>
                        </ul>
                      </div>
                      <p>
                        Pluoresnts customize prancing apcente customer service
                        anding ands asing in straelg Interacvely cordinate
                        performe
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="pf-left">
                        <Link to="blog-single.html" className="lab-btn-text">
                          Read more <i className="icofont-external-link"></i>
                        </Link>
                      </div>
                      <div className="pf-right">
                        <i className="icofont-comment"></i>
                        <span className="comment-count">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="post-item">
                  <div className="post-inner">
                    <div className="post-thumb">
                      <Link to="blog-single.html">
                        <img src={BlogThree} alt="blog thumb" />
                      </Link>
                    </div>
                    <div className="post-content">
                      <Link to="blog-single.html">
                        <h4>Scottish Creatives To Receive Funded Business.</h4>
                      </Link>
                      <div className="meta-post">
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-ui-user"></i>Begrass Tyson
                          </li>
                          <li>
                            <i className="icofont-calendar"></i>April 23,2021
                          </li>
                        </ul>
                      </div>
                      <p>
                        Pluoresnts customize prancing apcente customer service
                        anding ands asing in straelg Interacvely cordinate
                        performe
                      </p>
                    </div>
                    <div className="post-footer">
                      <div className="pf-left">
                        <Link to="blog-single.html" className="lab-btn-text">
                          Read more <i className="icofont-external-link"></i>
                        </Link>
                      </div>
                      <div className="pf-right">
                        <i className="icofont-comment"></i>
                        <span className="comment-count">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="achievement-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">START TO SUCCESS</span>
            <h2 className="title">Achieve Your Goals With LMS</h2>
          </div>
          <div className="section-wrapper">
            <div className="counter-part mb-4">
              <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span
                            className="count"
                            data-to="30"
                            data-speed="1500"
                          ></span>
                          <span>+</span>
                        </h2>
                        <p>Years of Language Education Experience</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span
                            className="count"
                            data-to="3080"
                            data-speed="1500"
                          ></span>
                          <span>+</span>
                        </h2>
                        <p>Learners Enrolled in LMS Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span
                            className="count"
                            data-to="330"
                            data-speed="1500"
                          ></span>
                          <span>+</span>
                        </h2>
                        <p>Qualified Teachers And Language Experts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span
                            className="count"
                            data-to="2300"
                            data-speed="1500"
                          ></span>
                          <span>+</span>
                        </h2>
                        <p>Innovative Foreign Language Courses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="achieve-part">
              <div className="row g-4 row-cols-1 row-cols-lg-2">
                <div className="col">
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="achieve-thumb">
                        <img src={AchiveOne} alt="achieve thumb" />
                      </div>
                      <div className="achieve-content">
                        <h4>Start Teaching Today</h4>
                        <p>
                          Seamlessly engage technically sound coaborative
                          reintermed goal oriented content rather than ethica
                        </p>
                        <Link to="#" className="lab-btn">
                          <span>Become A Instructor</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="achieve-thumb">
                        <img src={AchiveTwo} alt="achieve thumb" />
                      </div>
                      <div className="achieve-content">
                        <h4>If You Join Our Course</h4>
                        <p>
                          Seamlessly engage technically sound coaborative
                          reintermed goal oriented content rather than ethica
                        </p>
                        <Link to="#" className="lab-btn">
                          <span>Register For Free</span>
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
      <Footer />
    </div>
  );
};

export default Home;
