import api from './config'


export const getResources = async() => {
    return await api.get('/resources');
}

export const getStudents = async() => {
    return await api.get('/students');
}

export const addAssignment = async(data) => {
    return await api.post('/assignment', data);
}