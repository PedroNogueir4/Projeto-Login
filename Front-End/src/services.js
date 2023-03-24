import axios from "axios";


const apiC = axios.create({

    baseURL: "http://localhost:3001/cadastro",
});

export default apiC

