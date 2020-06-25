import React from "react";

export default function CategoriesItem({ category }) {
  return <option>{category.name}</option>;
}
