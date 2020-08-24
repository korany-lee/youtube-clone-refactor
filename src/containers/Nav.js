import { connect } from "react-redux";
import Nav from "../components/Nav";

const mapStateToProps = (state) => ({
  // TODO:
  // presentational 컴포넌트 Nav가 스토어로부터 user 및 darkMode 속성을 받고 싶어합니다.
  // mapStateToProps는 스토어의 상태(State)를 presentational 컴포넌트의 속성으로(ToProps) mapping 합니다.
  // App 컴포넌트 아래에 힌트가 있습니다.

  받아야할_속성: undefined
});

export default connect(mapStateToProps)(Nav);
