// Create an Axios instance with the token in the headers
const createAxiosInstance = (authToken) => {
    return axios.create({
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
  };
  