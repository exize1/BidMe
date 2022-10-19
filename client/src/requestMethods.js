import axios from "axios";

const BASE_URL = "http://localhost:3001/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"));
const userData = user && JSON.parse(user.userData);
const TOKEN = userData && userData.accessToken;
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { 'authorization' : `Bearer ${TOKEN}` },
});