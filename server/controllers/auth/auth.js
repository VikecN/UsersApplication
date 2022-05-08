const Login = (req, res) => {
    res.send("Login Page.");
};

const Logout = (req, res) => {
    res.redirect('/authentication/login');
};

const Register = (req, res) => {
    res.send("Register Page.");
};

module.exports = {Login, Logout, Register}