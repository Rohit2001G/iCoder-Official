import React from "react";
import { Link } from "react-router-dom";

function Body(){
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/coding3.jpg"height='550px' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className="text-primary fw-bold fs-3">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/coding2.jpg"height='550px' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/coding1.jpg"height='550px' class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="m-5 wrapper">
<div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-danger">World of Security</strong>
          <h3 class="mb-0">Security is Priority</h3>
          <div class="mb-1 text-muted">Nov 21</div>
          <p class="card-text mb-auto">Security has become one of the most critical priorities for individuals, businesses, and organisations in today’s digitally connected world.</p>
          <Link to="/Security" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body1.jpg"width="220" height="250"alt="" />
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-warning">Play</strong>
          <h3 class="mb-0">Coding Playing</h3>
          <div class="mb-1 text-muted">Nov 19</div>
          <p class="mb-auto">Coding is not just writing lines of instructions for a computer; it’s an exciting way to solve problems, build creative projects, and continuously learn new skills.</p>
          <Link to="/Coding" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body2.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Logic</strong>
          <h3 class="mb-0">Enhance Logic Skill</h3>
          <div class="mb-1 text-muted">Nov 15</div>
          <p class="card-text mb-auto">Improving your logic skills is one of the most valuable abilities you can develop, especially in fields like programming, problem-solving, and decision-making.</p>
          <Link to="/Logic" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body3.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Design Web</h3>
          <div class="mb-1 text-muted">Nov 14</div>
          <p class="mb-auto">Web design refers to the process of planning, creating, and arranging the visual layout, user interface, and overall experience of a website.</p>
          <Link to="/Design" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body4.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-danger">Smart Coding</strong>
          <h3 class="mb-0">Code Smartly</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">Writing code smartly means much more than just making a program work — it means creating code that is clean, understandable, efficient, and maintainable over time.</p>
          <Link to="SmartCoding" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body5.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
    
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-info">Problems</strong>
          <h3 class="mb-0">Look at Problems</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">Problem-solving is a foundational skill in coding and software development because programming is essentially about identifying challenges and finding effective solutions to them.</p>
          <Link to="/LookProblems" class="stretched-link">Continue reading</Link>
        </div>
        <div class="col-auto d-none d-sm-block">
          <img src="./images/body6.jpg"width="220" height="250" alt="" />
        </div>
      </div>
    </div>
  </div>
  </div>
        
        </>
    )
}

export default Body;