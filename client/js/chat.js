define([
  "text!client/tmpl/chat.html",
  "css!client/css/chat.css"
], function(tmpl) {

  function Chat() {
    this.$el = $("body").html($(tmpl)).addClass("chat");
    this.$messages = this.$el.find(".messages");
  }

  Chat.prototype.send = function(/*messages*/) {
    var i, length, message;
    for( i = 0, length = arguments.length; i < length; i++ ) {
      message = "<tr><td>" + arguments[i] + "</td><td>" + (new Date()).toString() + "</td></tr>";
      $(message).appendTo(this.$messages);
    }
  };

  return Chat;
});
