import axios from "axios";
import Authentication from "../../../services/Authentication";

let auth;

const buildHeaders = () => {
  if (!auth) {
    auth = new Authentication();
  }

  const authenticated = auth.isAuthenticated();
  if (authenticated) {
    const token = auth.getAccessToken();
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=UTF-8",
    };
  } else {
    return {};
  }
};

const baseRequest = (url, options = {}) => {
  const { headers = {}, method = "get", ...opts } = options;

  return axios(url, {
    method: method,
    headers: { ...buildHeaders(), ...headers },
    ...opts,
  });
};

export default baseRequest;
