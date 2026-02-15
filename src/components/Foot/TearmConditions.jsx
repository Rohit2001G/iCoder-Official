import React from "react";

const TearmConditions = () => {
  return (
    <>
      <div className="container-about my-4">
        <div class="terms-image col-md-12 order-md-1">
        </div>
        <h1 class="featurette-heading text-center mt-3">
          <span className="text-terms">Terms and Conditions</span> -{" "}
          <span id="icoder">iCoder</span>{" "}
        </h1>
        <p>
          <strong> Last Updated: 15 / 02 / 2026</strong> <br /> <br />
          Welcome to <strong>ICoder</strong>.
          <br />
          These Terms and Conditions (“Terms”) govern your use of the website
          located at <strong>iCoder</strong> .com (the “Site”), including all
          associated services and features offered in connection with it. <br />
          By accessing or using this Site, you agree to be bound by these Terms.
          If you do not agree to all of these Terms, you may{" "}
          <strong> not access or use the Site.</strong> <br />
        </p>
        <div class="row featurette align-items-center">
          <div class="col-md-7 order-md-2">
            <div className="container my-2">
              <p>
                <h4>1. Interpretation and Definitions</h4>
                <p>
                  For the purposes of these Terms: <br />
                  <ul>
                    <li>
                      {" "}
                      <strong>“Account” </strong>means a unique account created
                      for You to access our Service.
                    </li>
                    <li>
                      {" "}
                      <strong>“User”,</strong> “You” or “Your” means any person
                      or entity accessing the Site.
                    </li>
                    <li>
                      {" "}
                      <strong>“Content”</strong> means text, images, videos, or
                      other materials posted on the Site.{" "}
                    </li>
                    <li>
                      {" "}
                      <strong>“Service”</strong> means the Site and its
                      features.
                    </li>
                    <li>
                      {" "}
                      <strong>“Website”</strong> refers to iCoder.com.
                    </li>
                  </ul>
                </p>
              </p>
              <hr />
            </div>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src="./images/terms.jpg"
              height="500px"
              width="700px"
              className="img-fluid mx-auto shadow-lg rounded-3 mb-4"
            />
          </div>
        </div>

        <div class="row featurette d-flex align-items-center ">
          <div class="col-md-7 flex-row-reverse p-3">
            <h4>2. Acceptance of Terms</h4>

            <p>
              You agree that by accessing or using this Site, you have read,
              understood, and agree to be bound by these Terms. We may update
              these Terms at any time without notice — the updated date will be
              shown at the top. It is your responsibility to check for updates.
            </p>
            <h4>3. Eligibility</h4>

            <p>
              By using this Site, you represent that you are at least 18 years
              old or accessing the Site with parental/guardian consent. If you
              are under 18, you may not use the Site without supervision.
            </p>

            <h4>4. User Accounts</h4>

            <p>
              <ul>
                <li>
                  You may be required to create an Account to access certain
                  features.
                </li>
                <li>
                  You agree to provide accurate, current, and complete
                  information.
                </li>
                <li>
                  You are responsible for safeguarding your Account credentials.
                </li>
              </ul>
            </p>

            <hr />
          </div>
          <div class="col-md-5 ">
            <img
              src="./images/terms1.avif"
              height="900px"
              width="1700px"
              className="img-fluid mx-auto shadow-lg rounded-3 mb-4"
            />
          </div>
        </div>

        <div class="row featurette align-items-center">
          <div class="col-md-7 order-md-2">
            <div className="container my-2">
              <h4>5. Use of the Website</h4>

              <p>
                <ul>
                  <li>You agree to use the Site only for lawful purposes.</li>
                  <li>You may not post or transmit any harmful, unlawful, or offensive content.</li>
                  <li>You must not misuse the Site’s features or disrupt other users.</li>
                </ul>
                <h4>6. Intellectual Property </h4>
                All content on the Site — including text, graphics, logos, and code — is the property of iCoder or its licensors and protected by copyright, trademark, and other intellectual property laws. You may not copy, distribute, or create derivative works without permission.
              </p>
              <h4>7. Content Posted by Users</h4>

              <p>
                <ul>
                  <li>You retain ownership of your own content but grant iCoder a license to display and use it.</li>
                  <li>You agree not to post content that infringes on anyone else’s rights.</li>
                  <li>We reserve the right to remove any content we deem inappropriate.</li>
                </ul>
                </p>
              <hr />
            </div>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src="./images/terms3.jpg"
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

export default TearmConditions;
