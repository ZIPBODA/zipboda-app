# 집보다(Zipboda) App — 프로젝트 가이드

집보다 **사용자 모바일 앱**. 웹과 동일 도메인(청약·평면도·집구경·영감·쇼룸·가점·커뮤니티·마이, 2차 커머스)을 모바일 UX로 제공. 하단 5탭(홈/쇼핑/커뮤니티/쇼룸/마이페이지).

## 스택
- **React Native + Expo(Dev Client) + expo-router** + TypeScript, **Feature-Sliced Design**
- 서버 상태 TanStack Query, 응답 엔벌로프 `{success, data, error}`
- 3D: **expo-gl + three.js**(WebView 미사용), glTF/GLB, 터치 제스처
- 스타일링: **NativeWind(Tailwind)** — `@zipboda/tokens/tailwind` preset(raw) + `@zipboda/ui-core` 클래스 헬퍼(`buttonClasses` 등)를 RN 프리미티브에 `className`으로 적용(web/admin과 동일 클래스). `@zipboda/ui`(DOM)는 미사용
- 푸시: expo-notifications(FCM/APNs). 배포: EAS Build/Submit
- 공유: `@zipboda/tokens`·`@zipboda/ui-core`(디자인시스템) · `@zipboda/shared`(API 타입·훅)

## 산출물 단일 진실원
요구사항/화면/API xlsx 3종은 **zipboda-web/docs에서 대표 관리**. 본 저장소는 개발계획서(md)만 보유. 스펙 참조 시 `../zipboda-web/docs/` 사용.

## 규칙 — 해당 상황에서만 읽어 적용
> 규칙은 **항상 로드하지 않는다.** 아래 "상황"에 해당하는 작업을 할 때 그 규칙 파일을 **먼저 열어(Read) 읽고 준수**한다. 해당 없으면 읽지 않는다.

| 상황(트리거) | 읽을 규칙 파일 |
|---|---|
| 프론트엔드(RN) 코드(TS/TSX) 작성·수정 | `.claude/rules/frontend.rule.md` · `.claude/rules/code-organization.rule.md` |
| 코드 주석 작성·정리 | `.claude/rules/code-comments.rule.md` |
| 폴더/레이어(FSD) 구조·slice 배치 결정 | `.claude/rules/frontend-architecture.rule.md` |
| Figma node-id로 UI 컴포넌트/화면 구현 | `.claude/rules/figma-implementation.rule.md` |
| 커밋·브랜치·PR 진행 | `.claude/rules/contributing-role.rule.md` |
| 마크다운 문서(.md) 작성·수정 | `.claude/rules/document-template.rule.md` |
| 스테이지/Phase 완료 검토 | `.claude/rules/phase-review.rule.md` |
| 테스트 작성·구현 후 검증 | `.claude/rules/test-guide.rule.md` |
| 지시가 모호/검증 불가할 때 | `.claude/rules/unclear.rule.md` |

## 보안
- 비밀값은 `.env`(gitignore)에만. `.mcp.json`·`.npmrc`는 `${ENV}` 참조. 실제 토큰 커밋 금지.
