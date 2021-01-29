const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const url='mongodb://localhost:27017'
const database='profession'


MongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
if(err){
    console.log(err)
}
const db=client.db(database)
// db.collection('users').insertOne({
//     name:'vinod',email:'vino@gmai.com'
// })
db.collection('users').insertMany( [{name:'manoj',email:'manoj@gmail.com'},{name:'test',email:'test@gmail.com'}],(err,res)=>{
    console.log(res.ops)
}
)
})
const express=require('express')
const app=express()


const path=require('path')
const hbs=require('hbs')
const hbspath=path.join(__dirname,'../templates/views')
const partials=path.join(__dirname,'../templates/partials')
const staticpath=path.join(__dirname,'../public')
app.use(express.static(staticpath))

app.set('view engine','hbs')
app.set('views',hbspath)
hbs.registerPartials(partials)
const data={name:'vinod',email:'vinod@gmail.com',phn:'9642111',sa:12}

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/role',(req,res)=>{
res.render('role')
})
app.get('/designation',(req,res)=>{
res.render('designation')
})
app.get('/about',(req,res)=>{
    // console.log(data[s])
    if(!req.query.search){
        return res.send('provide quary string')
    }
    var s=req.query.search
    var sa=req.query.email

  //  res.send([data.name,r,s,data.sa])


    })
app.get('*',(req,res)=>{
    res.render('404')
    })



app.listen(3000,()=>{
    console.log('sever is on')
})
