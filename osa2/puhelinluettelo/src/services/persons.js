import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = (person) => {
    const req = axios.post(baseUrl, person)
    return req.then(res => res.data)
}

const remove = (id) => {
    const url = baseUrl+`/${id}`
    const req = axios.delete(url)
    return req.then(res => res.data)
}

const update = (id, body) => {
    const url = baseUrl+`/${id}`
    const req = axios.put(url, body)
    return req.then(res => res.data)
}

export default {getAll, create, remove, update}