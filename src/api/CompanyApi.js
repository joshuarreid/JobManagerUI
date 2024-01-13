import axios from '../api/helper/axios-instance'


export function createCompanies(companyData) {
    return axios.post(`/api/company/`, companyData)
        .then((response) => {
            if (response.status === 200) {
                return "{created:true}";
            } else {
                console.error(`Response Error: ${response.status}`);
                return "{created:false}";
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}

export function doCompanyUpdate(company) {
    axios.put(`/api/company/${company.id}`, company)
        .then((response) => {
            if (response.status === 200) {
                return response;
            } else {
                console.error(`Response Error: ${response.status}`);
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}

export function getCompanies() {
    return axios.get(`/api/company/`)
        .then((response) => {
            if (response.status === 200) {
                return response;
            } else {
                console.error(`Response Error: ${response.status}`);
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}

export function getCompany(id) {
    return axios.get(`/api/company/${id}`)
        .then((response) => {
            if (response.status === 200) {
                return response;
            } else {
                console.error(`Response Error: ${response.status}`);
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}

export function deleteCompany(id) {
    return axios.delete(`/api/company/${id}`)
        .then((response) => {
            if (response.status === 200) {
                return response;
            } else {
                console.error(`Response Error: ${response.status}`);
            }
        })
        .catch((e) => console.error(`Error: ${JSON.stringify(e)}`));
}

