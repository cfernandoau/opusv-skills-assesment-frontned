import  axios from  'axios';

const instance = axios.create({
    baseURL: 'https://opusv-skills-assesment.teatop.com.au/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default  instance;