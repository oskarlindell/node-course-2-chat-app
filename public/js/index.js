var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  // socket.emit(
  //   "createMessage",
  //   {
  //     from: "Frank",
  //     text: "Hi!"
  //   },
  //   function(data) {
  //     console.log("Got it", data);
  //   }
  // );
});

socket.on("disconnect", function() {
  console.log("Server disconnected");
});

socket.on("newMessage", function(message) {
  console.log("newMessage", message);
  var li = jQuery("<li></li>");
  li.text(`${message.from}: ${message.text}`);
  jQuery("#messages").append(li);
});

jQuery("#message-form").on("submit", function(e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "USER",
      text: jQuery("[name=message]").val()
    },
    function() {}
  );
});
