const userModel = require("../schemas/user");

const authenticationController = {

    login: (req, res) => {
        return res.send('Hello World from Auth Router for user login!');
    },

    register: (req, res) => {
        const { name, email, password } = req.body;
        const newUser = new userModel({
            name: name,
            email: email,
            password: password,
        });

        newUser.save().then(user => {
            return res.send({
                message: "User Added Successfully",
                data: user
            })
        }).catch(err => {
            return res.send({
                message: "Error Adding User",
                error: err.message
            })
        })


    },

    adminLogin: (req, res) => {
        return res.send('Hello World from Auth Router for admin login!');
    }

};

module.exports = authenticationController;