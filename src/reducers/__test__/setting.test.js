import { SET_USERNAME, SET_DARK_MODE } from "../../actions/index";
import settingReducer from "../setting";

describe("settings reducer", () => {
  it("SET_USERNAME 액션에 따라 currentUser 상태가 변해야 합니다", () => {
    expect(
      settingReducer(
        { currentUser: null },
        {
          type: SET_USERNAME,
          name: "ingikim"
        }
      )
    ).toEqual({ currentUser: { name: "ingikim" } });
  });

  it("SET_DARK_MODE 액션에 따라 darkMode 상태가 변해야 합니다", () => {
    expect(
      settingReducer(
        { darkMode: false },
        {
          type: SET_DARK_MODE,
          value: true
        }
      )
    ).toEqual({
      darkMode: true
    });
  });

  it("리듀서는 다른 상태의 값을 보존해야 합니다", () => {
    expect(
      settingReducer(
        { mustkeep: "other states" },
        {
          type: SET_USERNAME,
          name: "ingikim"
        }
      )
    ).toEqual({
      mustkeep: "other states",
      currentUser: { name: "ingikim" }
    });
  });
});
