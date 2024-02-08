import http from "../../utils/http"
import { patchPassword } from "../../constants/endpoints"

const patchAllPasswordsFromUsers = () => {
    const ENDPOINT = patchPassword.patchAllPasswordsFromUsers();
    const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
    return http.patch(`${API_BASE_URL}${ENDPOINT}`);
}

export default patchAllPasswordsFromUsers;