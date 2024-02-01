import http from "../../utils/http";
import { Filter } from "../../constants/endpoints";

const getFilterProperty = ({
  location,
  price,
  propertyTypes,
  propertyStatuses,
  rooms,
  bedrooms,
  bathrooms,
  sizeSqMeters,
}) => {
  const ENDPOINT = Filter.getFilterProperty({
    location,
    price,
    propertyTypes,
    propertyStatuses,
    rooms,
    bedrooms,
    bathrooms,
    sizeSqMeters,
  });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      location,
      price,
      propertyTypes,
      propertyStatuses,
      rooms,
      bedrooms,
      bathrooms,
      sizeSqMeters,
    },
  });
};

export default getFilterProperty;
