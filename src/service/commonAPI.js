// commonAPI.js
import axios from "axios";

const commonAPI = async (httpmethod, url, reqbody = {}) => {
    try {
        const reqconfig = {
            method: httpmethod,
            url,
            data: reqbody
        };
        const response = await axios(reqconfig);
        return response.data; // returns only useful data
    } catch (err) {
        console.error("API Error:", err);
        throw err; // throw so components can handle it properly
    }
};

export default commonAPI;
