const rp = require('request-promise');
const serverUrl = "http://localhost:3000";

const postUserRegisterData = (username,password) => {
    const body = {username,password};
    const uri = serverUrl+"/user/register/";
    post(body,uri);
};

const postUserLoginData = (username,password) => {
    const body = {username,password};
    const uri = serverUrl+"/user/login/"
    post(body,uri);
};

const postUserLogoutData = () => {
    const body = {token:false};
    const uri = serverUrl+"/user/logout/"
    post(body,uri);
};

const postNewCustomerData = (name,email,phone) => {
    const body = {name,email,phone};
    const uri = serverUrl+"/customer/new/";
    post(body,uri);
};

const postSearchCustomerData = (name) => {
    const body = {name};
    const uri = serverUrl+"/customer/search/";
    post(body,uri);
};

const getListCustomerData = () => {
    const uri = serverUrl+"/customer/list/";
    rp.get(uri)
        .then(body => {
            const parsedBodyMsg = JSON.parse(body).message;
            console.log(parsedBodyMsg);
            process.exit();
        })
        .catch(err => {
            const parseErrorMsg = JSON.parse(err.error).message;
            console.error(parseErrorMsg);
            process.exit()
        });
};

const post = (body,uri) => {

    const options = {
        method: 'POST',
        uri,
        body,
        json: true
    };

    rp(options)
        .then(body => {
            console.log(body.message);
            process.exit();
        })
        .catch(err => {
            console.error(err.error.message);
            process.exit()
        });
};



module.exports = {
    postUserRegisterData,
    postUserLoginData,
    postUserLogoutData,
    postNewCustomerData,
    postSearchCustomerData,
    getListCustomerData
};