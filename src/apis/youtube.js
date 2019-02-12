import axios from "axios";
const KEY = "AIzaSyBK-1OSGg87sn-XslVCoaY1ss0MeNfvV_s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
