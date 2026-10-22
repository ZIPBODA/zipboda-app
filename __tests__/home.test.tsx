import { render, screen } from "@testing-library/react-native";
import Home from "@/app/index";

// expo-router는 src/app 아래 파일을 모두 화면으로 잡으므로 테스트는 app 밖에 둔다
describe("홈 화면", () => {
  it("화면 구현 전이라 서비스 이름과 안내만 보여 준다", () => {
    render(<Home />);
    expect(screen.getByText("집보다")).toBeOnTheScreen();
  });
});
