import TwilioAuthService from 'node-twilio-verify'

var accountSid = "AC464068b8b9077591c92e883983bda726",
    authToken = "c12540ffcd3ad9977cd5f30ebe5bf109";
    //fromNumber = '+1xxxxxxxxxx';

twilioAuthService = new TwilioAuthService();
twilioAuthService.init(accountSid, authToken);
//twilioAuthService.setFromNumber(fromNumber);

export const sendCode =  (toNumber) => {
  twilioAuthService.sendCode(toNumber).then(function(results) {
      console.log(results);
  }, function error(err) {
      console.log(err);
  });
}

export const verifyCode =  (toNumber) => {
  var isValid = twilioAuthService.verifyCode(phoneNumber, code);
  if (isValid){
      console.log("Validation success");
  } else {
      console.log("Code validation failed");
  }
}

/*curl 'https://api.authy.com/protected/json/phones/verification/start' \
-d api_key=bNjXVSOjyIMrXnoGZXZju9Q6opGHsoM4 \
-d via=sms \
-d phone_number=09071816392 \
-d country_code=234*/

/*curl -GET 'https://api.authy.com/protected/json/phones/verification/check' \
-d api_key=bNjXVSOjyIMrXnoGZXZju9Q6opGHsoM4 \
-d verification_code= \
-d phone_number=09071816392 \
-d country_code=234*/
