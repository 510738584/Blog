import axios from 'axios';

const ins = axios.create({
  baseURL:'https://ku.qingnian8.com/dataApi/blog'
});
ins.interceptors.response.use((config)=>{
  return config.data;
})

export default ins