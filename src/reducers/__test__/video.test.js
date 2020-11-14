import { SET_CURRENT_VIDEO } from "../../actions";
import videoReducer from "../video";

describe("video reducer", () => {
  it("SET_CURRENT_VIDEO 액션에 따라 currentVideo 상태가 변해야 합니다", () => {
    expect(
      videoReducer(
        {},
        {
          type: SET_CURRENT_VIDEO,
          video: {
            kind: "youtube#searchResult",
            etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
            id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
          },
        }
      )
    ).toEqual({
      currentVideo: {
        kind: "youtube#searchResult",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
        id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
      },
    });
  });
  it("리듀서는 다른 상태의 값을 보존해야 합니다", () => {
    expect(
      videoReducer(
        { mustkeep: "other states" },
        {
          type: SET_CURRENT_VIDEO,
          video: {
            kind: "youtube#searchResult",
            etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
            id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
          },
        }
      )
    ).toEqual({
      mustkeep: "other states",
      currentVideo: {
        kind: "youtube#searchResult",
        etag: "SJZWTG6xR0eGuCOh2bX6w3s4F94/wsuejCVXrj56eW5tpbaCsn_8UlA",
        id: { kind: "youtube#video", videoId: "Mb-pqAnfaeI" },
      },
    });
  });
});
