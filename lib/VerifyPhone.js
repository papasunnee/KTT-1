//09071816392
const API_KEY = 'tdRiOzqhj8aWd3jdBxz7RaFiUrw3AOUF',
  COUNTRY_CODE = '234'

const authy = require('authy')(API_KEY);
//var authy = require('authy')(API_KEY, 'http://sandbox-api.authy.com');

module.exports.sendCode = (phoneNumber) => {  
  authy.phones().verification_start(phoneNumber, COUNTRY_CODE, 'sms', function(err, res) {
    if(err)
      return(err);
    return('', res);
  })
}

module.exports.verifyCode = (phoneNumber, code)=> {
  authy.phones().verification_check(phoneNumber, COUNTRY_CODE, code, function (err, res) {
    if(err)
      return(err);
    reutrn('', res);
  });
}
