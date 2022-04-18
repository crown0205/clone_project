import axios from "axios";

const Api = axios.create({
    baseURL:
        // "https://virtserver.swaggerhub.com/sungji226/cloneCoding/1.1.0",
        "http://52.78.20.222",
});
// 헤더에 토큰
// Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
//     "token"
// )}`;

export const Apis = {
    addCart: (itemList) => Api.post("/addCart", itemList),
    // editPost: (postId, contents) => Api.put(`api/posts/${postId}`, contents),
    // deletePost: (postId) => Api.delete(`api/posts/${postId}`),
    // roadPostList: () => Api.get("/api/postList"),
    // roadPost: (postId) => Api.get(`/api/posts/${postId}`),
    // roadMypost: () => Api.get("/api/mypage/"),

    //comment

    //user
};
