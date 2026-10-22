// @zipboda/* 공유 패키지는 exports에 import 조건만 두어 Jest(CommonJS 해석)가 찾지 못한다 — 진입 파일을 직접 가리킨다.
// 디자인시스템 패키지에 main(또는 default 조건)이 생기면 지운다
const ZIPBODA_ENTRIES = {
  "^@zipboda/ui-core$": "<rootDir>/node_modules/@zipboda/ui-core/dist/index.js",
  "^@zipboda/tokens$": "<rootDir>/node_modules/@zipboda/tokens/build/js/index.js"
};

/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: ZIPBODA_ENTRIES,
  // pnpm은 패키지를 node_modules/.pnpm/<이름@버전>/ 아래에 두고 스코프의 /를 +로 쓴다 — jest-expo 기본 패턴은 이 경로를 변환에서 빼 버린다
  transformIgnorePatterns: [
    "node_modules/(?!(?:\\.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?[/+].*|@expo-google-fonts[/+].*|react-navigation|@react-navigation[/+].*|nativewind|react-native-css-interop|@zipboda[/+].*))"
  ]
};
