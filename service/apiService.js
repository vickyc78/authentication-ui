import axios from "axios";
let apiUrl = "http://localhost:3000";
export default {
  async apiCallWithData(url, data) {
    try {
      return await axios.post(apiUrl + url, data);
    } catch (error) {
      console.log("error", error);
      return Object.assign({}, error.response);
    }
  },
  async apiCallWithGetMethode(url) {
    try {
      return await axios.get(apiUrl + url);
    } catch (error) {
      console.log("error", error);
      return Object.assign({}, error.response);
    }
  },
  async apiCallWithHeaderWithData(url, data) {
    try {
      return await axios.post(apiUrl + url, data, {
        headers: {
          accessToken: localStorage.getItem("accessToken")
        }
      });
    } catch (error) {
      console.log("error", error);
      return Object.assign({}, error.response);
    }
  }
};
