const rp = require('request-promise');

const postUserRegisterData = (username,password) => {
    const body = {username,password};
    post(body,"http://localhost:3000/user/register/");
};

const postUserLoginData = (username,password) => {
    const body = {username,password};
    post(body,"http://localhost:3000/user/login/");
};

const postUserLogoutData = () => {
    const body = {token:false};
    post(body,"http://localhost:3000/user/logout/");
};

const postNewCustomerData = (name,email,phone) => {
    const body = {name,email,phone};
    post(body,"http://localhost:3000/customer/new/");
};

const postSearchCustomerData = (name) => {
    const body = {name};
    post(body,"http://localhost:3000/customer/search/");
};

const getListCustomerData = () => {

    //MIKKEL1 any reason why "localhost" is not in constant ?
    rp.get("http://localhost:3000/customer/list/")
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

//Mikkel1: great..you've made a function to handle post.
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