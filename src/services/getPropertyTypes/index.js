import http from "../../utils/http"
import { Types } from "../../constants/endpoints"

const getPropertyTypes = () => {
    const ENDPOINT = Types.getPropertyTypes();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.get(`${API_BASE_URL}${ENDPOINT}`);
}

export default getPropertyTypes;