import axios from "axios";
const KEY = "AIzaSyAPJsCAt5UQMjDTmbNjGWKosHFh0cGV1E4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
