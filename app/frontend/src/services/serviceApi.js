import axios from 'axios';

const BASE_URL = 'http://localhost:3003/tasks';

const requestApi = async () => {
    const { data } = await axios.get(BASE_URL);
    return data;
}

const addTaskApi = async (name) => {
    console.log(name);

    const created = await axios.post(BASE_URL, {
        name,
    });
    console.log(created);
    return created;
}

export { 
    requestApi,
    addTaskApi,
};