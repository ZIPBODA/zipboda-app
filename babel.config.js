module.exports = function (api) {
  api.cache(true);
  return {
    // Expo SDK 50+ 의 babel-preset-expo 가 reanimated 플러그인을 자동 포함하므로 별도 추가하지 않는다.
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel"
    ]
  };
};
