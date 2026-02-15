import React from "react";
import { NavLink,Link } from "react-router-dom";

function Footer(){
    return(
        <>
<footer class="text-muted py-5 bg-dark">
  <div class="container">
    <p class=" float-end mb-1" >
        <NavLink to="/PrivacyPolicies" id="text-underline" className="mx-4">Privacy Policies</NavLink>
        <NavLink to="/TearmConditions" id="text-underline" className="mx-4">Tearm and Conditions</NavLink>
    </p>
    <p class="mb-1 text-light">Album example is © Bootstrap, but please download and customize it for yourself!</p>
    <p class="mb-0 text-light">New to Bootstrap? <Link to="/">Visit the homepage</Link> or read our getting started guide.</p>
  </div>
  
</footer>
        </>
    )
}
export default Footer;