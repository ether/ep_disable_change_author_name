var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
  $('#users input[type=text]').prop('disabled', true); // disable the text boxes in the users section.
  $('#users input[type=text]').attr('Title', 'Name Change Disabled'); // disable the text boxes in the users section.
  $('body').append('<style> \
    #myusernameedit{background:lightgrey !important;} \
    #myusernameedit:hover{background:lightgrey !important;color:#333 !important} \
  </style>');
};
