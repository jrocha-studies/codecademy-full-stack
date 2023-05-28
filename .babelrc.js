/*
Node and Angular
npm install --save-dev @babel/preset-env @babel/cli
React:
npm install --save-dev @babel/preset-env @babel/preset-react
Vue:
npm install --save-dev @vue/cli-plugin-babel
The Vue CLI automatically generates a babel.config.js file in the root directory of your Vue project.
*/

module.exports = {
  presets: [
    [
      "@babel/preset-env", // Transpile modern JavaScript to older versions (for compatibility)
      {
        targets: {
          node: "current", // Transpile for the current version of Node
          browsers: [">0.5%", "last 2 versions", "Firefox ESR", "not dead"],
        },
      },
    ],
    ...(REACT ? ["@babel/preset-react"] : []), // Transpile JSX to JavaScript
    ...(VUE ? ["@vue/babel-preset-app"] : []), // Transpile Vue to JavaScript
  ],

  plugins: [
    ...(ANGULAR ? ["@babel/plugin-proposal-decorators"] : []), // Transpile Angular decorators to JavaScript
    ...(ANGULAR ? ["@babel/plugin-proposal-class-properties"] : []), // Transpile Angular class properties to JavaScript
  ],
};
