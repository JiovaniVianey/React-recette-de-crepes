// - en premier les imports depuis des packages npm

// - ensuite les imports qui viennent du projet, dans un autre dossier
import Banner from '../Banner/Banner';
import Ingredients from '../Ingredients/Ingredients';
import Steps from '../Steps/Steps';

// on importe les données de la recette, fichier recipe.js
// c'est un export par défaut : on choisit le nom qu'on veut pour l'import
import recipeData from '../../data/recipe';

// - enfin les imports qui viennent du même dossier
import './App.scss';

// console.log(recipeData);

/*
Plan d'action pour la dynamisation :
- utiliser les véritables données src/data/recipe.js
(- gérer les interactions utilisateur) <= aucune sur ce projet
*/

// premier petit objectif : fournir la valeur de la propriété title au composant
// Banner

function App() {
  return (
    <div className="App">
      <Banner
        title={recipeData.title}
        author={recipeData.author}
        difficulty={recipeData.difficulty}
        thumbnail={recipeData.thumbnail}
      />
      <Ingredients list={recipeData.ingredients} />
      <Steps steps={recipeData.instructions} />
    </div>
  );
}

export default App;
