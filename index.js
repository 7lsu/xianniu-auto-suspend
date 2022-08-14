md5 = require('js-md5');
const login = require('./api/auth').login;
const suspend = require('./api/auth').suspend;

const Secrets = {
    username: process.env.XIANNIU_USERNAME,
    password: md5(process.env.XIANNIU_PASSWORD),
};

function start(username, password) {
    if (!username || !password) {
        console.log('empty username or password');
        return;
    }
    const data = {
        channel: 'guanwang',
        client_type: 5,
        mobile: username,
        mobile_code: '86',
        password: password,
    };
    login(data).then((login_res) => {
        if (login_res.data.code == 0) {
            let access_token = login_res.data.data.access_token;
            suspend({ access_token: access_token }).then((suspend_res) => {
                console.log(suspend_res.data.code + ':' + suspend_res.data.msg);
                if (suspend_res.data.code == 0) {
                    console.log('suspend success ~');
                }
            });
        } else {
            console.log(login_res.data.code + ':' + login_res.data.msg);
        }
    });
}

start(Secrets.username, Secrets.password);
