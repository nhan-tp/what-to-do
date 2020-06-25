import React from "react";
import { Link } from "react-router-dom";

export default function ActivitiesTab() {
  return (
    <li id="activities_tab">
      <Link to="/activities">
        <span className="icon is-small">
          <i className="fas fa-list-alt"></i>
        </span>
        <span>Activities</span>
      </Link>
    </li>
  );
}
