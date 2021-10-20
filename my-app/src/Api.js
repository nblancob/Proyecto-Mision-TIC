const CallApi = async (url) => {
  const response = await fetch("http://localhost:4000/api/" + url);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return CallApi("products");
    },
  },
  salesManagment:{
    list() {
      return CallApi("salesManagment");
    },
  },
};

export default api;
