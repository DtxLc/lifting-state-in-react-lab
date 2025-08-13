// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            buttonText="X"
            onButtonClick={() => removeFromBurger(index)}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
