import React from 'react'

export const SmartCoding = () => {
  return (
    <>
     <div className="container-about">
        <div class="row featurette mt-5 d-flex align-items-center ">
            <h2 class="featurette-heading text-center">
              <span className="text-secondary">Smart Coding</span> -{" "}
              <span id="icoder">iCoder</span>{" "}
            </h2>
          <div class="col-md-7 flex-row-reverse p-3">
            
            <br />
            <p class="lead">
              🌟<span className="fw-bold">Code Smartly</span>
              <br /> <br />
            Writing code smartly means much more than just making a program work — it means creating code that is clean, understandable, efficient, and maintainable over time. Smart coding practices include using meaningful variable and function names, following consistent coding standards, and organising code in a way that makes future updates easier for yourself or other developers. When your code is structured well, it reduces bugs and makes debugging faster, so you spend less time fixing errors and more time building useful features. Good coding practices — such as modular design and reusable functions — also help you avoid repeating yourself and keep your projects scalable and adaptable as requirements grow. Implementing tools like version control and automated testing improves teamwork by allowing developers to collaborate smoothly and catch issues early, ensuring higher quality and more reliable applications. Smart coding doesn’t just improve performance and efficiency; it also increases productivity because readable, well-organised code is easier to review, update, and optimise as the project evolves. This approach is essential whether you are working on personal projects, learning new technologies, or building professional software, as it ensures your work remains strong, flexible, and future-proof. Ultimately, code that is written smartly reflects thoughtfulness and professionalism — making development faster, happier, and more effective for everyone involved.
            </p>
          </div>
          <div class="col-md-5 ">
            
            <img src="./images/body5.jpg" alt="image here" height="500px" width="700px" className="img-fluid mx-auto shadow-lg rounded-3 mb-4" />
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
      </div>
    </>
  )
}
