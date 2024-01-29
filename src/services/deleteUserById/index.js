import http from "../../utils/http"
import { user } from "../../constants/endpoints"

const deleteUserById = () => {
    const ENDPOINT = user.deleteUserById();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.delete(`${API_BASE_URL}${ENDPOINT}`);
}

export default deleteUserById;