const CallApi = async (url, options = {}) => {
  const token = localStorage.getItem("token");
  options.headers = {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch("https://misionticsoft-backend.herokuapp.com/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  user: {
    list() {
      return CallApi("/users/list");
    },
    getUser() {
      return CallApi("/users");
    },
    getUserId(id) {
      return CallApi(`/users/getid/${id}`);
    },
    delete(id) {
      return CallApi(`/users/${id}`, {
        method: "DELETE",
      });
    },
    validateAdm() {
      return CallApi("/users/validate");
    },
    edit(data) {
      return CallApi(`/users/${data._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
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
