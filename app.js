// Import the 'http' module
const http = require("http");

// Create a server and define a callback function to handle incoming requests
const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 and content type of plain text
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response back to the client
  res.end("Hello, Node.js Server!");
});

// Specify the port on which the server will listen
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
