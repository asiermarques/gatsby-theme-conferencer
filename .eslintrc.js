module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, "eslint:recommended", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": "warn",
  },
};
