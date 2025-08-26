# 📝 Projet Todo List - Node.js & React

## 1. Installation et configuration de Node.js

### Étapes d'installation

1.  Installer [Node.js](https://nodejs.org/) (version LTS recommandée).\
    Vérifier l'installation :

    ``` bash
    node -v
    npm -v
    ```

2.  Créer un dossier de projet minimaliste et se positionner dedans :

    ``` bash
    mkdir node_test_app
    cd node_test_app
    ```

3.  Initialiser `npm` :

    ``` bash
    npm init -y
    ```

4.  Installer `dotenv` et `nodemon` :

    ``` bash
    npm install dotenv
    npm install --save-dev nodemon
    ```

5.  Créer un fichier **`.env`** :

    ``` env
    SERVER_PORT=3000
    SERVER_HOST=127.0.0.1
    ```

6.  Créer un fichier **`server.js`** :

    ``` js
    import { createServer } from 'node:http';
    import { say } from "cowsay";
    import dotenv from 'dotenv';

    dotenv.config()


    const mycow = say({
    text: "I'm the USA",
    e: "oo",
    T: "9",
    f: "USA"
    });

    const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(mycow);
    });

    // starts a simple http server locally on port 3000
    server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
    console.log(`Server running at http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`);
    });

    // run with `node server.mjs`

    ```

8.  Lancer le serveur :

    ``` bash
    npm run dev
    ```

    Ouvrir <http://localhost:3000> et vérifier l'affichage avec
    **cowsay** 🐮.

------------------------------------------------------------------------

## 2. Création et test du projet React

### Installation avec Vite

1.  Créer une nouvelle application :

    ``` bash
    npm create vite@latest my-todo-app
    cd my-todo-app
    npm install
    ```

2.  Lancer le projet :

    ``` bash
    npm run dev
    ```

    L'application est disponible sur l'URL indiquée dans le terminal
    (souvent <http://localhost:5173>).

------------------------------------------------------------------------

### Création de composants simples

-   Exemple d'un composant `Hello.jsx` :

    ``` jsx
    export default function Hello() {
      return <h1>Hello React 👋</h1>;
    }
    ```

-   L'intégrer dans `App.jsx` :

    ``` jsx
    import Hello from "./Hello";

    function App() {
      return <Hello />;
    }

    export default App;
    ```

------------------------------------------------------------------------

### Manipulation de `.map()` pour une liste

``` jsx
function App() {
  const fruits = ["Pomme", "Banane", "Fraise"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

------------------------------------------------------------------------

### Développement d'une Todo List minimaliste

1.  Création d'un composant `TaskList.jsx`
    -   Ajout, suppression, édition et toggle des tâches.
    -   Gestion des états avec `useState`.
2.  Organisation visuelle
    -   Mise en place d'un design clair inspiré de **Microsoft To Do**.
    -   Respect des contrastes et accessibilité.
3.  Exemple de rendu :
    -   Formulaire pour ajouter une tâche.
    -   Liste d'éléments avec checkbox + boutons modifier/supprimer.

------------------------------------------------------------------------

## 3. Difficultés rencontrées et solutions

### 🎨 Design et organisation visuelle

-   Ajustement des contrastes (fond clair/sombre, texte lisible).
-   Alignement des éléments avec `flex` et `grid`.
-   Proportions correctes pour une meilleure expérience utilisateur.

### ⚙️ Logique de l'application

-   Gestion des **multiples fonctions** : ajout, suppression,
    modification de tâche.
-   Mise en place du **toggle** (complété ↔ non complété).
-   Création d'une logique propre pour la modification (édition +
    validation/annulation).

### 🤝 Aide de ChatGPT et Copilot

-   **ChatGPT** m'a aidé à :
    -   Organiser le style CSS (me rapprocher de Microsoft To Do).
    -   Corriger des problèmes de contraste et de lisibilité.
    -   Simplifier et refactorer le code pour le rendre plus clair.
-   **GitHub Copilot** m'a soutenu dans :
    -   L'autocomplétion de fonctions simples.
    -   La génération de snippets React (boucles `.map`, hooks
        `useState`).
    -   Le gain de temps dans la rédaction du code répétitif.

------------------------------------------------------------------------

## 🚀 Conclusion

Ce projet m'a permis de : - Découvrir le lien entre **Node.js** et
**React**. 
- M'entraîner à manipuler des **composants React**, des
**hooks** et du **JSX**. 
- Comprendre l'importance d'un **design
soigné** et de l'**expérience utilisateur**. 
- M'appuyer sur des outils
d'IA (ChatGPT, Copilot) pour progresser plus rapidement.
