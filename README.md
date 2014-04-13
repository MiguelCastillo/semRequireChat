semRequireChat
==============

SEM.js RequireJS skeleton demo app<br>

1. This application has probably the most basic RequireJS setup you need to know.<br>
2. It has a main.js, which is the main module (entry point) for the app; analogous to main function in other languages.
3. It has an index.html that ties requirejs, requirejs configuration, and the main module.<br>
4. It has a chat module, which connects to <code>semrequirejs.herokuapp.com</code> and is located in <code>common/js/chat.js</code>.<br>

So, why does this even exist?  The purpose is really to let folks get aquainted with a RequireJS infrastructure.


Instruction
==============
1. Download the zip.
2. Look at index.html to inspect how things tie together.
3. Open main.js, which is the main module and its currently empty for you to fill in.
4. Define a RequireJS module and import the chat module.
6. Create a chat module instance. <code>new Chat();</code>.
7. Send a message with the <code>send</code> interface.
8. Level up 1: read and display all the messages using the <code>getAll</code> interface.
9. Level up 2: delete a message you have posted.  DO NOT USE clearAll!


Chat API
==============
1. <code>Chat</code> is a constructor that optionally takes in a jQuery instance. You don't need to pass anything in, unless you intend to customize where the chat module writes messages to.  Instantiate with a code like <code>var chat = new Chat();</code>. Located in <code>common/js/</code>.
2. <code>send</code> is an interface that takes in a message as the first parameter and optionally an email address as the second one.  The email address is only used to resolve your picture from avatar.com.
3. <code>get</code> interface that takes in an ID and returns a particular message.
4. <code>getAll</code> interface that returns all messages in the system.
5. <code>clear</code> interface that takes in an ID of a message to delete.

