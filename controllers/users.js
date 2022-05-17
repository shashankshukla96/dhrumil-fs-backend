const userModel = require("../schemas/user");

const userController = {

    getAllUsers: async (req, res) => {
        try {
            const users = await userModel.find({}, {
                email: 1,
                name: 1
            });
            return res.status(200).send({
                message: "Successfully retrieved all users",
                data: users
            });
        } catch (err) {
            return res.status(500).send({
                message: err.message
            })
        }
    },
    getOneUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userModel.findOne({
                _id: id
            });
            return res.status(200).send({
                message: "Successfully retrieved one user",
                data: user
            });
        } catch (err) {
            return res.status(500).send({
                message: err.message
            })
        }
    },

    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await userModel.findOne({
                _id: id
            });

            if (!user) {
                return res.status(404).send({
                    message: "User not found"
                });
            }

            // const updatedUser = await userModel.updateOne({_id: id}, {});

        } catch (err) {
            return res.status(500).send({
                message: err.message
            })
        }
    },

    deleteUser: async (req, res) => { },

    resetPassword: async (req, res) => { },
}

module.exports = userController;