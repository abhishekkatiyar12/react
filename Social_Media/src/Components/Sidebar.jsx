import React, { useState } from "react";
import { House, Person, Gear } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
 

  return (
    <div className="d-flex">
     
        <div className="position-fixed top-0 start-0 vh-100 bg-dark text-white p-4" style={{ width: "250px" }}>
          <h2 className="mb-4">Sidebar</h2>
          <ul className="list-unstyled">
            <li className="p-2 d-flex align-items-center active"><House className="me-2" /> Home</li>
            <li className="p-2 d-flex align-items-center"><Person className="me-2" /> Profile</li>
            <li className="p-2 d-flex align-items-center"><Gear className="me-2" /> Settings</li>
          </ul>
        </div>
    </div>
  );
};

export default Sidebar;