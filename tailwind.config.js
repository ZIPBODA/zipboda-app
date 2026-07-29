const zbPreset = require("@zipboda/tokens/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind preset + 집보다 토큰 preset(raw, web과 동일)
  presets: [require("nativewind/preset"), zbPreset],
  content: [
    "./src/**/*.{ts,tsx}",
    // 공유 클래스 헬퍼(버튼 등) 스캔 (web과 동일 클래스)
    "./node_modules/@zipboda/ui-core/dist/**/*.{js,mjs}"
  ]
};
