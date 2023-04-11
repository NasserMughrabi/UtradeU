import React from "react";
import "./../styles/access.css";

const Access = () => {
  return (
    <section class='vh-100'>
      <div class='container py-5 h-100'>
        <div class='row d-flex justify-content-center align-items-center h-100'>
          <div class='col col-xl-10'>
            <div class='card' style={{ borderRadius: "1rem" }}>
              <div class='row g-0'>
                <div class='col-md-6 col-lg-5 d-none d-md-block'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
                    alt='login form'
                    class='img-fluid'
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div class='col-md-6 col-lg-7 d-flex align-items-center'>
                  <div class='card-body p-4 p-lg-5 text-black'>
                    <form>
                      <div
                        class='d-flex align-items-center mb-3 pb-1'
                        style={{
                          height: "80px",
                          paddingBottom: "2rem!important",
                        }}
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/images/logo.png"}
                          alt='login form'
                          class='img-fluid'
                          style={{
                            borderRadius: "1rem 0 0 1rem",
                            width: "378px",
                            marginLeft: "auto",
                            marginRight: "auto",
                          }}
                        />
                      </div>

                      <div class='pt-1 mb-4'>
                        <button
                          class='btn btn-dark btn-lg btn-block'
                          type='button'
                          style={{ display: "block", width: "100%" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://go.utah.edu/cas/login?TARGET=https%3A%2F%2Fportal.app.utah.edu%2Fapi%2Fsecurity%2Flogin%3Fapp%3Dhttps%253A%252F%252Fportal.app.utah.edu%252F";
                          }}
                        >
                          Signup
                        </button>
                      </div>

                      <div class='pt-1 mb-4'>
                        <button
                          class='btn btn-dark btn-lg btn-block'
                          type='button'
                          style={{ display: "block", width: "100%" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href =
                              "https://go.utah.edu/cas/login?TARGET=https%3A%2F%2Fportal.app.utah.edu%2Fapi%2Fsecurity%2Flogin%3Fapp%3Dhttps%253A%252F%252Fportal.app.utah.edu%252F";
                          }}
                        >
                          Login
                        </button>
                      </div>

                      <div>
                        <a href='#!' class='small text-muted'>
                          Terms of use
                        </a>
                      </div>
                      <div>
                        <a href='#!' class='small text-muted'>
                          Privacy policy
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
