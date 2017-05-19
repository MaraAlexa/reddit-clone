module.exports = {
    "extends": "airbnb",
    "rules": {
      "semi": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "jsx-quotes": ["error", "prefer-single"]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
