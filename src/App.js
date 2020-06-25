import React from "react";
import "./App.scss";

import ChooserTab from "./Chooser/ChooserTab";
import CategoriesTab from "./Categories/CategoriesTab";
import ActivitiesTab from "./Activities/ActivitiesTab";

import Chooser from "./Chooser/Chooser";
import Activities from "./Activities/Activities";
import Categories from "./Categories/Categories";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      {/* Main Header */}
      <section className="hero is-primary has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">What are we doing tonight?</h1>
            <h2 className="subtitle">
              An app to help the indecisive <i className="far fa-grin-wink"></i>
            </h2>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <Router>
        <div className="tabs is-centered">
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
