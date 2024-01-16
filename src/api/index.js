import axios from "axios";
const url = "http://https://istory-server.onrender.com:4000/posts";
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
