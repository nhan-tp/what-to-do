import React from "react";

function Chooser() {
  return (
    <div class="container has-text-centered" id="chooser">
      <a class="button is-primary is-rounded is-large">Pick for me plz</a>
      <div class="field has-text-centered">
        <div class="control has-text-centered">
          <div class="select is-primary is-rounded is-small has-text-centered">
            <select>
              {/* TODO: Add logic to list all categories */}
              <option>categorytest</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      {/* TODO: Add logic to list result here */}
      <h1 class="title is-1">addresult here</h1>
    </div>
  );
}

export default Chooser;
