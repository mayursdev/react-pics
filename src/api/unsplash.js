import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GNf33dRgQPR3dFPOzG0mEAHa4lgGzclFxdt3oHADO1o",
  },
});
