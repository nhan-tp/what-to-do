import React from "react";

export default function Activities(categories) {
  const categoryNames = categories.map((category) => (
    <a key={category.id}>{category.name}</a>
  ));

  return (
    <div className="container has-text-centered">
      <nav className="panel is-primary">
        <p className="panel-heading">Activities</p>
        <p className="panel-tabs">
          {/* TODO: Add logic to show categories */}
          {categoryNames}
        </p>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="far fa-circle"></i>
          </span>
          {/* TODO: Add activities dynamically in list */}
          item activity
        </a>
        <a className="panel-block">
          <button className="button">
            <i className="fas fa-plus"></i>
          </button>
          <input
            className="input"
            type="text"
            placeholder="Add another activity"
          />
        </a>
      </nav>
    </div>
  );
}
