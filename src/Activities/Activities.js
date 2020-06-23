import React from "react";

function Activities() {
  return (
    <div class="container has-text-centered">
      <nav class="panel is-primary">
        <p class="panel-heading">Activities</p>
        <p class="panel-tabs">
          {/* TODO: Add logic to show categories */}
          <a>categories tabs</a>
        </p>
        <a class="panel-block">
          <span class="panel-icon">
            <i class="far fa-circle"></i>
          </span>
          {/* TODO: Add activities dynamically in list */}
          item activity
        </a>
        <a class="panel-block">
          <button class="button">
            <i class="fas fa-plus"></i>
          </button>
          <input class="input" type="text" placeholder="Add another activity" />
        </a>
      </nav>
    </div>
  );
}

export default Activities;
