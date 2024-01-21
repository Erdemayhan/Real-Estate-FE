import http from "../../utils/http"
import { properties } from "../../constants/endpoints"

const getAllProperties = () => {
    const ENDPOINT = properties.getAllProperties();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.get(`${API_BASE_URL}${ENDPOINT}`);
}

export default getAllProperties;