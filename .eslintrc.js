module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-plusplus": "off",
        "react/prop-types": "off",
        "react/no-array-index-key": "off",
        "array-callback-return": "off",
        "consistent-return": "off",
        "max-len": "off",
        "import/no-unresolved": "off"
    }
}
