import axios from "axios";

export const loadUsersApi = async () => {
    return await axios.get("http://localhost:5000/users");
}
export const createUsersApi = async (user) => {
    return await axios.post("http://localhost:5000/users",user);
}
export const deleteUsersApi = async (userId) => {
    return await axios.delete(`http://localhost:5000/users/${userId}`);
}