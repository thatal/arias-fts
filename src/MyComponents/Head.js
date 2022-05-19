import React from "react";

export const Head = () => {
  let head = "Arias FTS";
  return (
    <div className="heading">       
      <nav className="navbar navbar-expand-lg bg-light">
        <a className="navbar-brand" href="#">
           <h3>{head}</h3>
        </a>
        {/* <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};
