import React from "react";

function Recipe({ recipes, recipe, setRecipes }) {
  const handleDelete = () => {
    const filterRecipes = recipes.filter((element) => {
      return element !== recipe;
    });
    setRecipes(filterRecipes);
  };
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
      <td className="content_td" >
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
