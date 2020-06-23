import React from "react";

function Categories() {
  return (
    <div className="container has-text-centered">
      <nav className="panel is-primary">
        <p className="panel-heading">Categories</p>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="far fa-circle"></i>
          </span>
          test
        </a>
        <a className="panel-block">
          <button className="button">
            <i className="fas fa-plus"></i>
          </button>
          <input
            className="input"
            type="text"
            placeholder="Add another category"
          />
        </a>
      </nav>
    </div>
  );
}

export default Categories;
