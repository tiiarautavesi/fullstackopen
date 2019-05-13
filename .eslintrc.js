module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jest": true 
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "indent": [
            "error",
            2
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};