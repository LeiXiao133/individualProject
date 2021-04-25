const http = require('http');
const url = require('url');
const mysql = require("mysql");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;
const endPointRoot = "/API/v1/"

const con = mysql.createConnection({
    host: "localhost",
    user: "leixiaoc_individualProject",
    password: "xl300145541",
    database: "leixiaoc_individualProject"
});

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, X-Requested-With');
    next();                                
});


app.put("/individualProject/API/v1/updateQuestion",(req,res) => {
    

       let body ="";
       req.on('data', function (chunk){
           if(chunk!=null){
               body += chunk;
               console.log(body);
           }
       });

       req.on('end',function(){
           
           let q = `update quiz set question="${JSON.parse(body).question}", an1="${JSON.parse(body).an1}",an2="${JSON.parse(body).an2}",an3="${JSON.parse(body).an3}",an4="${JSON.parse(body).an4}", ansKey="${JSON.parse(body).ansKey}" where questioNum = ${JSON.parse(body).questioNum}`
           console.log(q);
           
           con.query(q,(err,result)=>{
               if(err){
                   throw err;
               };
               
           });
           res.end("Updated");
       });
});


app.post("/individualProject/API/v1/save/",(req,res) => {  
    const q = url.parse(req.url, true);
    const qdata = q.query;
    let questioNum = qdata.questioNum;    
    let question = qdata.question;
    let an1 = qdata.an1;
    let an2 = qdata.an2;
    let an3 = qdata.an3;
    let an4 = qdata.an4;
    let ansKey = qdata.ansKey;
    
    let sql = `INSERT INTO quiz(questioNum, question, an1, an2, an3, an4, ansKey) values (?,?,?,?,?,?,?)`;
    let data = [questioNum, question, an1, an2, an3, an4, ansKey];
    con.query(sql, data, function (err, result) {
        if (err) throw err;
    });   
    res.end("Data saved!")
});

app.get("/individualProject/API/v1/quiz/",(req,res) => {
    let sql = `SELECT * FROM quiz WHERE 1`;
    con.query(sql, function(err,result){
        if(err) throw err;
        let content = '';
        let countArray=[];
        let point =0;
        for(let i=0;i<result.length; i++){
            countArray.push(result[i].questioNum)
            content += "<br>" + result[i].question
                    + "<br>"+ "<input type='radio' id='a1' name= 'a"+result[i].questioNum+"'>" 
                    + result[i].an1+"<br>"+ "<input type='radio' id='a2'>" + result[i].an2
                    +"<br>"+ "<input type='radio' id='a3"+result[i].questioNum+"'>" 
                    + result[i].an3+"<br>"+ "<input type='radio' id='a4'>" + result[i].an4 + "<br>";
            
        }
        res.send(content);
        
    });
});

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("Listening to port", PORT);
});
