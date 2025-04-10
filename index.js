const express = require('express');
const res = require('express/lib/response');

const fruits = require('./fruits');

const PORT = process.env.port || 3000

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/ping', (req, res) => {
    res.json('pong');
  })

app.get('/route',(req,res)=>{
    res.send({msg:"This is a route"})
})
const greet = (req,res)=>{
    res.send({msg:`Why hello there, ${req.params.name}`})
}
app.get(`/greet/:name`,greet)


const nums = [1,2,3,4,5]
app.get('/five_nums',(req,res)=>{
    res.send({nums})
})


app.get('/evens/:n', (req,res) =>{
    evens = []
    for(let i=2; i <= req.params.n;i++){
        if(i % 2 ===0){
            evens.push(i)
        }
    }
    res.send({evens})
})

app.get('/namelength/:name', (req,res) =>{
    length  = req.params.name.length
    // nameInput = req.params.name
    // splitName = nameInput.split
    // nameLength=splitName.length
    res.send(`Your name is ${length} letters long!`)
})

app.get('/fruits', (req,res) =>{
    res.send({fruits})
})

app.get('/fruits/:name', (req, res) => {
    findFruit = fruits.find((x) => x.name.toLowerCase() === req.params.name.toLowerCase())

    res.send(findFruit)
  })
