import axios from "axios";

export const findAllUsers = async () => {
    const response = await axios.get('https://cs4550-final-node.herokuapp.com/api/users');
    return response.data;
}