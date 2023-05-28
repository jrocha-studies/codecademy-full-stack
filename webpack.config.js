// -----------------------------------------------------------------------------
// Please, set these constants:
// -----------------------------------------------------------------------------

const TYPESCRIPT = false;
const NODE = false;
const REACT = false;
const ANGULAR = true;
const VUE = false;

// main.ts in angular, index.tsx/jsx in react, index.js in node, main.js/.ts in vue
const ENTRY = "./src/index.jsx";

// -----------------------------------------------------------------------------

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // TYPESCRIPT
let VueLoaderPlugin = null;
if (VUE) {
  VueLoaderPlugin = require("vue-loader/lib/plugin");
}
const webpack = require("webpack");

module.exports = {
  // Compile for usage in a Node.js-like environment (uses Node.js require to load chunks)
  ...(NODE ? { target: "node" } : {}),
  entry: ENTRY,

  output: {
    // Compile to a 'dist' directory
    path: path.resolve(__dirname, "dist"),
    // Compile to a single bundle.js file
    filename: "bundle.js",
  },

  resolve: {
    // Resolve .js extensions (ok for node.js)
    extensions: [
      ".js",
      ...(REACT && TYPESCRIPT ? [".jsx, .ts, .tsx"] : []),
      ...(REACT && !TYPESCRIPT ? [".jsx"] : []),
      ...(ANGULAR ? [".ts"] : []),
      ...(VUE ? [".vue"] : []),
    ],
    ...(VUE ? { alias: { vue$: "vue/dist/vue.esm.js" } } : {}),
  },

  module: {
    rules: [
      //------------------------------------------------------------------------
      // NODE.JS and VUE
      //------------------------------------------------------------------------
      ...(NODE || VUE
        ? {
            // Apply this rule to files ending in .js
            test: /\.js$/,
            // Don't apply to files residing in node_modules
            exclude: /node_modules/,
            use: "babel-loader",
          }
        : {}),
      //------------------------------------------------------------------------
      // REACT
      //------------------------------------------------------------------------
      ...(REACT && TYPESCRIPT
        ? {
            test: /\.ts$|.tsx$/,
            exclude: /node_modules/,
            use: "ts-loader",
          }
        : {}),
      ...(REACT && !TYPESCRIPT
        ? {
            test: /\.js$|.jsx$/,
            exclude: /node_modules/,
            use: {
              // Use Babel to transpile JavaScript files
              loader: "babel-loader",
              options: {
                // Configure Babel to use preset env (compile modern JS down to ES5 "just in case")
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          }
        : {}),
      //------------------------------------------------------------------------
      // ANGULAR
      //------------------------------------------------------------------------
      ...(ANGULAR || (VUE && TYPESCRIPT)
        ? {
            // Apply this rule to files ending in .js or .jsx
            test: /\.ts$/,
            exclude: /node_modules/,
            use: "ts-loader",
          }
        : {}),
      //------------------------------------------------------------------------
      // VUE
      //------------------------------------------------------------------------
      ...(VUE
        ? {
            // Apply this rule to files ending in .js or .jsx
            test: /\.vue$/,
            exclude: /node_modules/,
            use: "vue-loader",
          }
        : {}),

      // HTML ------------------------------------------------------------------
      {
        test: /\.html$|.htm$/,
        // Enable 'importing' HTML files
        use: ["html-loader"],
      },
      // CSS -------------------------------------------------------------------
      {
        test: /\.css$/,
        // Enable 'import' of .css files
        use: ["style-loader", "css-loader"],
      },
      // SASS ------------------------------------------------------------------
      {
        test: /\.scss$|.sass$/,
        // Enable 'import' of .scss files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // LESS ------------------------------------------------------------------
      {
        test: /\.less$/,
        // Enable 'import' of .less files
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    // Clean the 'dist' directory before each build (ANGULAR)
    new CleanWebpackPlugin(),
    // Generate an index.html file with <script> injected.
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Specify the HTML template to use
    }),
    VUE
      ? new VueLoaderPlugin({
          // Make sure to include the plugin!
          __VUE_OPTIONS_API__: true,
          __VUE_PROD_DEVTOOLS__: false,
        })
      : null,
  ],
  devServer: {
    // Serve files from the 'dist' directory
    contentBase: path.resolve(__dirname, "dist"),
    // Enable gzip compression for everything served
    compress: true,
    // Enable hot reloading, i.e. refresh the page when changes are made
    hot: true,
    // Open the site in a browser on startup
    open: true,
    // Specify the port to listen on
    ...(REACT || NODE ? { port: 3000 } : {}),
    ...(ANGULAR ? { port: 4200 } : {}),
    ...(VUE ? { port: 8080 } : {}),
    // HTML5 History API support: index.html will be served in place of any 404 responses
    historyApiFallback: true,
  },
};

/*
NODE

npm install --save-dev
  webpack webpack-cli
  babel-loader @babel/core @babel/preset-env

REACT

npm install --save-dev
  webpack webpack-cli
  babel-loader @babel/core @babel/preset-env
  @babel/preset-react
  html-webpack-plugin

REACT TYPESCRIPT

npm install --save-dev
  webpack webpack-cli
  ts-loader
  clean-webpack-plugin
  html-webpack-plugin


ANGULAR

npm install --save-dev
  webpack webpack-cli
  ts-loader
  clean-webpack-plugin
  html-webpack-plugin

HTML

npm install --save-dev
  html-loader

CSS

npm install --save-dev
  style-loader css-loader


npm install --save-dev
  sass sass-loader
  less less-loader
  style-loader css-loader



*/
