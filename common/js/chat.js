define(function() {

  Chat.remotehost = "semrequirejs.herokuapp.com";

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


  Chat.prototype.send = function(message, from, to) {
    $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/message",
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify({"message": message, "from": from, "to": to}),
      "context": this
    })
    .done(loadMessage);
  };


  Chat.prototype.get = function(id) {
    $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/messages/" + id,
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


  Chat.prototype.getAll = function() {
    $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/messages",
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


  Chat.prototype.clear = function(id) {
    $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/messages/" + id,
      "context": this
    })
    .done(loadMessage);
  };


  Chat.prototype.clearAll = function() {
    $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/messages",
      "context": this
    })
    .done(loadMessage);
  };


  function loadMessage(data) {
    var $message = $("<tr>");
    $message.append("<td>" + data.message + "</td>");
    $message.append("<td>" + (new Date(data.created)).toDateString() + "</td>");
    $message.append("<td><img src='" + pictue(data.from || "") + "'></img></td>");
    $message.appendTo(this.$messages);
  }


  function pictue(from) {
    return 'http://www.gravatar.com/avatar/' + hex_md5(from) + '?s=35';
  }


  return Chat;
});
