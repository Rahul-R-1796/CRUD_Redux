// CommonHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

const CommonHeader = () => {
  const githubLinkStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/add-employee">
                  Add Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/employee-list">
                  Employee List
                </Link>
              </li>
            </ul>
          </div>
          {/* GitHub logo and link */}
          <a
            href="https://github.com/Rahul-R-1796?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={githubLinkStyle}
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              height="30"
              className="ml-2"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default CommonHeader;
