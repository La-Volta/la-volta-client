import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
})


const CallUser = () => {
    
    const getCookies = async () => {
        const res = await axios.get('/sanctum/csrf-cookie');
        return res;
        
     };
  
     const logout = async () => {
        const res = await axios.post(`/api/logout`);
        return res;
    };

    const postLogin = async (data) => {
        const res = await axios.post(`/api/login`, data);
        return res;
    };

    const checkout = async (id) => {
        const res = await axios.post(`/api/checkout/${id}`);
        return res;
    };

    const postRegister = async (data) => {
        const res = await axios.post(`/api/register`, data);
        return res;
    };

    const allOrders = async () => {
        const res = await axios.get(`/api/orders`);
        return res;
    };

    const payments = async () => {
        const res = await axios.get(`/api/orders/payments`);
        return res;
    };

    const orderByUser = async (id) => {
        const res = await axios.get(`/api/orders/user/${id}`);
        return res;
    };
   
    const deleteOrder = async (id) => {
        const res = await axios.delete(`/api/order/destroy/${id}`);
        return res;
    };


    
 
    return {
        getCookies,
        allOrders,
        payments,
        orderByUser,
        deleteOrder,
        checkout,
        postRegister,
        logout,
        postLogin,
    };
}

export default CallUser