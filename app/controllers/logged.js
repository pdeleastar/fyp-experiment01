'use strict';
'use strict';

exports.home = {

  handler: function (request, reply) {
    reply.view('home', { title: 'Log in Successful' });
  },

};


