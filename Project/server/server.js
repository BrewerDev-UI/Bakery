const express = require("express");
const app = express();
const cors = require('cors')
const port = 8000;
const adminRoutes = require('./routes/admin.routes')
require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');

app.use('/api/admin', adminRoutes)
const Routes = require('./routes/product.routes');
Routes(app);


const server = app.listen(port, () => console.log(`Ahoy welcome to Port: ${port}`))

const io = require("socket.io")(server)

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("chat", (client_input) => {
        console.log("Got a message", client_input)

        io.emit("post chat", client_input)
    })
})