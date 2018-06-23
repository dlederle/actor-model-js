import EventEmitter from "events";

const mailBox = new EventEmitter();

mailBox.on("channel-name", message => {
  console.log("message");
});

mailBox.emit("channel-name", "message");
