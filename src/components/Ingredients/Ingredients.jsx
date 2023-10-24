import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import './Ingredients.scss';

const Ingredients = ({ list }) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient) => (
        <Ingredient
          unit={ingredient.unit}
          quantity={ingredient.quantity}
          name={ingredient.name}
          key={ingredient.id}
        />
      ))}
    </ul>
  );
};

Ingredients.propTypes = {
  // un tableau d'objets, dont les propriétés sont id, unit, etc
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Ingredients;
