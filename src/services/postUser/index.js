import http from "../../utils/http";
import { register } from "../../constants/endpoints";

const postUser = ({ username, email, password, userTypeId }) => {
  const ENDPOINT = register.postUser();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      username,
      email,
      password,
      userTypeId,
    },
  });
};

export default postUser;