import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

const CallUser = () => {
    
    const getCookies = async () => {
        const res = await axios.get('/sanctum/csrf-cookie');
        return res;
        
     };

    // const trash = async (id) => {
    //     let urlActivity = `${url}/${id}`;
    //     const res = await axios.delete(urlActivity);
    //     return res;
    // };


    const post = async (data) => {
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
        post,
        //update,
    };
}

export default CallUser