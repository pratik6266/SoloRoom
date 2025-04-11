export function setupSocket(io) {
    io.on('connection', (socket) => {
        console.log("The scoket connected: ", socket.id);
        socket.on('message', (data) => {
            console.log("Server side message: ", data);
            socket.broadcast.emit('message', data);
        });
        socket.on('disconnect', () => {
            console.log("A user disconnected: ", socket.id);
        });
    });
}
