import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;
const API_Url= "https://v2.jokeapi.dev/joke/Any?type=single";
app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(API_Url);
        res.render("index.ejs",{
            joke:JSON.stringify(result.data.joke),
        });
    }catch(error){
        console.error("Failed to make response :", error.message);
        res.render("index.ejs",{
            joke:error.message,
        })
    }
});

app.post("/",async (req,res)=>{
    try{
        const result = await axios.get(API_Url);
        res.render("index.ejs",{
            joke:JSON.stringify(result.data.joke)
        }
        );
        console.log(JSON.stringify(result.data.joke));
    }catch(error){
        console.error("Failed to make response :", error.message);
        res.render("index.ejs",{
            joke:error.message,
        })
    }
});
app.listen(port,()=>{
    console.log(`The server is running on ${port}`);
})


