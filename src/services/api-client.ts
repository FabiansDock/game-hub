import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '8d193bc66c2b4c6b8eb39cc0173f559e'
    }
});
