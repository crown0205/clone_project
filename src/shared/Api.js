import axios from "axios";

const Api = axios.create({
    baseURL:
        // "https://virtserver.swaggerhub.com/sungji226/cloneCoding/1.1.0",
        "http://54.180.90.16",
});
// 헤더에 토큰
Api.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem(
    "token"
)}`;

export const Apis = {
    addCart: (cartList) => Api.post("/addCart", cartList),
    // editPost: (postId, contents) => Api.put(`api/posts/${postId}`, contents),
    deleteCart: (userId, itemId) => Api.delete("/deleteCart", userId, itemId),
    readCart: (cartList) => Api.get("/readCart"),
    // roadPost: (postId) => Api.get(`/api/posts/${postId}`),
    // roadMypost: () => Api.get("/api/mypage/"),

    //comment

    //user
};
