import { SET_VIDEOS } from "../../actions/index";
import searchReducer from "../search";

describe("search reducer", () => {
  it("SET_VIDEOS 액션에 따라 videos 상태가 변해야 합니다", () => {
    expect(
      searchReducer(
        { videos: [] },
        {
          type: SET_VIDEOS,
          videos: ["video1", "video2", "video3"],
        }
      )
    ).toEqual({ videos: ["video1", "video2", "video3"] });
  });
  it("리듀서는 다른 상태의 값을 보존해야 합니다", () => {
    expect(
      searchReducer(
        { mustkeep: "other states" },
        {
          type: SET_VIDEOS,
          videos: ["video1", "video2", "video3"],
        }
      )
    ).toEqual({
      mustkeep: "other states",
      videos: ["video1", "video2", "video3"],
    });
  });
});
