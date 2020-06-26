import React, { useState } from "react";
import CategoriesList from "../Categories/CategoriesList";

export default function Chooser(categories) {
  const [chosenCategories, setChosenCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");

  function chooseCategory(e) {
    const categoryNames = categories.map((category) => category.name);
    const randomCategory = getRandomCategory(categoryNames);
    setChosenCategory(randomCategory);
  }

  function getRandomCategory(categories) {
    let randomCategory = "";

    if (categories.length > 0) {
      // Keep generating random result
      while (
        !randomCategory ||
        (chosenCategories.includes(randomCategory) &&
          chosenCategories.length < categories.length)
      ) {
        randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
      }

      if (chosenCategories.length === categories.length) {
        setChosenCategories((chosen) => []);
      }
      setChosenCategories((chosen) => [...chosen, randomCategory]);
    }
    return randomCategory;
  }

  return (
    <div className="container has-text-centered" id="chooser">
      <a
        className="button is-primary is-rounded is-large"
        onClick={chooseCategory}
      >
        Pick for me plz
      </a>
      <div className="field has-text-centered">
        <div className="control has-text-centered">
          <div className="select is-primary is-rounded is-small has-text-centered">
            <select>
              {/* TODO: Add logic to list all categories */}
              <CategoriesList categories={categories} />
            </select>
          </div>
        </div>
      </div>
      <br />
      <h1 className="title is-1">{chosenCategory}</h1>
    </div>
  );
}
