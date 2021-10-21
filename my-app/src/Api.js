const CallApi = async (url, options = {}) => {
  const data = await response.json();
  return data;
};

const api = {
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
      return CallApi("/products",
        {
          method: "POST",
          body: JSON.stringify(newProduct),
        }
      );
    },
    edit(data) {
      return CallApi(`/products/${data._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api;
