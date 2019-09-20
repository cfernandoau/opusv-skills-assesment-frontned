import  axios from  'axios';

const instance = axios.create({
    baseURL: 'http://opusv-skills-assesment.firebaseio.com/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default  instance;