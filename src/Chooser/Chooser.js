import React from "react";

function Chooser() {
  return (
    <div className="container has-text-centered" id="chooser">
      <a className="button is-primary is-rounded is-large">Pick for me plz</a>
      <div className="field has-text-centered">
        <div className="control has-text-centered">
          <div className="select is-primary is-rounded is-small has-text-centered">
            <select>
              {/* TODO: Add logic to list all categories */}
              <option>categorytest</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      {/* TODO: Add logic to list result here */}
      <h1 className="title is-1">addresult here</h1>
    </div>
  );
}

export default Chooser;
