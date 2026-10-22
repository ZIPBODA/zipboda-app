module.exports = {
  extends: "expo",
  ignorePatterns: ["/dist/*"],
  overrides: [
    {
      files: ["*.config.js", ".eslintrc.js"],
      env: { node: true }
    }
  ]
};
