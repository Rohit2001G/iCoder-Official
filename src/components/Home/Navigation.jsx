import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light my-2 bg-dark p-3">
        <div className="container-fluid text-light mx-2">
          <NavLink className="navbar-brand fw-bold" id="icoder" to="/">
            iCoder
          </NavLink>
          <form className="d-flex mx-2">
            <input
              className="form-control me-2 d-none d-sm-block"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success me-4 d-none d-sm-block" type="submit">
              Search
            </button>
          </form>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="HTMLTutorial">
                      HTML Tutorial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="CSSTutorial">
                      CSS Tutorial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="JavascriptTutorial">
                      Javascript Tutorial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="PHPTutorial">
                      PHP Tutorial
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="Services">
                      Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
                <NavLink
                  className="nav-link ps-sm-2 text-light ms-0 ms-sm-4"
                  aria-current="page"
                  to="AboutUs"
                >
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link ps-sm-2 text-light ms-sm-4 ms-0" to="/ContactUs">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <form action="">
              <button
                className="btn btn-outline-primary me-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Register
              </button>

              <button
                className="btn btn-outline-primary me-3"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="modal fade" id="registerModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Register Here</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="loginModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Login Here</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
