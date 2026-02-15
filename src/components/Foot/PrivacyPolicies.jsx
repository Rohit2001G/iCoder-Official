import React from "react";

const PrivacyPolicies = () => {
  return (
    <>
      <div className="container-about my-4">
        <h2 class="featurette-heading text-center mb-3">
          <span className="text-secondary">Privacy Policy</span> -{" "}
          <span id="icoder">iCoder</span>{" "}
        </h2>
        <div class="row featurette align-items-center">
          <div class="col-md-7 order-md-2">
            <div className="container my-2">
              <p>
                <strong> Last Updated: February 14, 2026</strong> <br />
                Welcome to <strong>ICoder</strong> ("we," "our," or "us").{" "}
                <br />
                We are committed to protecting your privacy and ensuring that
                your personal information is handled in a safe and responsible
                manner. <br /> <br />
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website. <br />
                By using ICoder, you agree to the collection and use of
                information in accordance with this policy.
              </p>
              <hr />
            </div>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src="./images/privicy.jpg"
              height="500px"
              width="700px"
              className="img-fluid mx-auto shadow-lg rounded-3 mb-4"
            />
          </div>
        </div>

        <div class="row featurette d-flex align-items-center ">
          <div class="col-md-7 flex-row-reverse p-3">
            <h4>1. Information We Collect</h4>

            <p>
              We may collect the following types of information: <br />
              <strong> a) Personal Information </strong> <br />
              When you use our contact forms or interact with our website, we
              may collect: <br />
              <ul>
                <li>Full Name </li>
                <li>Email Address</li>
                <li>Phone Number (if provided) </li>
                <li>Any message or information you submit</li>
              </ul>
              <br />
              <strong> b) Non-Personal Information </strong> <br />
              We may automatically collect:
              <br />
              <ul>
                <li>Browser type </li>
                <li>IP address</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Date and time of visit</li>
              </ul>
              This information helps us improve our website performance and user
              experience.
            </p>
            <hr />
          </div>
          <div class="col-md-5 ">
            <img
              src="./images/Aboutus.jpg"
              height="900px"
              width="1700px"
              className="img-fluid mx-auto shadow-lg rounded-3 mb-4"
            />
          </div>
        </div>

        <div class="row featurette align-items-center">
          <div class="col-md-7 order-md-2">
            <div className="container my-2">
              <h4>2. Your Rights</h4>

              <p>
                Depending on your location, you may have the right to:
                <br />
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
                To exercise these rights, please contact us using the details
                below.
                <br />
                <br />
                <h4>3. Children’s Privacy </h4>
                ICoder does not knowingly collect personal information from
                individuals under the age of 13. If we become aware that we have
                collected such information, we will take steps to remove it
                promptly.
              </p>
              <hr />
            </div>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src="./images/privici1.jpg"
              height="500px"
              width="700px"
              className="img-fluid mx-auto shadow-lg rounded-3 mb-4"
            />
          </div>
        </div>
        <p class="lead">
          📬<span className="fw-bold">Get In Touch</span>
          <br />
          We love hearing from our learners! If you have any questions,
          feedback, or suggestions, feel free to reach out.
          <br /> <br />
          📧 Email: <strong> support@icoder.com </strong>
          <br />
          📍 Follow us on social media for tips, tutorials, and more!
        </p>
      </div>
    </>
  );
};
export default PrivacyPolicies;
