import http from "../../utils/http";
import { properties } from "../../constants/endpoints";

const getLocations = () => {
  const ENDPOINT = properties.getLocations();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getLocations;
