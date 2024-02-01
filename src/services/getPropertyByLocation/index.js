import http from "../../utils/http"
import { location } from "../../constants/endpoints"

const getPropertyByLocation = () => {
    const ENDPOINT = location.getPropertyByLocation();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.get(`${API_BASE_URL}${ENDPOINT}`);
}

export default getPropertyByLocation;