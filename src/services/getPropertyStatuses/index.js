import http from "../../utils/http"
import { Status } from "../../constants/endpoints"

const getPropertyStatuses = () => {
    const ENDPOINT = Status.getPropertyStatuses();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.get(`${API_BASE_URL}${ENDPOINT}`);
}

export default getPropertyStatuses;