const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    // we're connected!
});

// App Users
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    pic: Image,
});

const User = mongoose.model("User", userSchema);

//Events
const eventSchema = new mongoose.Schema({
    name: String,
    invitedFriends: Array,
    products: Array,
});

const Event = mongoose.model("Event", eventSchema);
