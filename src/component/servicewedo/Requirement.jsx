import React from "react";
import "./requirement.css";

function Requirement() {
  return (
    <div className="requirement">
      <div className="your-requirement">
        <h1>
          Tell <span style={{ color: "#ED1C24" }}>Us Your</span> Requirements
        </h1>
      </div>
      <div className="req-form">
        <form id="userForm">
          <div className="row-req">
            <input type="text" id="name" placeholder="Enter Your Name" required />
            <input type="email" id="email" placeholder="Enter Your Email" required />
          </div>
          <div className="row-req">
            <input type="tel" id="mobile" placeholder="Enter Number" required />
          </div>
          <div className="row-req">
            <input type="text" id="requirement" placeholder="Enter Your Requirements" required />
          </div>
          <div className="select-req">
            <p>Select Requirements</p>
          </div>
          <div className="checkbox-container-req">
            <div className="checkbox-column">
                <label> Mobile App UI<input type="checkbox" value="Mobile App UI" /></label>
                <label> Hybrid Development<input type="checkbox" value="Hybrid Development" /></label>
                <label>IOS App Development<input type="checkbox" value="IOS App Development" /> </label>
                <label>Mobile App Development<input type="checkbox" value="Mobile App Development" /> </label>
                <label> Android App Development<input type="checkbox" value="Android App Development" /></label>
            </div>
            <div className="checkbox-column">
                <label> Logo Design<input type="checkbox" value="Logo Design" /></label>
                <label> React Design<input type="checkbox" value="React Design" /></label>
                <label> Graphic Design<input type="checkbox" value="Graphic Design" /></label>
                <label> Interprises Development<input type="checkbox" value="Interprises Development" /></label>
                <label>Responsive+Website Design<input type="checkbox" value="Responsive+Website Design" /> </label>
            </div>
            <div className="checkbox-column">
                <label> PHP Development<input type="checkbox" value="PHP Development" /></label>
                <label>Drupol Development<input type="checkbox" value="Drupol Development" /> </label>
                <label> Custom Design<input type="checkbox" value="Custom Design" /></label>
                <label> Wordpress Development<input type="checkbox" value="Wordpress Development" /></label>
                <label> E-Commerce Development<input type="checkbox" value="E-Commerce Development" /></label>
            </div>
        </div>

          <div className="req-submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Requirement;
