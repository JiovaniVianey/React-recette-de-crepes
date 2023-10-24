import PropTypes from 'prop-types';

// responsabilité :  générer un li pour un ingrédient : les informations
// nécessaires sont fournies en prop

// Note : on n'a pas fait un dossier dans App pour ce composant parce que c'est
// juste une partie du composant Ingredients, ce n'est pas un bloc de notre application
const Ingredient = ({ quantity, unit, name }) => {
  return (
    <li className="ingredient">
      <span className="quantity">
        {quantity} {unit}
      </span>
      {name}
    </li>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Ingredient;
