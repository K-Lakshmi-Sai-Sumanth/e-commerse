const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db.connect");
const User = require("./modals/userModal");

const app = express();

const port = 5000

app.use(express.json())


app.listen(port, ()=>{
    console.log("Successfuly server is running in", port)
})

connectDb()

app.get("/", (req, res) => {
    res.status(200).json({message:"user data getting..."})
});
 
app.post("/", (req, res) => {

    try{
        const user = new User({
            name: req.body.name,
            email: req.body.email
        }).save();
    
        res.status(200).json({message:"user successfully created..."})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"user creation failed..."})
    }

    
});


app.put("/", async (req, res) => {

    try{
        const user = await User.findOne({name: req.body.name});
        
            user.name = req.body.name,
            user.email = req.body.email

            await user.save()
        
    
        res.status(200).json({message:"user successfully updated..."})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"user updation failed..."})
    }

    
});

app.delete("/", async (req, res) => {

    try{
        const user = await User.findOneAndDelete({name: req.body.name});

            
        
    
        res.status(200).json({message:"user successfully deleted..."})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"user deletion failed..."})
    }

    
});