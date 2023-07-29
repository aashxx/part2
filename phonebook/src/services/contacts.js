import axios from "axios";
const url = 'http://localhost:3001/persons';

const getAll = async () => {
    const request = axios.get(url);
    return request.then(response => response.data);
}

const create = async (dataObj) => {
    const request = axios.post(url, dataObj);
    return request.then(response => response.data);
}

const update = async (id, dataObj) => {
    const request = axios.put(`${url}/${id}`, dataObj);
    return request.then(response => response.data);
}

const remove = async (id) => {
    const request = axios.delete(`${url}/${id}`);
    return request.then(response => response.data);
}


export default { getAll, create, update, remove };