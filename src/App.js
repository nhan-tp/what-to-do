import React from "react";
import "./App.scss";
import ChooserTab from "./Chooser/ChooserTab";
import CategoriesTab from "./Categories/CategoriesTab";
import ActivitiesTab from "./Activities/ActivitiesTab";

function App() {
  return (
    <div>
      {/* Main Section */}
      <section class="hero is-primary has-text-centered">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">What are we doing tonight?</h1>
            <h2 class="subtitle">
              An app to help the indecisive <i class="far fa-grin-wink"></i>
            </h2>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div class="tabs is-centered">
        <ul>
          <ChooserTab />
          <CategoriesTab />
          <ActivitiesTab />
        </ul>
      </div>
    </div>
  );
}

export default App;
