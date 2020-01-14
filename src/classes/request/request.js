import axios from 'axios';
import Modal from '../../components/Modal/modal';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
})

function checkCode(res) {
    if(res.data.code === 200) {
        return res.data;
    } else {
        alert(`${res.data.code}:${res.data.message}`)
    }
}

export default {
    post(url,data) {
        return axios.post(url,data);
    },

    get(url) {
        return axios.get(url);
    }
}
