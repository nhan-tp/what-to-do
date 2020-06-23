import React from "react";
import "./App.scss";

import ChooserTab from "./Chooser/ChooserTab";
import CategoriesTab from "./Categories/CategoriesTab";
import ActivitiesTab from "./Activities/ActivitiesTab";

import Chooser from "./Chooser/Chooser";
import Activities from "./Activities/Activities";
import Categories from "./Categories/Categories";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      <Router>
        <div class="tabs is-centered">
          <ul>
            <ChooserTab />
            <ActivitiesTab />
            <CategoriesTab />
          </ul>
        </div>
        <Switch>
          <Route path="/activities" component={Activities} />
          <Route path="/categories" component={Categories} />
          <Route path="/" component={Chooser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
