import axios from 'axios';


const baseURL = "http://localhost:3001/persons";


const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
};

const create = (newObject) => {
    const request = axios.post(baseURL, newObject);
    return request.then(response => response.data);
};

const update = (id, newObject) => {
    console.log(id);
    console.log(newObject);
    const request = axios.put(`${baseURL}/${id}`, newObject);
    return request.then(response => response.data);
};

const remove = (id) => axios.delete(`${baseURL}/${id}`);


const exports = { getAll, create, update, remove };
export default exports;