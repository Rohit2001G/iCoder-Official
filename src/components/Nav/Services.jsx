import React from 'react'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
     <div className="container-about my-4">
        <div class="services-image col-md-12 order-md-1">
        </div>
        <h1 class="featurette-heading text-center mt-3">
          <span className="text-terms text-primary">Services</span> -{" "}
          <span id="icoder">iCoder</span>{" "}
        </h1>
        <p>
          <strong> Last Updated: 15 / 02 / 2026</strong> <br /> <br />
          Welcome to <strong>ICoder</strong>.
          <br />
          “<strong>iCoder</strong>  offers step-by-step online tutorials to help you learn HTML, CSS, JavaScript, and PHP for building real web applications.” <br />
        </p>
        

        <div className="m-5">
<div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-danger">World of Hypertext</strong>
          <h3 class="mb-0">HTML</h3>
          <div class="mb-1 text-muted">Nov 21</div>
          <p class="card-text mb-auto">HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web.</p>
          <Link to="/HTMLTutorial" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/html.jpg"width="220" height="250"alt="" />
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-warning">World of Styling</strong>
          <h3 class="mb-0">CSS</h3>
          <div class="mb-1 text-muted">Nov 19</div>
          <p class="mb-auto">CSS (Cascading Style Sheets) is a stylesheet language that’s used to style and enhance the appearance of web pages created with HTML.</p>
          <Link to="/CSSTutorial" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/css.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Make Some Logics</strong>
          <h3 class="mb-0">JavaSrcipt</h3>
          <div class="mb-1 text-muted">Nov 15</div>
          <p class="card-text mb-auto">JavaScript is a powerful, lightweight programming language used to make web pages interactive and dynamic.</p>
          <Link to="/JavascriptTutorial" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/js.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-info">Backend</strong>
          <h3 class="mb-0">PHP</h3>
          <div class="mb-1 text-muted">Nov 14</div>
          <p class="mb-auto">“PHP is an open‑source server‑side scripting language used to build dynamic and interactive web pages</p>
          <Link to="/PHPTutorial" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/php.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
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
  )
}

export default Services;
