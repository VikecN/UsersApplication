const jwt = require("jsonwebtoken");

const { JWT_KEY, JWT_EXPIRY_SECONDS } = process.env;

const users = {
	user1: "password1",
	user2: "password2",
}

const Login = (req, res) => {
    const { username, password } = req.body;
    
    //Validate User Input
    if(!username || !password || users[username] != password){
        const message = {
            "message": "username/password is invalid. Try again."
        }
        return res.json(message).status(401).end();
    }

    const token = jwt.sign({ username }, JWT_KEY, {
        algorithm: "HS256",
        expiresIn: JWT_EXPIRY_SECONDS
    });

    console.log("token", token);

    res.cookie("token", token, { maxAge: JWT_EXPIRY_SECONDS * 1000 });
    res.end()
};

const Logout = (req, res) => {
    res.clearCookie("token");
    res.end();
};

const Register = (req, res) => {
    res.send("Register Page.");
};

module.exports = {Login, Logout, Register}