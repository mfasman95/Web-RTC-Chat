//when receiving data, add it to the screen
const receive = (data) => {

};

//send message to all of our peers we've established 
//sending data streams to
//This takes our username and an array of peer connections
const send = (username, peers) => {
  const messageString = document.querySelector("#message").value;
  const message = `${username}: ${messageString}`;

};

//when we try to link to another user
//server conn is our connect to the main server
const link = (serverConn) => {
  const remoteUser = document.querySelector("#remoteUser").value;
  
};

//fired when the connect button is hit
const connectSocket = (e) => {
  const message = document.querySelector("#message");
  const linkButton = document.querySelector("#link");
  const sendButton = document.querySelector("#send");
  
  const username = document.querySelector("#username").value;
  

};

const init = () => {
  const connect = document.querySelector("#connect");
  connect.addEventListener('click', connectSocket);
};

window.onload = init;