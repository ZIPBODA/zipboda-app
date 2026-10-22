const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// @zipboda/* 공유 패키지는 main 없이 exports만 둔다. SDK 51의 Metro는 exports를 기본으로 읽지 않는데,
// 전역으로 켜면 다른 의존성까지 ESM 빌드(Hermes가 못 읽는 import.meta 등)로 잡힐 수 있어 이 패키지에만 켠다
config.resolver.resolveRequest = (context, moduleName, platform) =>
  context.resolveRequest(
    moduleName.startsWith("@zipboda/") ? { ...context, unstable_enablePackageExports: true } : context,
    moduleName,
    platform
  );

module.exports = withNativeWind(config, { input: "./global.css" });
