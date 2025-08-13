// src/components/Ingredient/Ingredient.jsx

const Ingredient = ({ ingredient, buttonText, onButtonClick, buttonType }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onButtonClick}>{buttonText}</button>
    </li>
  );
};

export default Ingredient;
