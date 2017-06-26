module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parser": "esprima",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        }
    }
    "rules": {
        "comma-dangle": ["error", "always-multiline"],
        "indent": ["error", 4],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-unused-vars": "error",
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
};








