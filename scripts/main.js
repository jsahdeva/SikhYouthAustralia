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


  Handlebars.registerHelper('eachEvent', function(context, options) {
    var fn = options.fn,
      inverse = options.inverse,
      ctx;
    var ret = '';
    console.log('In Helper');
    if (context && context.length > 0) {
      for (var i = 0, j = context.length; i < j; i++) {
        context[i].index = i + 1;
        context[i].first = i === 0;
        context[i].last = i === context.length - 1;
        ctx = Object.create(context[i]);
        ret = ret + fn(ctx);
      }
    } else {
      ret = inverse(this);
    }
    console.log(ret);
    return ret;
  });

  Handlebars.getTemplate = function(name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      $.ajax({
        url: 'templates/' + name + '.handlebars',
        success: function(data) {
          if (Handlebars.templates === undefined) {
            Handlebars.templates = {};
          }
          Handlebars.templates[name] = Handlebars.compile(data);
        },
        async: false
      });
    }
    return Handlebars.templates[name];
  };

  var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://www.eventbriteapi.com/v3/users/me/owned_events/?status=live&token=ZEZL3HY5IL2RACNCJTQU&expand=logo',
    'method': 'GET',
    'headers': {}
  }

  var events;
  $.ajax(settings)

  .done(function(response) {
      events = response;
      console.log(response);
      console.log(JSON.stringify({
        events: events.events
      }));
      var compiledEvents = Handlebars.getTemplate('events');
      $('#events').append(compiledEvents({
        events: events.events
      }));
    })
    .fail(function(response) {
      console.log(response.statusText);
    });



});
