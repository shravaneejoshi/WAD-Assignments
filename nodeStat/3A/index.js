const express = require('express')
const mongoose = require('mongoose')
const msgrModel = require('./models/msgr.model')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const port = 3010

//// For form data
app.use(bodyParser.urlencoded({extended : true}))

// To serve form.html
//app.use(express.static(__dirname)); //'public'
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port,()=>{
    console.log(`listening on ${port}`);   
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/public/index.html'))
});

// app.get('/submit',(req,res)=>{
//     res.sendFile(path.join(__dirname + '/public/contact.html'))
//   });

app.post('/submit',async (req,res)=>{
    try {
        const msgr = await msgrModel.create(req.body)
        res.send('Thankyou For Contacting Us');
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})
mongoose.connect('mongodb://127.0.0.1/Message')
.then(()=>{
    console.log("connected to DB");   
}
)
.catch(()=>{
    console.log("connection Failed!!");
    
})


