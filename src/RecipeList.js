import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipe, recipes, setRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const mappedRecipes = recipes.map((recipe, index) => {
    return <Recipe recipes={recipes} recipe={recipe} setRecipes={setRecipes} key={index} />;
  });

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
