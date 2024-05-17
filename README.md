# WebSocket Demo

This is a simple demonstration of using WebSockets to enable real-time communication between a client and server. The client is an HTML page that allows sending messages to the server. The server is a Node.js application that echoes back the received messages to the client.

## Prerequisites

- Node.js installed on your system

## Getting Started

1. Clone the repository or download the source files.<br>

2. Open a terminal and navigate to the project directory.<br>

3. Install the required dependencies by running the following command:<br>
npm install express ws<br>

4. Start the server by running the following command:<br>
node server.js<br>

5. Open a web browser and visit `http://localhost:3001` to access the client HTML page.<br>

6. Enter a message in the input field and click the "Send" button. The message will be sent to the server and echoed back to the client, displaying it on the page.<br>

## Project Structure

- `index.html`: The client-side HTML file that provides the user interface for sending messages.
- `server.js`: The server-side Node.js file that sets up the WebSocket server and handles incoming messages.

## How It Works

- The client establishes a WebSocket connection to the server using the `ws://` protocol.<br>
- When the client sends a message, it is transmitted to the server via the WebSocket connection.<br>
- The server receives the message and echoes it back to the client.<br>
- The client receives the echoed message and displays it on the page.<br>

## Dependencies

- **Express**: A web framework for Node.js used to serve the client HTML file.<br>
- **ws**: A WebSocket library for Node.js used to establish and handle WebSocket connections.<br>

<br>

Feel free to explore and modify the code to enhance the functionality or styling of the WebSocket demo.
