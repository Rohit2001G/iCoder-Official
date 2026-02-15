import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="container-about">
        <div class="row featurette mt-4 d-flex align-items-center ">
           <h2 class="featurette-heading text-center">
              <span className="text-secondary">About Us</span> -{" "}
              <span id="icoder">iCoder</span>{" "}
            </h2>
          <div class="col-md-6 flex-row-reverse p-3">
            <p class="lead">
              🌟<span className="fw-bold">Who We Are</span>
              <br />
              Welcome to Icoder — your go-to destination for learning and
              mastering coding with simplicity and confidence. <br /> At Icoder,
              we believe everyone can code. Whether you are a beginner taking
              your first steps into programming or an experienced developer
              looking to sharpen your skills, Icoder is designed to help you
              grow.
            </p>
            <p class="lead">
              🎯<span className="fw-bold">Our Mission</span>
              <br />
              Our mission at Icoder is to make high-quality coding education
              accessible to everyone. We want to remove barriers to learning
              tech by providing: <br /> ✅ Easy-to-understand tutorials <br />✅
              Practical projects and real-world examples <br /> ✅ Step-by-step
              guides for beginners <br /> ✅ Useful tips for advanced developers{" "}
              <br /> We are dedicated to supporting every learner — one line of
              code at a time
            </p>
          </div>
          <div class="col-md-6 ">
            
            <img src="./images/Aboutus.jpg" alt="image here" height="500px" width="700px" className="img-fluid mx-auto shadow-lg rounded-3 mb-4" />
          </div>
        </div>
        {/* <p class="lead">
              💡<span className="fw-bold">What We Offer</span>
              <br />
              ✔ Beginner friendly tutorials <br />
              ✔ Interactive coding examples <br />
              ✔ Project-based learning <br />
              ✔ Clear explanations of complex topics <br />
              ✔ Tips from real developers <br />
              Whether you want to learn HTML, CSS, JavaScript, Python, React,
              Tailwind, Bootstrap or other modern tools — you’ll find it here.
            </p>
            <p class="lead">
              🌐<span className="fw-bold">Why Icoder?</span>
              <br />
              🧠 Easy to learn <br />
              🚀 Fun to explore <br />
              📈 Useful in real life <br />
              🤝 Helpful for your career growth <br />
              From theory to practical application — we guide you step-by-step.
              Our focus is on learning by doing.
            </p>
            <p class="lead">
              🤝<span className="fw-bold">Our Vision</span>
              <br />
              To create a global community where learners from anywhere in the
              world can: <br />
              🚀 Improve their skills <br />
              💻 Build real projects <br />
              💼 Achieve their dream career <br />
              <br />
              We want every coder to feel confident and ready to take on real
              challenges.
            </p> */}
            
            
            <p class="lead">
              📬<span className="fw-bold">Get In Touch</span>
              <br />
              We love hearing from our learners! If you have any questions,
              feedback, or suggestions, feel free to reach out.
              <br /> <br />
              📧 Email: support@icoder.com <br />
              📍 Follow us on social media for tips, tutorials, and more!
            </p>
      </div>
    </>
  );
};

export default AboutUs;
