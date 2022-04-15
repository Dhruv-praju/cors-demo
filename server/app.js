const express = require('express')
const app = express()
const cors = require('cors')

// const corsOptions = 
app.use(cors({
    origin: "http://127.0.0.1:5500",     // client URL
    credentials: true
}))

app.get('/data', (req, res)=>{
    res.json({name:'Dhruv', favFood:'cake'})
})
app.listen(3000, (req, res)=>{
    console.log('Server started listening at 3000...');
})