'use strict';
$(document).ready(function() {



  window.fbAsyncInit = function() {
    FB.init({
      appId: '1174938632539465',
      xfbml: true,
      version: 'v2.6'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=Z7SXAOIEXULR4RPZQ5P5',
    'method': 'GET',
    'headers': {
      'cache-control': 'no-cache',
      'postman-token': '3cc107a3-eac1-a707-ef97-6ad567702f84'
    }
  }

  var result = $.ajax(settings)

  .done(function(response) {
      console.log(response);
    })
    .fail(function(response) {
      console.log(response.statusText);
    });

});
