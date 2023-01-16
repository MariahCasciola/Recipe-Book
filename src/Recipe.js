import React from "react";

function Recipe({ recipes, recipe, setRecipes }) {
  //will filter through recipes that were created, and find the recipe that we want to delete, and provide us with the new list of recipes
  const handleDelete = () => {
    const filterRecipes = recipes.filter((element) => {
      return element !== recipe;
    });
    setRecipes(filterRecipes);
  };
  //this is Recipe's output, it is the structure of each recipe that will be inside RecipeList's output
  return (
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
