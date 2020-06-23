import React from "react";
import { Link } from "react-router-dom";

function CategoriesTab() {
  return (
    <div>
      <li id="category_tab">
        <Link to="/categories">
          <span class="icon is-small">
            <i class="fas fa-list-alt"></i>
          </span>
          <span>Categories</span>
        </Link>
      </li>
    </div>
  );
}

export default CategoriesTab;
