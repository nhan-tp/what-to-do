import React from "react";
import CategoriesItem from "./CategoriesItem";

export default function CategoriesList({ categories }) {
  return categories.map((category) => {
    return <CategoriesItem key={category.id} category={category} />;
  });
}
