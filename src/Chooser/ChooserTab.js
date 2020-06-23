import React from "react";
import { Link } from "react-router-dom";

function ChooserTab() {
  return (
    <div>
      <li id="chooser_tab">
        <Link to="/">
          <span class="icon is-small">
            <i class="fas fa-question-circle"></i>
          </span>
          <span>Chooser</span>
        </Link>
      </li>
    </div>
  );
}

export default ChooserTab;
