const rp = require('request-promise');

const postUserRegisterData = (username,password) => {
    const body = {username,password};
    post(body,"http://localhost:3000/user/register/");
};

const postUserLoginData = (username,password) => {
    const body = {username,password};
    post(body,"http://localhost:3000/user/login/");
};

const postNewCustomerData = (firstname,lastname,email,phone) => {
    const body = {firstname,lastname,email,phone};
    post(body,"http://localhost:3000/customer/new/");
};

const post = (body,uri) => {

    const options = {
        method: 'POST',
        uri,
        body,
        json: true
    };

    rp(options)
        .then(function (body) {
            console.log(body.message);
            process.exit();
        })
        .catch(function (err) {
            console.error(err.error.message);
        });
};

module.exports = {
    postUserRegisterData,
    postUserLoginData,
    postNewCustomerData
};