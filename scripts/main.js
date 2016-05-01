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


  function getMeta(url, callback) {
    var img = new Image();
    img.addEventListener('load', function() {
      callback(this.width, this.height);
    });
    img.src = url;
  }

  var settings = {
    'async': true,
    'crossDomain': true,
    'url': 'https://www.eventbriteapi.com/v3/users/me/owned_events/?status=live&token=ZEZL3HY5IL2RACNCJTQU&expand=logo&expand=venue',
    'method': 'GET',
    'headers': {}
  }

  var events;

  $.ajax(settings)

  .done(function(response) {
      events = response.events.map(function(event, index) {
        var retVal = {};
        events: {
          retVal.start = {
            time: moment(event.start.local).format('dddd, MMMM Do YYYY, h:mm:ss a'),
            timezone: event.start.timezone
          };
          retVal.end = {
            time: moment(event.end.local).format('dddd, MMMM Do YYYY, h:mm:ss a'),
            timezone: event.end.timezone
          };
          retVal.venue = {
            address_1: event.venue.address.address_1,
            address_2: event.venue.address.address_2,
            city: event.venue.address.city,
            region: event.venue.address.region,
            postal_code: event.venue.address.postal_code,
            country: event.venue.address.country,
            latitude: event.venue.address.latitude,
            longitude: event.venue.address.longitude
          };
          retVal.name = event.name.text;
          retVal.url = event.url;
          retVal.image = event.logo.url;
          retVal.capacity = event.capacity;
        }
        return retVal;
      });
      console.log(response);
      console.log(JSON.stringify(events));
      var compiledEvents = Handlebars.getTemplate('events');
      $('#events').append(compiledEvents(events));
      getMeta(events[2].image, function(width, height) {
        $('img.event, img.camp, img.news, img.media').attr('height', height);
        $('img.event, img.camp, img.news, img.media').attr('width', width);
        //alert(height);
      });
      $('img.event').attr('src', events[0].image);

      $('img.camp').attr('src', events[1].image);
      $('img.news').attr('src', events[2].image);
      $('img.media').attr('src', events[1].image);
    })
    .fail(function(response) {
      console.log(response.statusText);
    });





});
