import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, setRecipes }) {
//this is list of recipes the user had or will create, the list starts empty until the user submits the form
  const mappedRecipes = recipes.map((recipe, index) => {
    return <Recipe recipes={recipes} recipe={recipe} setRecipes={setRecipes} key={index} />;
  });
//creates table headers to display over mappedrecipes
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{mappedRecipes}</tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default RecipeList;
