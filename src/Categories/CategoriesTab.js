import React from "react";
import { Link } from "react-router-dom";

export default function CategoriesTab() {
  return (
    <li id="category_tab">
      <Link to="/categories">
        <span className="icon is-small">
          <i className="fas fa-list-alt"></i>
        </span>
        <span>Categories</span>
      </Link>
    </li>
  );
}
