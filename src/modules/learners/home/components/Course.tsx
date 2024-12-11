const Course = () => {
  return (
    <div>
      <div className="pageheader-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pageheader-content text-center">
                <h2>Archives: Courses</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Course Page
                    </li>
                  </ol>
                </nav>
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
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  <p>Showing 1-6 of 10 results</p>
                </div>
                <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                  <span>Sort by :</span>
                  <div className="select-item">
                    <select>
                      <option value="">Select Oder</option>
                      <option value="html">HTML</option>
                      <option value="css">CSS</option>
                      <option value="php">PHP</option>
                      <option value="java">JAVA</option>
                      <option value="javascript">JAVASCRIPT</option>
                    </select>
                    <div className="select-icon">
                      <i className="icofont-rounded-down"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              <div className="col">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src="assets/images/course/01.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Adobe XD</a>
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
                      <a href="course-single.html">
                        <h5>Fundamentals of Adobe XD Theory Learn New</h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/01.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            William Smith
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
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
                      <img src="assets/images/course/02.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Photoshop</a>
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
                      <a href="course-single.html">
                        <h5>
                          Certified Graphic Design with Free Project Course
                        </h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/02.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            Lora Smith
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
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
                      <img src="assets/images/course/03.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Photoshop</a>
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
                      <a href="course-single.html">
                        <h5>Theory Learn New Student And Fundamentals</h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/03.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            Robot Smith
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
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
                      <img src="assets/images/course/04.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Adobe XD</a>
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
                      <a href="course-single.html">
                        <h5>
                          Computer Fundamentals Basic Startup Ultricies Vitae
                        </h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/04.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            Zinat Zaara
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
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
                      <img src="assets/images/course/05.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Adobe XD</a>
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
                      <a href="course-single.html">
                        <h5>
                          Boozy Halloween Drinks for the Grown Eleifend Kuismod
                        </h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/05.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            Billy Rivera
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
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
                      <img src="assets/images/course/06.jpg" alt="course" />
                    </div>
                    <div className="course-content">
                      <div className="course-price">&#8377;300</div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">Adobe XD</a>
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
                      <a href="course-single.html">
                        <h5>Student Want to Learn About Science And Arts</h5>
                      </a>
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
                          <img
                            src="assets/images/course/author/06.jpg"
                            alt="course author"
                          />
                          <a href="team-single.html" className="ca-name">
                            Subrina Kabir
                          </a>
                        </div>
                        <div className="course-btn">
                          <a href="course-single.html" className="lab-btn-text">
                            Read More <i className="icofont-external-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="default-pagination lab-ul">
              <li>
                <a href="#">
                  <i className="icofont-rounded-left"></i>
                </a>
              </li>
              <li>
                <a href="#">01</a>
              </li>
              <li>
                <a href="#" className="active">
                  02
                </a>
              </li>
              <li>
                <a href="#">03</a>
              </li>
              <li>
                <a href="#">
                  <i className="icofont-rounded-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
