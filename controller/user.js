const UserModel = require('../model/User')
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse')

//@desc         Insert user
//@route        POST  /api/v1/users
//@access       Private
exports.createUser = async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ success: false, message: err.message })
    }
}

//@desc         Get users
//@route        GET  /api/v1/users
//@access       Private
exports.getUsers = asyncHandler(async (req, res, next) => {

    const users = await UserModel.find()
    res
        .status(200)
        .json({ success: true, count: users.length, data: users })

})

//@desc         Get user
//@route        GET  /api/v1/users/:id
//@access       Private
exports.getUser = asyncHandler(async (req, res, next) => {

    const user = await UserModel.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorResponse(`User cannot be found by given ID: ${req.params.id}`,404)
        );
    }

    res.status(200).json({ success: true, data: user })
})

//@desc         Update user with given id parameter
//@route        POST  /api/v1/users/:id
//@access       Private
exports.updateUser = asyncHandler(async (req, res, next) => {

    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!user) {
        res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: user })
})

//@desc         Delete user
//@route        DELETE  /api/v1/users/:id
//@access       Private
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);

        if (!user) {
            res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: user })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}
