// on importe un outil depuis une bibliothèque npm (déjà présent dans les dépendances du projet, à l'intérieur de Vite)
import PropTypes from 'prop-types';

import './Banner.scss';

function Banner({ title, thumbnail, author, difficulty }) {
  // console.log(title);

  return (
    <header className="banner">
      <img src={thumbnail} alt="" className="banner-image" />
      <div className="banner-content">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-info">
          {author} - {difficulty}
        </p>
      </div>
    </header>
  );
}

/* on indique le type attendu pour chaque prop => en cas d'erreur sur le passage des props (faute de frappe sur le nom d'une prop, passage d'un objet au lieu d'une string, etc) on aura un message d'erreur très clair dans la console, par exemple:
- Warning: Failed prop type: Invalid prop `title` of type `object` supplied to `Banner`, expected `string`.
- Warning: Failed prop type: The prop `title` is marked as required in `Banner`, but its value is `undefined`
*/
// /!\ propTypes, pas PropTypes ici
Banner.propTypes = {
  // nom de la prop: type attendu
  // Banner a besoin d'avoir une information "title", qui est une chaîne de caractères
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Banner;

/*
Autres possibilités :

Ecrire le composant sous forme de fléchée :
const Banner = () => {
  return <div>Ici bientôt Banner</div>;
}

On pourrait faire l'export directement :
export default function Banner() {
  return <div>Ici bientot Banner</div>;
}
*/
