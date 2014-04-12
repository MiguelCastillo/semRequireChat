define(function() {

  function Chat(options) {
    options = options || {};
    if ( options instanceof jQuery ) {
      options.$el = options;
    }
    else {
      options.$el = options.$el || $("body");
    }

    this.$el = options.$el.addClass("chat");
    this.$messages = this.$el.find(".messages");
  }


  Chat.prototype.send = function(message, email) {
    $.ajax({
      "method": "POST",
      "url": "http://mcastillo_macbook:3000/message",
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify({"message": message, "email": email}),
      "context": this
    })
    .done(loadMessage);
  };


  Chat.prototype.getAll = function() {
    $.ajax({
      "method": "GET",
      "url": "http://mcastillo_macbook:3000/messages",
      "contentType": "application/json",
      "context": this
    })
    .done(function(messages) {
      this.$messages.empty();
      var i, length;
      for( i = 0, length = messages.length; i < length; i++ ) {
        loadMessage.call(this, messages[i]);
      }
    });
  };


  function loadMessage(data) {
    var $message = $("<tr>");
    $message.append("<td>" + data.message + "</td>");
    $message.append("<td>" + (new Date(data.timestamp)).toDateString() + "</td>");
    $message.append("<td><img src='" + pictue(data.email || "") + "'></img></td>");
    $message.appendTo(this.$messages);
  }


  function pictue(email) {
    return 'http://www.gravatar.com/avatar/' + hex_md5(email) + '?s=35';
  }


  return Chat;
});
