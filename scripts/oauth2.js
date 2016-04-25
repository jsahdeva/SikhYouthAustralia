'use strict';
hello.init({
  facebook: '1174938632539465',
  google: '446067204072-hacbqiv1kka038equsi7birfkcesuj67.apps.googleusercontent.com',
  eventbrite: '3CSVL5YJAAHEAWW3VXJE'
}, {
  redirect_uri: '/'
});

hello.on('auth.login', function(auth) {

  // Call user information, for the given network
  hello(auth.network).api('/me').then(function(r) {
    // Inject it into the container
    var label = document.getElementById('profile_' + auth.network);
    if (!label) {
      label = document.createElement('div');
      label.id = 'profile_' + auth.network;
      document.getElementById('profile').appendChild(label);
    }
    label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
  });
});
