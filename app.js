const express = require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const blogcontent = require("./mongodb");

const homeStartingContent="A full stack web developer is a person who can develop both client and server software.In addition to mastering HTML and CSS, he/she also knows how to:Program a browser (like using JavaScript, jQuery, Angular, or Vue)Program a server (like using PHP, ASP, Python, or Node)Program a database (like using SQL, SQLite, or MongoDB)";
const aboutContent="  Hi everyone this is our team worked with our best experience . Looking forward to become a FULLSTACK DEVELPOER . As well as a creative web desginer . Here is our blog site hope you all love it ."
const contactContent=" You can contact me by clicking the icons below"

const app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.static("views/image"));
app.use(bodyParser.urlencoded({extended:false}));

let posts=[];

app.get("/",function(req,res){
    res.render("home",{
        startContent:homeStartingContent,posts
    });
});

app.get("/about",function(req,res){
    res.render("about",{abtContent:aboutContent});
});

app.get("/compose",function(req,res){
    res.render("compose");
});

app.post("/compose",async(req,res) =>{
    const post={
        title:req.body.title,
        content:req.body.content
    }
    await blogcontent.insertMany([post])
    posts.push(post);
    res.redirect("/");
});



app.listen(8000,function(){
    console.log("Server run in 5000");
});

