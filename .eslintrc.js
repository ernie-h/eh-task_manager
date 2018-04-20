module.exports = {
  "globals": {
    "after": false,
    "afterEach": false,
    "afterAll": false,
    "before": false,
    "beforeEach": false,
    "beforeAll": false,
    "by": false,
    "describe": false,
    "document": true,
    "element": false,
    "expect": false,
    "fetch": false,
    "googletag": false,
    "GTM": true,
    "Headers": false,
    "it": false,
    "jasmine": false,
    "jest": true,
    "mockStore": true,
    "mixpanel": true,
    "renderSnapshot": true,
    "require": false,
    "shallow": true,
    "window": true
  },
  "parser": "babel-eslint",
  "extends" : "airbnb",
  "rules": {
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "camelcase": 0,
    "comma-dangle": 0,
    "default-case": 0,
    "new-cap": [2, {"capIsNew": false, "newIsCap": true}],
    "no-nested-ternary": 0,
    "no-param-reassign": 0,
    "no-shadow": 0,
    "radix": 1,
    "import/no-unresolved": [2, {"commonjs": true}],
    "import/named": 2,
    "import/default": 2,
    "import/prefer-default-export": 0,
    "import/namespace": 2,
    "import/export": 2,
    "react/prefer-stateless-function": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-filename-extension": 0,
    "no-mixed-operators": 0,
    "react/forbid-prop-types": 0,
    "react/no-danger": 0,
    "react/no-did-mount-set-state": 0,
    "react/jsx-boolean-value": 0,
    "react/prop-types": [2, { "ignore": ["theme"] }],
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "class-methods-use-this": 0,
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "prefer-destructuring": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-case-declarations": 0,
    "no-console": 0
  },
  "plugins": [
    "import",
    "react"
  ],
  "settings": {
    "import/ignore": [
      "node_modules",
      "\\.json$"
    ],
    "import/parser": "babel-eslint",
    "import/resolve": {
      "extensions": [
        ".js",
        ".jsx",
        ".json"
      ]
    }
  }
}
