import { ScrollView, View, Text, Pressable } from "react-native";
import { buttonClasses, badgeClasses, chipClasses } from "@zipboda/ui-core";

/**
 * ⚠ 개발 전용 — 디자인시스템 "소비 검증"(제품 화면 아님).
 * NativeWind + @zipboda/tokens preset + @zipboda/ui-core 클래스 헬퍼가 RN에서 동작하는지 확인.
 * web/admin과 동일한 클래스 문자열(buttonClasses 등)을 사용 → 3플랫폼 일치 검증.
 */
export default function DsCheck() {
  return (
    <ScrollView className="flex-1 bg-surface" contentContainerClassName="p-6 gap-6">
      <Text className="text-h1 font-bold text-fg-heading">DS 소비 검증 (개발용)</Text>

      <View className="gap-3">
        <Text className="text-h4 font-semibold text-fg-strong">Button</Text>
        <Pressable className={buttonClasses({ variant: "primary", size: "lg" })}>
          <Text className="text-brand-on font-bold text-sm">지금 신청하기</Text>
        </Pressable>
        <Pressable className={buttonClasses({ variant: "outline" })}>
          <Text className="text-brand font-bold text-sm">아웃라인</Text>
        </Pressable>
        <Pressable className={buttonClasses({ variant: "dark" })}>
          <Text className="text-fg-ondark font-bold text-sm">다크</Text>
        </Pressable>
      </View>

      <View className="gap-2">
        <Text className="text-h4 font-semibold text-fg-strong">Badge / Chip</Text>
        <View className="flex-row gap-2">
          <View className={badgeClasses("success")}>
            <Text className="text-fg-ondark font-bold text-[10px]">배송완료</Text>
          </View>
          <View className={badgeClasses("error")}>
            <Text className="text-fg-ondark font-bold text-[10px]">D-3 마감임박</Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <View className={chipClasses("active")}>
            <Text className="text-brand-on font-bold text-[10px]">전체</Text>
          </View>
          <View className={chipClasses("default")}>
            <Text className="text-fg-muted font-semibold text-[10px]">LH</Text>
          </View>
        </View>
      </View>

      <View className="gap-2">
        <Text className="text-h4 font-semibold text-fg-strong">Tokens</Text>
        <View className="flex-row gap-2">
          <View className="h-14 flex-1 justify-end rounded-lg bg-brand p-2">
            <Text className="text-fg-ondark text-xs font-semibold">brand</Text>
          </View>
          <View className="h-14 flex-1 justify-end rounded-lg bg-admin-status-info p-2">
            <Text className="text-fg-ondark text-xs font-semibold">admin-info</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
