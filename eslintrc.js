
module.exports = {
  "extends": [
      "airbnb",
      "airbnb/hooks",
      "plugin:prettier/recommended"
  ],
  "plugins": [
      "react",
      "jsx-a11y",
      "prettier"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
      "requireConfigFile": false,
      "babelOptions": {
          "presets": ["@babel/preset-react"]
      },
      "sourceType": "module",
      "ecmaVersion": "latest",
      "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
      }
  },
  "env": {
      "es6": true,
      "browser": true,
      "jest": true
  },
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
      "react/destructuring-assignment": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "react/prop-types": 1,
      "react/jsx-props-no-spreading": 1,
      "react/no-unescaped-entities": 0,
      "react/state-in-constructor": 0,
      "react/no-unstable-nested-components": 1,
      "jsx-a11y/no-noninteractive-element-to-interactive-role": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/label-has-associated-control": 1,
      "no-unused-vars": 1,
      "no-console": ["error", {"allow": ["warn", "error"] }],
      "eol-last": ["error", "always"],
      "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
      "import/no-named-as-default": 1,
      "import/no-unresolved": 0,
      "import/no-cycle": 0,
      "import/prefer-default-export": 1,
      "class-methods-use-this": 0,
      "consistent-return": 1,
      "no-shadow": 1,
      "no-unused-expressions": 1,
      "prettier/prettier": ["error", { "singleQuote": true, "printWidth": 120, "tabWidth": 4, "trailingComma": "all"}],
      "no-plusplus": 0,
      "no-underscore-dangle": 1,
      "no-case-declarations": 1
  }
};