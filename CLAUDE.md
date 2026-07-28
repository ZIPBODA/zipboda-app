# 집보다(Zipboda) App — 프로젝트 가이드

집보다 **사용자 모바일 앱**. 웹과 동일 도메인(청약·평면도·집구경·영감·쇼룸·가점·커뮤니티·마이, 2차 커머스)을 모바일 UX로 제공. 하단 5탭(홈/쇼핑/커뮤니티/쇼룸/마이페이지).

## 스택
- **React Native + Expo(Dev Client) + expo-router** + TypeScript, **Feature-Sliced Design**
- 서버 상태 TanStack Query, 응답 엔벌로프 `{success, data, error}`
- 3D: **expo-gl + three.js**(WebView 미사용), glTF/GLB, 터치 제스처
- 스타일링: **NativeWind(Tailwind)** — `@zipboda/tokens/tailwind` preset(raw) + `@zipboda/ui-core` 클래스 헬퍼(`buttonClasses` 등)를 RN 프리미티브에 `className`으로 적용(web/admin과 동일 클래스). `@zipboda/ui`(DOM)는 미사용
- 푸시: expo-notifications(FCM/APNs). 배포: EAS Build/Submit
- 공유: `@zipboda/tokens`·`@zipboda/ui-core`(디자인시스템, GitHub Packages) + `@zipboda/shared`(API 타입·훅)

## 산출물 단일 진실원
요구사항/화면/API xlsx 3종은 **zipboda-web/docs에서 대표 관리**. 본 저장소는 개발계획서(md)만 보유. 스펙 참조 시 `../zipboda-web/docs/` 사용.

## 규칙 (반드시 준수)
@.claude/rules/frontend-rule.md
@.claude/rules/frontend-architecture.md
@.claude/rules/code-organization.md
@.claude/rules/figma-implementation-rule.md
@.claude/rules/contributing-role.md
@.claude/rules/document-template-rule.md
@.claude/rules/phase-review-rule.md
@.claude/rules/test-guide.md
@.claude/rules/unclear-rule.md

## 보안
- 비밀값은 `.env`(gitignore)에만. `.mcp.json`은 `${FIGMA_API_KEY}` 참조. 실제 토큰 커밋 금지.
