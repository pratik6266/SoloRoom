import express from 'express';
import cors from "cors";
import 'dotenv/config';
import router from './routes/index.js';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { setupSocket } from './socket.js';
const port = process.env.PORT || 7000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});
setupSocket(io);
export { io };
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Its Working 🔥');
});
app.use('/api', router);
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
