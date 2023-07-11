require("dotenv").config();
const express = require ('express');
const ifThreat = require('./routes/ifThreat')
const noThreat = require('./routes/noThreat')
const mlModel = require('./routes/getPythonMsg')
const getAlldriver = require('./routes/getAlldriver')
const getAllCars = require('./routes/getAllCars');
const getAllMerchant = require('./routes/getAllMerchant');

const app = express();

// Calling the express.json() method for parsing
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: 1,
        message: "Welcome to Threat Detection Model"
    })
})

app.use('/ifThreat', ifThreat);
app.use('/noThreat', noThreat);
app.use('/mlModel', mlModel);
app.use('/driver', getAlldriver);
app.use('/cars', getAllCars);
app.use('/merchant', getAllMerchant);


app.listen(process.env.PORT | 8080,() => {
    console.log(`localhost is connected at ${process.env.PORT}`);
})


// below is the code for socket and web rtc backend

const { Server } = require("socket.io");

const io = new Server(8005, {
  cors: true,
});

const emailToSocketIdMap = new Map();
const socketidToEmailMap = new Map();

io.on("connection", (socket) => {
  console.log(`Socket Connected`, socket.id);
  socket.on("room:join", (data) => {
    const { email, room } = data;
    console.log(data);
    emailToSocketIdMap.set(email, socket.id);
    socketidToEmailMap.set(socket.id, email);
    io.to(room).emit("user:joined", { email, id: socket.id });
    socket.join(room);
    io.to(socket.id).emit("room:join", data);
  });

  socket.on("user:call", ({ to, offer }) => {
    io.to(to).emit("incomming:call", { from: socket.id, offer });
  });

  socket.on("call:accepted", ({ to, ans }) => {
    io.to(to).emit("call:accepted", { from: socket.id, ans });
  });

  socket.on("peer:nego:needed", ({ to, offer }) => {
    console.log("peer:nego:needed", offer);
    io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
  });

  socket.on("peer:nego:done", ({ to, ans }) => {
    console.log("peer:nego:done", ans);
    io.to(to).emit("peer:nego:final", { from: socket.id, ans });
  });
});
