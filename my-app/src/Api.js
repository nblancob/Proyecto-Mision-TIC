const CallApi = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  options.headers = {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch("http://localhost:3001/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  user: {
    getUser() {
      return CallApi("/users");
    },
    validateAdm() {
      return CallApi("/users/validate");
    },
  },
  products: {
    list() {
      return CallApi("/products");
    },
    getProduct(id) {
      return CallApi(`/products/${id}`);
    },
    delete(id) {
      return CallApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
    create(newProduct) {
      return CallApi("/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
      });
    },
    edit(data) {
      return CallApi(`/products/${data._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
  },
  salesManagment: {
    list() {
      return CallApi("salesManagment");
    },
    create(sale) {
      return CallApi("salesManagment", {
        method: "POST",
        body: JSON.stringify(sale),
      });
    },
  },
};

export default api;
