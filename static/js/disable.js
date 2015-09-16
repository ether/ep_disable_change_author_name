var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
  $('#myusernameedit').prop('disabled', true); // disable the input box
}
