import http from "../../utils/http";
import { SignUp } from "../../constants/endpoints";

const postUserById = ({ username, email, password, userTypeId }) => {
  const ENDPOINT = SignUp.postUserbyId();
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

export default postUserById;
