const Contact = () => {
  return (
    <>
        <div className="pageheader-section">
        <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="pageheader-content text-center">
                <h2>Get In Touch With Us</h2>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="map-address-section padding-tb section-bg">
        <div className="container">
            <div className="section-header text-center">
            <span className="subtitle">Get in touch with us</span>
            <h2 className="title">We're Always Eager To Hear From You!</h2>
            </div>
            <div className="section-wrapper">
            <div className="row flex-row-reverse">
                <div className="col-xl-4 col-lg-5 col-12">
                <div className="contact-wrapper">
                    <div className="contact-item">
                    <div className="contact-thumb">
                        <img src="assets/images/icon/01.png" alt="CodexCoder" />
                    </div>
                    <div className="contact-content">
                        <h6 className="title">Office Address</h6>
                        <p>1201 park street, Fifth Avenue</p>
                    </div>
                    </div>
                    <div className="contact-item">
                    <div className="contact-thumb">
                        <img src="assets/images/icon/02.png" alt="CodexCoder" />
                    </div>
                    <div className="contact-content">
                        <h6 className="title">Phone number</h6>
                        <p>+22698 745 632,02 982 745</p>
                    </div>
                    </div>
                    <div className="contact-item">
                    <div className="contact-thumb">
                        <img src="assets/images/icon/03.png" alt="CodexCoder" />
                    </div>
                    <div className="contact-content">
                        <h6 className="title">Send email</h6>
                        <a href="mailto:info@gmail.com">adminLMS@gmil.com</a>
                    </div>
                    </div>
                    <div className="contact-item">
                    <div className="contact-thumb">
                        <img src="assets/images/icon/04.png" alt="CodexCoder" />
                    </div>
                    <div className="contact-content">
                        <h6 className="title">Our website</h6>
                        <a href="#">www.adminLMS@gmil.com</a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-12">
                <div className="map-area">
                    <div className="maps">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2275990948147!2d90.38698831543141!3d23.739261895117753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c740f17d1%3A0xdd3daab8c90eb11f!2sCodexCoder!5e0!3m2!1sen!2sbd!4v1607313671993!5m2!1sen!2sbd"
                        aria-hidden="false"
                    ></iframe>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="contact-section padding-tb">
        <div className="container">
            <div className="section-header text-center">
            <span className="subtitle">Get in touch with Contact us</span>
            <h2 className="title">
                Fill The Form Below So We Can Get To Know You And Your Needs Better.
            </h2>
            </div>
            <div className="section-wrapper">
            <form
                className="contact-form"
                action="https://demos.codexcoder.com/labartisan/html/LMS/contact.php"
                id="contact-form"
                method="POST"
            >
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Your Email"
                    id="email"
                    name="email"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    name="phone"
                    required
                />
                </div>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="Subject"
                    id="subject"
                    name="subject"
                    required
                />
                </div>
                <div className="form-group w-100">
                <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                ></textarea>
                </div>
                <div className="form-group w-100 text-center">
                <button className="lab-btn"><span>Send our Message</span></button>
                </div>
            </form>
            <p className="form-message"></p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Contact