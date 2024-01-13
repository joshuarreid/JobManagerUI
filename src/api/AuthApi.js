import axios from '../api/helper/axios-instance'

export function doLogin(username, password) {
    const requestBody = {
        username: username,
        password: password
    }

    console.log(JSON.stringify(requestBody));
    return axios.post(`/api/auth/signin`, JSON.stringify(requestBody), {
        headers: {
            "Content-Type" : "application/json"
        }
    })
        .then((response) => {
            if (response.status === 200) {
                return response.data.data;
            } else {
                console.error(`Response Error: ${response.status}`);
                Promise.reject("Invalid Login")
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}