import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/beers`
});

const list = () => http.get('/'); //listado

const search = (search) => http.get('/search', { params: { query: search }}); //busqueda

const detail = (id) => http.get(`/${id}`); //detalle each

const random = () => http.get('random'); //random beer

const create = (beer) => http.post(`/new`, beer); //add new beer

export default {
  list,
  search,
  detail,
  random,
  create
}