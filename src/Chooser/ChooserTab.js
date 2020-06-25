import React from "react";
import { Link } from "react-router-dom";

export default function ChooserTab() {
  return (
    <li id="chooser_tab">
      <Link to="/">
        <span className="icon is-small">
          <i className="fas fa-question-circle"></i>
        </span>
        <span>Chooser</span>
      </Link>
    </li>
  );
}
