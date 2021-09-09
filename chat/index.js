const express = require('express');
const server = require("http").createServer();


server.listen(8080, () => {
  console.log('listening on *:8080');
});

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
    console.log('a user connected to socket id:', socket.id);
    socket.on("error", (err) => {
      console.log({err})
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
  
io.on('connection', (socket) => {
  socket.on('chat message', (amount,user) => {
    io.emit('chat message', amount,user);
  });
});
