module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel"
    ],
    // react-native-reanimated 플러그인은 항상 마지막
    plugins: ["react-native-reanimated/plugin"]
  };
};
