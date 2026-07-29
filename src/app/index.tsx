import { View, Text } from "react-native";

/**
 * 홈 — 플레이스홀더.
 * 실제 화면(ZB-U-*)은 Figma 디자인 기준으로 구현한다(figma-implementation-rule). 임의 화면 구현 금지.
 */
export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-surface px-6">
      <Text className="text-h1 font-bold text-fg-heading">집보다</Text>
      <Text className="mt-2 text-sm text-fg-muted">초기 플레이스홀더 · 화면은 Figma 기준 구현</Text>
    </View>
  );
}
