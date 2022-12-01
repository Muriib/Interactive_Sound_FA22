const maxApi = require("max-api");
//maxApi.outlet("hello node");

const weather = require('openweather-apis');
weather.setAPPID('d6f04c408d46f1b0ef14eb17473f9ea3');
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("denver", () => {
  weather.setCity('denver');
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("new york", () => {
  weather.setCity('new york city');
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("los angeles", () => {
  weather.setCity('los angeles');
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});

maxApi.addHandler("berlin", () => {
  weather.setCity('berlin');
  weather.getAllWeather(function(err, JSONObj){
    maxApi.outlet(JSONObj);
  });
});
