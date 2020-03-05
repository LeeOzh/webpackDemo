import axios from 'axios';
import Modal from '../../components/Modal/modal';
import message from '../../components/Message/Message';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = `Bearer ${token}`;
    return config;
})

// function checkCode(res) {
//     return new Promise(function(resolve,reject){
//         if(res.status === 200) {
            
//             console.log(res)
//             resolve(res => {return res.data})
//         } else {
//             reject(res.statusText)
//         }
//     }).then(res => {return res}).catch(error => {throw error})
// }

export default {
    post(url,data) {
        return axios.post(url,data).then(res => {
            if(res.status !== 200) {
                message.error(res.statusText);   
                return;
            }
            return res.data
        });
    },

    get(url) {
        return axios.get(url);
    }
}
