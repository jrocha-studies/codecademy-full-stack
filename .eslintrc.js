/**
 * Fix ECMAScript/JavaScript
 * For more information, start here: https://github.com/dustinspecker/awesome-eslint
 */

// -----------------------------------------------------------------------------
// Please, set these constants:
// -----------------------------------------------------------------------------

const TYPESCRIPT = false;

const BROWSER = true; // env
const NODE = true; // env
const COMMONJS = false; // env

const ES6 = 13; // 7 (2016), 8 (2017), 9 (2018), 10 (2019), 11 (2020), 12 (2021), 13 (2022)
const CSS = 'styled-components'; // 'styled-components', 'css-modules', 'emotion', 'tailwind', 'none'
const FRAMEWORK = 'react'; // 'react', 'vue', 'angular', 'jquery'

const MOCHA = false;
const JASMINE = false;
const JEST = false;
const QUNIT = false;

const DTL = false; // Dom Testing Library

const MONGODB = true;

const I18N = false;
const HTML = true;
const YAML = false;
const JSONFILE = true;
const GRAPHQL = false;
const APOLLO = false;

const STYLEGUIDE = 'airbnb'; // 'airbnb', 'unicorn', 'reactapp'

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

module.exports = {
  root: true,
  env: {
    ...(BROWSER ? { browser: true } : {}),
    ...(NODE ? { node: true } : {}),
    ...(COMMONJS ? { commonjs: true } : {}),

    ...(ES6 === 6 ? { es6: true } : {}),
    ...(ES6 === 7 ? { es2016: true } : {}),
    ...(ES6 === 8 ? { es2017: true } : {}),
    ...(ES6 === 9 ? { es2018: true } : {}),
    ...(ES6 === 10 ? { es2019: true } : {}),
    ...(ES6 === 11 ? { es2020: true } : {}),
    ...(ES6 === 12 ? { es2021: true } : {}),
    ...(ES6 === 13 ? { es2022: true } : {}),

    ...(MOCHA ? { mocha: true } : {}),
    ...(JASMINE ? { jasmine: true } : {}),
    ...(JEST ? { jest: true } : {}),
    ...(QUNIT ? { qunit: true } : {}),

    ...(MONGODB ? { mongodb: true } : {}),
  },
  parser: TYPESCRIPT ? '@typescript-eslint/parser' : 'espree', // esprima
  parserOptions: {
    ecmaVersion: 'latest', // 'latest', ES6.toString()
    sourceType: ES6 ? 'module' : 'script', // sourceType: "script" (ES5, .js) or "module" (ES6+) (.js e .mjs) or "commojs" (.cjs)
    ...(FRAMEWORK === 'react' ? { ecmaFeatures: { jsx: true } } : {}),
  },
  extends: [
    'eslint:recommended', // https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    ...(TYPESCRIPT ? ['plugin:@typescript-eslint/recommended'] : []), // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin 1.4M

    /* Style Guides */

    ...(!ES6 ? ['airbnb-base/legacy'] : []), // https://www.npmjs.com/package/eslint-config-airbnb-base 6M npm
    ...(STYLEGUIDE === 'airbnb' && TYPESCRIPT && FRAMEWORK === 'react'
      ? ['airbnb-typescript', 'airbnb/hooks']
      : []), // https://www.npmjs.com/package/eslint-config-airbnb-typescript 1.5M
    ...(STYLEGUIDE === 'airbnb' && TYPESCRIPT && !FRAMEWORK === 'react'
      ? ['airbnb-typescript/base']
      : []), // https://www.npmjs.com/package/eslint-config-airbnb-typescript 1.5M
    ...(STYLEGUIDE === 'airbnb' && !TYPESCRIPT && FRAMEWORK === 'react'
      ? ['airbnb', 'airbnb/hooks']
      : []), // https://www.npmjs.com/package/eslint-config-airbnb 3.5M
    ...(STYLEGUIDE === 'airbnb' && !TYPESCRIPT && !FRAMEWORK === 'react' ? ['airbnb-base'] : []), // https://www.npmjs.com/package/eslint-config-airbnb-base 6M
    ...(STYLEGUIDE === 'unicorn' ? ['plugin:unicorn/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-unicorn 1.6M
    ...(STYLEGUIDE === 'reactapp' ? ['react-app', 'plugin:jsx-a11y/recommended'] : []), // https://www.npmjs.com/package/eslint-config-react-app 4.5M
    ...(STYLEGUIDE === 'reactapp' && JEST ? ['react-app/jest'] : []), // https://www.npmjs.com/package/eslint-config-react-app 4.5M')

    /* CSS */
    ...(CSS === 'styled-components' ? ['plugin:styled-components-a11y/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-styled-components-a11y 23k
    ...(CSS === 'css-modules' ? ['plugin:css-modules/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-css-modules 94k
    ...(CSS === 'tailwind' ? ['plugin:tailwindcss/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-tailwindcss 183k

    'plugin:jsdoc/recommended', // https://www.npmjs.com/package/eslint-plugin-jsdoc 1.4M
    'optimize-regex/recommended', // https://www.npmjs.com/package/eslint-plugin-optimize-regex 30k
    'plugin:no-unsanitized/DOM', // https://www.npmjs.com/package/eslint-plugin-no-unsanitized 174k
    'plugin:security/recommended', // https://www.npmjs.com/package/eslint-plugin-security 565k
    'plugin:sonarjs/recommended', // https://www.npmjs.com/package/eslint-plugin-sonarjs 640k
    'plugin:cypress/recommended', // https://www.npmjs.com/package/eslint-plugin-cypress 2.5M
    'plugin:import/recommended', // https://www.npmjs.com/package/eslint-plugin-import 17.6M
    'plugin:compat/recommended', // browser compatibility https://www.npmjs.com/package/eslint-plugin-compat 361k
    'plugin:markdown/recommended', // lint inside ```js mark https://www.npmjs.com/package/eslint-plugin-markdown 280k
    'prettier', // https://github.com/prettier/eslint-config-prettier 14M
  ],

  plugins: [
    'compat',
    '@html-eslint', // https://yeonjuan.github.io/html-eslint/docs/getting-started/ 13k
    ...(TYPESCRIPT ? ['@typescript-eslint'] : []), // https://typescript-eslint.io/getting-started 19M
    'const-case', // https://www.npmjs.com/package/eslint-plugin-const-case 2.5k
    // https://www.npmjs.com/package/eslint-plugin-styled-components-a11y 23k
    // https://www.npmjs.com/package/eslint-plugin-better-styled-components 27k
    ...(CSS === 'styled-components' ? ['better-styled-components', 'styled-components-a11y'] : []),
    ...(CSS === 'emotion' ? ['@emotion'] : []), // https://www.npmjs.com/package/@emotion/eslint-plugin 161k
    ...(CSS === 'css-modules' ? ['css-modules'] : []), // https://www.npmjs.com/package/eslint-plugin-css-modules 94k
    'eslint-plugin-tsdoc', // https://www.npmjs.com/package/eslint-plugin-tsdoc 195k
    'html', // lint inside <script> tag https://www.npmjs.com/package/eslint-plugin-html 347k
  ],
  rules: {
    // Require expicit accessibility modifiers on class properties and methods
    ...(TYPESCRIPT ? { '@typescript-eslint/explicit-member-accessibility': 'error' } : {}),
    // Force only inline arrow functions
    ...(ES6 ? { 'arrow-body-style': 2 } : {}), // never body style
    'const-case/uppercase': 'error', // https://www.npmjs.com/package/eslint-plugin-const-case 2.5k
    // Force use of custom console
    'no-console': 'error', // comment if programming in node or enforcing console calls
    // https://www.npmjs.com/package/@emotion/eslint-plugin 161k
    // Emotion 11 codemod
    ...(CSS === 'emotion' ? { '@emotion/pkg-renaming': 'error' } : {}),
    // Emotion 10 codemod
    ...(CSS === 'emotion' && FRAMEWORK === 'react'
      ? {
          '@emotion/pkg-renaming': 'error',
          '@emotion/no-vanilla': 'error',
          '@emotion/import-from-emotion': 'error',
          '@emotion/styled-import': 'error',
        }
      : {}),
  },
  overrides: [
    ...(!ES6
      ? {
          // ES5
          files: ['src/**/*.js'],
          extends: [
            'airbnb-base/legacy', // https://www.npmjs.com/package/eslint-config-airbnb-base 6M npm
            ...(JEST ? ['plugin:jest-dom/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-jest-dom 761k
            ...(JEST ? ['plugin:jest-formatting/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-jest-formatting 377k
            ...(DTL ? ['plugin:testing-library/dom'] : []), // https://www.npmjs.com/package/eslint-plugin-testing-library 4.9M
          ],
        }
      : {}),
    ...(I18N
      ? {
          // i18n)
          files: ['i18n-json/**.*'],
          extends: ['plugin:i18n-json/recommended'], // https://www.npmjs.com/package/eslint-plugin-i18n-json 1.1M
        }
      : {}),
    ...(HTML
      ? {
          files: ['*.html', '*.htm'],
          parser: '@html-eslint/parser', // https://yeonjuan.github.io/html-eslint/docs/getting-started/ 13k
          extends: [
            'plugin:@html-eslint/recommended', //https://yeonjuan.github.io/html-eslint/docs/getting-started/ 13k
            ...(FRAMEWORK === 'angular' ? ['plugin:@angular-eslint/template/recommended'] : []),
          ],
          rules: {
            '@html-eslint/indent': ['error', 2], // force 2 space indent
          },
        }
      : {}),
    ...(YAML
      ? {
          files: ['*.yml', '*.yaml'],
          extends: ['plugin:yml/standard'], // eslint-plugin-yml https://www.npmjs.com/package/eslint-plugin-yml 207k
        }
      : {}),
    ...(JSONFILE
      ? {
          files: ['*.json'],
          extends: ['plugin:json/recommended'], // https://www.npmjs.com/package/eslint-plugin-json 485k
        }
      : {}),
    ...(GRAPHQL
      ? {
          // https://the-guild.dev/graphql/eslint/docs/getting-started 276k
          files: ['*.graphql', '*.gql'],
          parser: '@graphql-eslint/eslint-plugin',
          plugins: ['@graphql-eslint'],
          rules: { 'graphql-eslint/know-type-names': 'error' },
        }
      : {}),
    ...(APOLLO
      ? {
          // apollo graphql https://www.npmjs.com/package/eslint-plugin-graphql 496k
          files: [
            'graphql/**/*.json',
            'graphql/**/*.graphqls',
            'graphql/**/*.graphql',
            'graphql/**/*.gql',
            'graphql/**/*.js',
          ],
          parser: 'babel-eslint',
          plugins: ['graphql'],
          rules: {
            'graphql/template-strings': [
              'error',
              {
                env: 'apollo', // apollo, relay, lokka, fraql, literal
                schemaJson: require('./graphql/schema.json'),
              },
            ],
          },
        }
      : {}),
    ...(NODE
      ? {
          files: [
            'index.js',
            'app.js',
            'routes/**/*.*',
            'controllers/**/*.*',
            'models/**/*.*',
            'config/**/*.*',
            'bin/**/*.*',
          ],
          env: { node: true },
          extends: ['plugin:n/recommended'], // https://www.npmjs.com/package/eslint-plugin-n 1.2M
          ignores: ['**/*.ejs'],
          ...(MONGODB ? { plugins: ['mongodb'] } : {}), // https://www.npmjs.com/package/eslint-plugin-mongodb 1.2M
          rules: {
            // Require return statements after callbacks
            'n/callback-return': 'error',
            // Discouraging use of process.env to avoid global dependencies
            'n/no-process-env': 'error',
            // force use of path module instead of creathing path with
            // __dirname and __filename global variables.
            'n/no-path-concat': 'error',
            'const-case/uppercase': 'error', // https://www.npmjs.com/package/eslint-plugin-const-case 2.5k
            // Allow console use
            'no-console': 'off',
          },
          settings: {
            n: {
              // include JSX e TS on node
              convertPath: {
                ['sources/@roots/**/*.ts']: ['^./(.+?).js$', './$1.ts'],
              },
              tryExtensions: ['.ts', '.tsx', '.cts', '.mts', '.js', '.jsx`, `.cjs`, `.mjs'],
            },
          },
          overrides: [
            {
              files: ['tests/**/*', '**/*.spec.ts', '**/*.test.ts'],
              rules: {
                // allow import declarations which import extraneous modules
                'n/no-extraneous-import': 'off',
                // allow require() expressions which import extraneous modules
                'n/no-unpublished-import': 'off',
              },
            },
          ],
        }
      : {}),
    ...(FRONTEND
      ? {
          files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
          settings: {
            ...(FRAMEWORK === 'react' ? { react: { version: 'detect' } } : {}),
          },
          parserOptions: {
            ...(FRAMEWORK === 'react' ? { ecmaFeatures: { jsx: true } } : {}),
            env: {
              ...(FRAMEWORK === 'react' ? { 'react-native/react-native': true } : {}),
            },
          },
          extends: [
            ...(ES6 ? ['plugin:no-jquery/deprecated'] : []), // disallow jquery https://www.npmjs.com/package/eslint-plugin-no-jquery 49k
            ...(FRAMEWORK === 'react' ? ['plugin:jsx-a11y/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-jsx-a11y 10M
            ...(FRAMEWORK === 'react' ? ['plugin:react/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-react 14M
            ...(FRAMEWORK === 'react' ? ['plugin:react-hooks/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-react-hooks 11M
            ...(FRAMEWORK === 'react' ? ['plugin:react-redux/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-react-redux 56k
            ...(FRAMEWORK === 'react' || FRAMEWORK === 'vue'
              ? ['plugin:jest/recommended', 'plugin:jest/style']
              : []), // https://www.npmjs.com/package/eslint-plugin-jest 8.7M
            ...(FRAMEWORK === 'react' || FRAMEWORK === 'vue'
              ? ['plugin:jest-formatting/recommended']
              : []), // https://www.npmjs.com/package/eslint-plugin-jest-formatting 377k
            ...(FRAMEWORK === 'react' ? ['plugin:testing-library/react'] : []), // https://www.npmjs.com/package/eslint-plugin-testing-library 4.9M

            ...(FRAMEWORK === 'angular' || FRAMEWORK === 'vue'
              ? ['plugin:jasmine/recommended']
              : []), // https://www.npmjs.com/package/eslint-plugin-jasmine 216k
            ...(FRAMEWORK === 'angular' ? ['plugin:testing-library/angular'] : []), // https://www.npmjs.com/package/eslint-plugin-testing-library 4.9M

            ...(FRAMEWORK === 'vue' ? ['plugin:vue/vue3-recommended'] : []), // https://eslint.vuejs.org/user-guide/ 2.2M
            ...(FRAMEWORK === 'vue' ? ['plugin:vue-scoped-css/vue3-recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-vue-scoped-css 53k
            ...(FRAMEWORK === 'vue' ? ['plugin:testing-library/vue'] : []), // https://www.npmjs.com/package/eslint-plugin-testing-library 4.9M
            ...(FRAMEWORK === 'vue' ? ['plugin:vue-test-utils/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-vue-test-utils 2k
            ...(FRAMEWORK === 'vue' ? ['plugin:vuejs-accessibility/recommended'] : []), // https://www.npmjs.com/package/eslint-plugin-vuejs-accessibility 149k
            ...(FRAMEWORK === 'vue' ? ['plugin:vue-a11y/base'] : []), // https://www.npmjs.com/package/eslint-plugin-vue-a11y 5k
          ],
          plugins: [
            ...(ES6 ? ['no-jquery'] : []),
            ...(FRAMEWORK === 'react' ? ['react'] : []),
            ...(FRAMEWORK === 'react' ? ['react-native'] : []),
          ],
          overrides: [
            {
              files: ['*.vue'],
              parser: 'vue-eslint-parser',
              plugins: [
                'vuejs-accessibility', // https://www.npmjs.com/package/eslint-plugin-vuejs-accessibility 12.3M
              ],
            },
            ...(FRAMEWORK === 'angular' // https://github.com/angular-eslint/angular-eslint 815k
              ? {
                  files: ['*.ts'],
                  extends: [
                    'plugin:@angular-eslint/recommended',
                    // This is required if you use inline templates in Components
                    'plugin:@angular-eslint/template/process-inline-templates',
                  ],
                  rules: {
                    /**
                     * Any TypeScript source code (NOT TEMPLATE) related rules you wish to use/reconfigure over and above the
                     * recommended set provided by the @angular-eslint project would go here.
                     */
                    '@angular-eslint/directive-selector': [
                      'error',
                      { type: 'attribute', prefix: 'app', style: 'camelCase' },
                    ],
                    '@angular-eslint/component-selector': [
                      'error',
                      { type: 'element', prefix: 'app', style: 'kebab-case' },
                    ],
                  },
                }
              : {}),
          ],
        }
      : {}),
  ],
};

/*

npm i --save-dev

eslint

eslint-config-airbnb-base
eslint-config-airbnb-typescript
eslint-config-airbnb

eslint-plugin-compat

eslint-plugin-better-styled-components
eslint-plugin-styled-components-a11y
eslint-plugin-css-modules
@emotion/eslint-plugin
eslint-plugin-tailwindcss

eslint-plugin-markdown

eslint-plugin-jsx-a11y
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-react-native
eslint-plugin-react-redux

eslint-plugin-vue

eslint-plugin-json
eslint-plugin-n
@typescript-eslint/parser
@typescript-eslint/eslint-plugin
typescript
eslint-plugin-yml

eslint-plugin-no-jquery
eslint-plugin-jsdoc
eslint-plugin-tsdoc
eslint-plugin-optimize-regex
eslint-plugin-no-unsanitized
eslint-plugin-security

eslint-plugin-import
eslint-plugin-simple-import-sort

eslint-plugin-cypress
eslint-plugin-jest
eslint-plugin-jest-formatting
eslint-plugin-jest-dom
eslint-plugin-testing-library

eslint-config-prettier
@babel/eslint-parser
vue-eslint-parser
eslint-plugin-html
@html-eslint/parser
@html-eslint/eslint-plugin
eslint-plugin-mongodb

@graphql-eslint/eslint-plugin
*/
