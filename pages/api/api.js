import axios from 'axios'

const api = axios.create({
  baseURL:'https://skeleton-nodejs-express-ejs.alinesouza1.repl.co'
})

export default api;