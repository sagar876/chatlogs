
export const getChatMessages = () => {
    return { type : 'GET_MESSAGES', payload:{} }
}
export const getUsers = () => {
    return { type : 'GET_USERS', payload:{} }
}
export const updateUsers = (payload) => {
    return { type : 'USERS_RECEIVED', payload }
}
export const updateMessages = (payload) => {
    return { type : 'MESSAGES_RECEIVED', payload }
}