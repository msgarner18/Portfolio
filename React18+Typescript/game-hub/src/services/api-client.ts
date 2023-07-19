import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '195b3883d110413498524b4b1920dc60'
    }
})
