import http from "../../utils/http";
import { users } from "../../constants/endpoints";

const getUsers = () => {
  const ENDPOINT = users.getUsers();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getUsers;
