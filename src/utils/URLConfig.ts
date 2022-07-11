import axios from "axios";

const instance = axios.create({
    baseURL: 'https://vazgen-investment.herokuapp.com/v1',
    timeout: 3000,
})

export default instance