const CallApi = async (url) => {
  const response = await fetch("http://localhost:3000/api/" + url);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return CallApi("products");
    },
  },
};

export default api;
