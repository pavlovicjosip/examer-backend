const UserModel = require('../model/User')


//@desc         Insert user
//@route        POST  /api/v1/users
//@access       Private
exports.createUser = async(req,res)=>{
    try{
        const newUser = await UserModel.create(req.body)
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({success:false,message:err.message})
    }
}

//@desc         Get users
//@route        GET  /api/v1/users
//@access       Private
exports.getUsers = async (req, res) => {
    try{
        const users = await UserModel.find()
        res.status(200).json({success:true,count:users.length,data:users})
    }catch(err){
        res.status(500).json({message: err.message})
    } 
}

//@desc         Get user
//@route        GET  /api/v1/users/:id
//@access       Private
exports.getUser = async ( req,res ) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if(!user){
            res.status(400).json({success:false,message:"No user found by that id"})
        }
        res.status(200).json({success:true,data:user})
    } catch (err) {
        res.status(400).json({success:false,message:err.message})
    }
}

//@desc         Update user with given id parameter
//@route        POST  /api/v1/users/:id
//@access       Private
exports.updateUser = async ( req,res ) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });

        if(!user){
            res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:user})
    } catch (error) {
        res.status(400).json({success:false})
    }
}

//@desc         Delete user
//@route        DELETE  /api/v1/users/:id
//@access       Private
exports.deleteUser = async ( req,res ) => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);

        if(!user){
            res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:user})
    } catch (error) {
        res.status(400).json({success:false})
    }
}
