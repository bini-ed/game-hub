import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "76b17663330d4ea996c43d21242f31f8",
  },
});
