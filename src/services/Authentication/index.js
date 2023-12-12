import axios from "axios";
import { user } from "../../constants/endpoints";
import parseJWTPayload from "./utils/parseJWTPayload";

class Authentication {
  login({ email, password, captcha }) {
    const loginEndpoint = user.login();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return axios(`${API_BASE_URL}${loginEndpoint}`, {
      method: "POST",
      data: {
        email,
        password,
        captcha,
      },
    }).then((response) => {
      const accessToken = response.data.accessToken;
      localStorage.setItem("creds", accessToken);
    });
  }

  loginWithAdamos(token) {
    localStorage.setItem("creds", token);
  }

  logout() {
    localStorage.removeItem("creds");
  }

  register() {}

  isAuthenticated() {
    let hasAccessTokenExpired;
    const accessToken = this.getAccessToken();
    if (accessToken) {
      const parsedToken = parseJWTPayload(accessToken);
      const { exp } = parsedToken;
      if (!exp) {
        hasAccessTokenExpired = true;
      } else {
        const now = Math.floor(Date.now() / 1000);
        hasAccessTokenExpired = exp < now;
      }
      return !hasAccessTokenExpired;
    } else {
      return false;
    }
  }

  getAccessToken() {
    return localStorage.getItem("creds");
  }

  getAccessTokenPayload() {
    const accessToken = this.getAccessToken();
    const parsedToken = parseJWTPayload(accessToken);
    return parsedToken;
  }
}

export default Authentication;
