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
    return $.ajax({
      "method": "POST",
      "url": "http://" + Chat.remotehost + "/message",
      "contentType": "application/json",
      "dataType": "json",
      "data": JSON.stringify({"message": message, "from": from, "to": to}),
      "context": this
    })
    .done(this.loadMessage);
  };


  Chat.prototype.get = function(id) {
    return $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/messages/" + id,
      "contentType": "application/json",
      "context": this
    })
    .done(function(messages) {
      this.$messages.empty();
      var i, length;
      for( i = 0, length = messages.length; i < length; i++ ) {
        this.loadMessage(messages[i]);
      }
    });
  };


  Chat.prototype.getAll = function() {
    return $.ajax({
      "method": "GET",
      "url": "http://" + Chat.remotehost + "/messages",
      "contentType": "application/json",
      "context": this
    })
    .done(function(messages) {
      this.$messages.empty();
      var i, length;
      for( i = 0, length = messages.length; i < length; i++ ) {
        this.loadMessage(messages[i]);
      }
    });
  };


  Chat.prototype.clear = function(id) {
    return $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/messages/" + id,
      "context": this
    })
    .done(this.loadMessage);
  };


  Chat.prototype.clearAll = function() {
    return $.ajax({
      "method": "DELETE",
      "url": "http://" + Chat.remotehost + "/messages",
      "context": this
    })
    .done(this.loadMessage);
  };


  Chat.prototype.getPicture = function (email) {
    return 'http://www.gravatar.com/avatar/' + hex_md5(email) + '?s=35';
  };


  Chat.prototype.loadMessage = function (message) {
    var $message = $("<tr>");
    $message.append("<td class='message'>" + message.message + "</td>");
    $message.append("<td class='from'><img src='" + this.getPicture(message.from || "") + "'></img></td>");
    $message.appendTo(this.$messages);
  };


  return Chat;
});
