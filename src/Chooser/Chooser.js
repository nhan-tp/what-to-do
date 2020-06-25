import React, { useState } from "react";
import CategoriesList from "../Categories/CategoriesList";

export default function Chooser() {
  const [categories, setCategories] = useState([
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
  ]);
  // const [chosenCategories, setChosenCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  let chosenCategories = [];
  function chooseCategory(e) {
    const categoryNames = categories.map((category) => category.name);
    const randomCategory = getRandomCategory(categoryNames);

    // setChosenCategory(randomCategory);
  }

  function getRandomCategory(categories) {
    let randomCategory = "";

    if (categories.length > 0) {
      // Keep generating random result
      console.log(
        !randomCategory ||
          (chosenCategories.includes(randomCategory) &&
            chosenCategories.length < categories.length)
      );
      while (
        !randomCategory ||
        (chosenCategories.includes(randomCategory) &&
          chosenCategories.length < categories.length)
      ) {
        randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
        console.log(randomCategory);
      }

      if (chosenCategories.length === categories.length) {
        // setChosenCategories([]);
        chosenCategories = [];
      }
      chosenCategories.push(randomCategory);
      // setChosenCategories((chosen) => chosen.concat(randomCategory));
    }
    console.log(randomCategory, chosenCategories);
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
      {/* TODO: Add logic to list result here */}
      <h1 className="title is-1">{chosenCategory}</h1>
    </div>
  );
}
