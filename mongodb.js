const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin-gokulkannan:Gokul%40003@cluster0.yecwj5g.mongodb.net/blog?authSource=Cluster0&authMechanism=SCRAM-SHA-1")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const Blogschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
});

const blogcontent=new mongoose.model("Blog",Blogschema);

module.exports=blogcontent;