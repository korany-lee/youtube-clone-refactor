import videoReducer from "../video";

describe("video reducer", () => {
  it("SET_CURRENT_VIDEO 액션에 따라 currentVideo 상태가 변해야 합니다", () => {
    expect(
      videoReducer(
        {},
        {
          type: "SET_CURRENT_VIDEO",
          video: {
            kind: "youtube#searchResult",
            etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
            id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" }
          }
        }
      )
    ).toEqual({
      currentVideo: {
        kind: "youtube#searchResult",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
        id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" }
      }
    });
  });
});
