import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container-about">
         <h2 class="featurette-heading text-center mt-3">
              <span className="text-secondary">Contact Us</span> -{" "}
              <span id="icoder">iCoder</span>{" "}
            </h2>
            <p className="text-center">
              “Have questions about coding, projects, or collaboration? We'd
              love to hear from you!”
            </p>
        <div class="row featurette mt-2 d-flex align-items-center ">
          <div class="col-md-6 flex-row-reverse p-3">

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="e.g.Rohit Bharti"
              />
              <label for="exampleFormControlInput1" class="form-label">
                Phone Num.
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="e.g.9185858585"
              />
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="e.g.name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message Box
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </div>
          <div class="col-md-6 ">
            <img
              src="./images/contact.jpg"
              alt="image here"
              width="100%"
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
          📧 Email: support@icoder.com <br />
          📍 Follow us on social media for tips, tutorials, and more!
        </p>

        <p class="lead">
          🔹<span className="fw-bold"> FAQ Section</span>
          <br />
          Q: How long does it take to get a response? <br />
          A: We usually reply within 24–48 hours. <br /> <br />
          Q: Do you accept freelance projects? <br />
          A: Yes, contact us with project details. <br />
        </p>
        <div className="container my-4">
        <h3 className="text-center mb-4">Our Location</h3>
        <div className="ratio ratio-16x9">
          <iframe
          className="shadow-lg rounded-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816.101994995304!2d77.0598789945552!3d28.649621692738755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9e11a08cf%3A0xc1a5a267ef8fd396!2sUttam%20Nagar%2C%20Delhi%2C%20110059!5e0!3m2!1sen!2sin!4v1771096864239!5m2!1sen!2sin"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      </div>

      
    </>
  );
};
export default ContactUs;
