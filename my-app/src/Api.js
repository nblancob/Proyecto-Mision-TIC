const CallApi = async (url, options = {}) => {
  options.headers = {
    "Content-type": "application/json",
    Accept: "application/json",
  };

  const response = await fetch("http://localhost:3000/api" + url,options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return CallApi("/products");
    },
    delete(id) {
      return CallApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
