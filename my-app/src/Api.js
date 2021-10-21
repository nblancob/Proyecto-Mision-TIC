const CallApi = async (url,options={}) => {
  const response = await fetch("http://localhost:4000/api/" + url,options);
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
    create(sale){
      return CallApi("salesManagment",{
        method:"POST",
        body:JSON.stringify(sale)
      });
    }
  },
};

export default api;
