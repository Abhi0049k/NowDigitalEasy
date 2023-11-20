const userModel = require("../models/user.model");

const allUser = async (req, res)=>{
    try{
        const users = await userModel.find();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send({error: err.message});
    }
}

const specificUser = async(req, res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findById(id);
        res.status(200).send(user);
    }catch(err){
        res.status(500).send({error: err.message});
    }
}

const creatingUser = async(req, res)=>{
    try{
         const {name, role, email, phoneNumber} = req.body;
         const newUser = new userModel({name, role, email, phoneNumber});
         await newUser.save();
         res.status(201).send({message: "New User Created"});
    }catch(err){
        res.status(500).send({error: err.message});
    }
}

const deletingUser = async(req, res)=>{
    try{
        const {id} = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(204).send();
    }catch(err){
        res.status(500).send({error: err.message});
    }
}

const updatingUser = async(req, res)=>{
    try{
        const {name, role, email, phoneNumber} = req.body;
        const {id} = req.params;
        await userModel.findByIdAndUpdate(id, {name, role, email, phoneNumber});
        res.status(200).send({message: 'User Details Updated'});
    }catch(err){
        res.status(500).send({error: err.message})
    }
}

module.exports = {
    allUser, specificUser, creatingUser, deletingUser, updatingUser
}