import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  // TODO: Add the required input and textarea form elements.
  const [formState, setFormState] = useState({ ...initialFormState });
  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formState])
    setFormState({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                <input
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formState.name}
                ></input>
              </label>
            </td>
            <td>
              <label>
                <input
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formState.cuisine}
                ></input>
              </label>
            </td>
            <td>
              <label>
                <input
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formState.photo}
                ></input>
              </label>
            </td>
            <td>
              <label>
                <textarea
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formState.ingredients}
                />
              </label>
            </td>
            <td>
              <label>
                <textarea
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formState.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
