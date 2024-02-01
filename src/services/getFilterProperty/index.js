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
  listedDate
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
    listedDate
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
      listedDate
    },
  });
};

export default getFilterProperty;
