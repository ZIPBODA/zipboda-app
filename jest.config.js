/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // pnpm은 패키지를 node_modules/.pnpm/<이름@버전>/ 아래에 두고 스코프의 /를 +로 쓴다 — jest-expo 기본 패턴은 이 경로를 변환에서 빼 버린다.
  // @zipboda/*는 ESM으로만 배포되어 변환 대상에 넣어야 한다
  transformIgnorePatterns: [
    "node_modules/(?!(?:\\.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?[/+].*|@expo-google-fonts[/+].*|react-navigation|@react-navigation[/+].*|nativewind|react-native-css-interop|@zipboda[/+].*))"
  ]
};
