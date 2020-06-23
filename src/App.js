import React from "react";
import "./App.scss";

import ChooserTab from "./Chooser/ChooserTab";
import CategoriesTab from "./Categories/CategoriesTab";
import ActivitiesTab from "./Activities/ActivitiesTab";

import ChooserComponent from "./Chooser/ChooserComponent";
import ActivitiesComponent from "./Activities/ActivitiesComponent";
import CategoriesComponent from "./Categories/CategoriesComponent";

function App() {
  return (
    <div>
      {/* Main Header */}
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
          <ActivitiesTab />
          <CategoriesTab />
        </ul>
      </div>

      {/* Components */}
      <ChooserComponent />
      <ActivitiesComponent />
      <CategoriesComponent />
    </div>
  );
}

export default App;
