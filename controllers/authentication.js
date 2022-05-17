const userModel = require("../schemas/user");

const authenticationController = {

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await userModel.findOne({ email: email });
            if (!user) {
                return res.status(403).send({
                    message: "User not found"
                });
            } else {
                if (user.password === password) {
                    return res.status(200).send({
                        message: "Login successful",
                        data: user
                    });
                } else {
                    return res.status(403).send({
                        message: "Password incorrect"
                    });
                }
            }
        } catch(err) {
            console.log(err);
            return res.send({
                message: "Error User Login",
                error: err.message
            })
        }
    },

    // register: (req, res) => {
    //     const { name, email, password } = req.body;
    //     const newUser = new userModel({
    //         name: name,
    //         email: email,
    //         password: password,
    //     });

    // 1. pending, 2. approved, 3. rejected
    //     newUser.save().then(user => {
    //         return res.send({
    //             message: "User Added Successfully",
    //             data: user
    //         })
    //     }).catch(err => {
    //         return res.send({
    //             message: "Error Adding User",
    //             error: err.message
    //         })
    //     })
    // },

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = new userModel({
                name: name,
                email: email,
                password: password,
            });
    
            const user = await newUser.save();
            return res.send({
                message: "User Added Successfully",
                data: user
            })
        } catch(err) {
            return res.send({
                message: "Error Adding User",
                error: err.message
            })
        }
    },

    adminLogin: (req, res) => {
        // Do it yourslef
        return res.send('Hello World from Auth Router for admin login!');
    }

};

module.exports = authenticationController;