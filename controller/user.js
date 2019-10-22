const UserModel = require('../model/user')


//@desc         Insert user
//@route        POST  /api/v1/users/new
//@access       Private
exports.createUser = async(req,res)=>{

    const user = new UserModel({

        name:req.body.name,
        lastName:req.body.lastName,
        jmbag:req.body.jmbag,
        password:req.body.password
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

//@desc         Get users
//@route        GET  /api/v1/users/
//@access       Private
exports.getUsers = async (req, res) => {
    try{
        const users = await UserModel.find()
        res.json(users)
    }catch(err){
        res.status(500).json({message: err.message})
    } 
}

//@desc         Get user
//@route        GET  /api/v1/users/:id
//@access       Private
exports.getUser = async ( req,res ) => {
    try {
        
    } catch (error) {
        
    }
}

//@desc         Update user
//@route        POST  /api/v1/users/:id
//@access       Private
exports.updateUser = async ( req,res ) => {
    try {
        
    } catch (error) {
        
    }
}

//@desc         Delete user
//@route        DELETE  /api/v1/users/:id
//@access       Private
exports.deleteUser = async ( req,res ) => {
    try {
        
    } catch (error) {
        
    }
}
