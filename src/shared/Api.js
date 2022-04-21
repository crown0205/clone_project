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
    editCart: (itemId, itemAmount, itemPrice) =>
        Api.put("/editCart", {
            itemId: itemId,
            itemAmount: itemAmount,
            itemPrice: itemPrice,
        }),
<<<<<<< HEAD
    deleteCart: (userId, itemId) => Api.delete("/deleteCart", userId, itemId),
=======
    deleteCart: (deleteList) => Api.patch("/deleteCart", deleteList),
>>>>>>> 4c0450db90f9929cc880e9c71199981f1dd803ea
    readCart: (cartList) => Api.get("/readCart", cartList),
    // roadPost: (postId) => Api.get(`/api/posts/${postId}`),
    // roadMypost: () => Api.get("/api/mypage/"),

    //comment

    //user
};
