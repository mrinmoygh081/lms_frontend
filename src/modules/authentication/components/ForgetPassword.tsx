const ForgetPassword = () => {
  return (
    <div className="login-section padding-tb section-bg">
    <div className="container">
      <div className="account-wrapper">
        <h3 className="title">Forget Password</h3>
        <form className="account-form">
          <div className="form-group">
            <input type="text" placeholder="Phone / Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="G-123456" />
          </div>
          <div className="form-group text-center">
            <button className="d-block lab-btn">
              <span>Reset My Password</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default ForgetPassword