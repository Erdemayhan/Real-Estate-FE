const user = {
  getUsers: () => `/users`,
};

export { user };

const properties = {
  getAllProperties: () => `/properties`,
};

export { properties };

const Types = {
  getPropertyTypes: () => `/property_types`,
};
export { Types };

const Status = {
  getPropertyStatuses: () => `/property_statuses`,
};

export { Status };

const Login = {
  postLogin: () => `/login`,
};

export { Login };
