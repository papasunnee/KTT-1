//09071816392
const API_KEY = 'bNjXVSOjyIMrXnoGZXZju9Q6opGHsoM4',
  COUNTRY_CODE = '234'

const authy = require('authy')(API_KEY);
//const authy = require('authy')(API_KEY, 'http://sandbox-api.authy.com');

module.exports.sendCode = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    authy.phones().verification_start(phoneNumber, COUNTRY_CODE, 'sms', function(err, res) {
      if(err)
        reject(err);
      console.log('0987654321');
      console.log(res);
      resolve(res);
    })
  })
  //return phoneNumber;
}

module.exports.verifyCode = (phoneNumber, code)=> {
  return new Promise((resolve, reject) => {
    authy.phones().verification_check(phoneNumber, COUNTRY_CODE, code, function (err, res) {
      if(err)
        reject(err);
      console.log('1234567890');
      console.log(res);
      resolve(res);
    });
  })
  //return code;
}
