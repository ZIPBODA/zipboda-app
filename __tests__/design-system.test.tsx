import { render, screen } from "@testing-library/react-native";
import DsCheck from "@/app/ds-check";
import * as tokens from "@/shared/config/tokens";

describe("공유 디자인시스템 패키지", () => {
  it("@zipboda/ui-core의 클래스 헬퍼로 확인 화면을 그린다", () => {
    render(<DsCheck />);
    expect(screen.getByText("지금 신청하기")).toBeOnTheScreen();
  });

  it("@zipboda/tokens의 원시 토큰 값을 읽는다", () => {
    expect(Object.keys(tokens).length).toBeGreaterThan(0);
  });
});
