semRequireChat
==============

Simple RequireJS demo app skeleton for SEM.js talk.<br>

1. This application has the barebore requirejs configuration you are most likely going to find in other applications.<br>
2. It has a main.js, which is the main module (entry point) for the app; analogous to main function in other languages.
3. It has an index.html that ties requirejs, requirejs configuration, and the main module.<br>
4. It has a chat module, which connects to <code>semrequirejs.herokuapp.com</code> and is located in <code>common/js/chat.js</code>.<br>

So, why does this even exist?  The purpose is really to let folks get aquainted with a RequireJS infrastructure.


Chat API
==============
1. <code>Chat</code> is a constructor that optionally takes in a jQuery instance. You don't need to pass anything in, unless you intend to customize where the chat module writes messages to.  Instantiate with a code like <code>var chat = new Chat();</code>. Located in <code>common/js/</code>.
2. <code>send</code> is an interface that takes in a message as the first parameter and optionally an email address as the second one.  The email address is only used to resolve your picture from avatar.com.
3. <code>get</code> interface that takes in an ID and returns a particular message.
4. <code>getAll</code> interface that returns all messages in the system.
5. <code>clear</code> interface that takes in an ID of a message to delete.
6. <code>clearAll</code> interface that deletes all messages in the system.


Instruction
==============
1. Clone or download a zip. If downloaded as zip, unzip
2. Look at index.html to inspect how things tie together.
3. Open main.js, which is the main module.
4. Create a RequireJS module.
5. Import the chat module.
6. Create a chat module instance. <code>new Chat();</code>
7. Send a message with the <code>send</code> interface.
8. Level up by reading and displaying all the messages using the <code>getAll</code> interface.
