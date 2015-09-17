var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
  $('#users input[type=text]').prop('disabled', true); // disable the text boxes in the users section.
}
