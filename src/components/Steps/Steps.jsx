import PropTypes from 'prop-types';

import './Steps.scss';

const Steps = ({ steps }) => {
  return (
    <ol className="steps">
      {steps.map((element) => (
        <li className="step" key={element}>
          {element}
        </li>
      ))}
    </ol>
  );
};

Steps.propTypes = {
  // un tableau de chaînes de caractères
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Steps;
