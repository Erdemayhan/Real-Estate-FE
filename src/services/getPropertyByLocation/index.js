import http from "../../utils/http";
import { Location } from "../../constants/endpoints";

const getPropertyByLocation = (location) => {
  const ENDPOINT = Location.getPropertyByLocation({ location });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getPropertyByLocation;
