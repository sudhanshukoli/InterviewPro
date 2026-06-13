import axios from "axios";

const useApi = () => {

    const deployedUrl = "https://interviewprobackend-1.onrender.com"; // DONT DELETE THIS - use for PROD 
    // const deployedUrl = "http://localhost:8080";

    const get = async(url) => {

            try{
                const response = await axios.get(`${deployedUrl}${url}`);
                console.log("WE ARE INSIDE GET HOOK ")
                return response.data;
            }
            catch (error){
                console.log("API ERROR " + error);
            }
        };
    
    const post = async(url, payload) => {

            try{
                const response = await axios.post(`${deployedUrl}${url}`,payload);
                console.log("WE ARE INSIDE POST HOOK ")
                return response.data;
            }
            catch (error){
                console.log("API ERROR " + error);
            }
        };


        return{ post, get}
    }
    
    export default useApi;