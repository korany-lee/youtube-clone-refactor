import * as actions from "../index";

describe("recast.ly actions", () => {
  it("setUsername은 SET_USERNAME 액션을 생성해야 합니다", () => {
    expect(actions.setUsername("ingikim")).toEqual({
      type: "SET_USERNAME",
      name: "ingikim",
    });
  });

  it("setDarkMode은 SET_DARK_MODE 액션을 생성해야 합니다", () => {
    expect(actions.setDarkMode(true)).toEqual({
      type: "SET_DARK_MODE",
      value: true,
    });
  });

  it("setCurrentVideo은 SET_CURRENT_VIDEO 액션을 생성해야 합니다", () => {
    expect(
      actions.setCurrentVideo({
        kind: "youtube#searchResult",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
        id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
      })
    ).toEqual({
      type: "SET_CURRENT_VIDEO",
      video: {
        kind: "youtube#searchResult",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
        id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
      },
    });
  });
  it("thunkedSearch는 함수를 리턴해야 합니다", () => {
    expect(typeof actions.thunkedSearch({ query: "코드스테이츠" })).toEqual(
      "function"
    );
  });
});
