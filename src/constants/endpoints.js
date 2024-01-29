const user = {
  getUsers: () => `/users`,
  deleteUserById: () => `/user/:userId`,
};

export { user };



const properties = {
  getAllProperties: () => `/properties`,
};

export { properties };

const Types = {
  getPropertyTypes: () => `/property_types`,
}
export { Types };

const Status = {
  getPropertyStatuses: () => `/property_statuses`,
}

export { Status };