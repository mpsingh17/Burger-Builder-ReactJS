import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-builder-b0b68.firebaseio.com/"
});

export default instance;
