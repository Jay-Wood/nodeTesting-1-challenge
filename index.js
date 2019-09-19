const server = require("./server.js");
const port = process.env.PORT || 5678;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})