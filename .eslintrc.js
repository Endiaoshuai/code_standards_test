module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["simple-import-sort"],
  "rules": {
    "react/sort-prop-types": [
      "error",
      {
        "callbacksLast": true
      }
    ],
    "react/jsx-sort-props": [
      "error",
      {
        "callbacksLast": true
      }
    ],
    "react/forbid-prop-types": "off",
    "simple-import-sort/sort": "error"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src"]
      }
    }
  }
};
