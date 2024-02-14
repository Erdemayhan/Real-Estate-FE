import http from "../../utils/http";
import { Login } from "../../constants/endpoints";

const postLogin = ({ email, password }) => {
  const ENDPOINT = Login.postLogin();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      email,
      password,
    },
  });
};

export default postLogin;
