// 해당 파일을 이용하지 않고 redux-thunk 를 이용해 검색 기능을 구현해야 합니다.
import fetch from "node-fetch";

export const searchYouTube = ({ key, query, max = 5 }, callback) => {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&maxResult=${max}&type=video&videoEmbeddable=true`,
    {
      method: "GET",
    }
  )
    .then((resp) => resp.json())
    .then(({ items }) => {
      callback(items);
    });
};
