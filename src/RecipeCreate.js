import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
//defaulting the form submitions to be empty strings 
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  //creating a shallow copy of initial form state as to not mutate the variable initialFormState
  const [formState, setFormState] = useState({ ...initialFormState });
 //on the event that a new character is typed in each input, handleChange will be called     
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
