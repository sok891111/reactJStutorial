// .eslintrc.js
module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  {"plugins": ["react"] },
  {
    "settings": {
      "react": {
        "createClass": "createClass", 
        "pragma": "React", 
        "version": "15.4.2" 
      }
    }
  }
  "rules": {
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "parserOptions": {
    "sourceType": "module"
  }
};