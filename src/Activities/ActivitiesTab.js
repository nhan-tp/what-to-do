import React from "react";
import { Link } from "react-router-dom";

function ActivitiesTab() {
  return (
    <div>
      <li id="activities_tab">
        <Link to="/activities">
          <span class="icon is-small">
            <i class="fas fa-list-alt"></i>
          </span>
          <span>Activities</span>
        </Link>
      </li>
    </div>
  );
}

export default ActivitiesTab;
