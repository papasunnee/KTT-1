import axios from 'axios'
//09071816392
const API_KEY = 'tdRiOzqhj8aWd3jdBxz7RaFiUrw3AOUF',
  COUNTRY_CODE = '234'

export const sendCode = (phoneNumber) => {
  const url = 'https://sandbox-api.authy.com/protected/json/phones/verification/start'
  axios.get(url, {
    params: {
      api_key: API_KEY,
      via: 'sms',
      phone_number: phoneNumber,
      country_code: COUNTRY_CODE
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const verifyCode = (phoneNumber, code)=> {
  const url = 'https://sandbox-api.authy.com/protected/json/phones/verification/check'
  axios.get(url, {
    params: {
      api_key: API_KEY,
      verification_code: code,
      phone_number: phoneNumber,
      country_code: COUNTRY_CODE
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
