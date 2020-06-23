import React from "react";

function CategoriesComponent() {
  return (
    <div class="container has-text-centered">
      <nav class="panel is-primary">
        <p class="panel-heading">Categories</p>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="far fa-circle"></i>
          </span>
          test
        </a>
        <a class="panel-block">
          <button class="button">
            <i class="fas fa-plus"></i>
          </button>
          <input class="input" type="text" placeholder="Add another category" />
        </a>
      </nav>
    </div>
  );
}

export default CategoriesComponent;
