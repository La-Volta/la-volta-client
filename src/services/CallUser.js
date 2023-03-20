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

    // const trash = async (id) => {
    //     let urlActivity = `${url}/${id}`;
    //     const res = await axios.delete(urlActivity);
    //     return res;
    // };


    const postRegister = async (data) => {
        const res = await axios.post(`/api/register`, data);
        return res;
    };
    // axios.get('/sanctum/csrf-cookie').then(response => {
    //     axios.post(`/api/register`, data)
    // const post = async (data) => {
    //     const res = await axios.post(url, data);
    //     return res;
    // };

    /*const update = async (data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.put(urlID, data);
        return res;
    };*/

    
 
    return {
        getCookies,
        // trash,
        postRegister,
        //update,
        logout,
        postLogin,
    };
}

export default CallUser