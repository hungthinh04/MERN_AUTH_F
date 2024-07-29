import express from 'express'
import {MongoClient} from 'mongodb'

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))

let db;
async function dbConnect()
{
    let client = new MongoClient("mongodb://localhost:27017/MERNAUTH")
   await  client.connect()
    db = client.db()

}

dbConnect()
app.get('/',(req,res)=>{
    

})

app.listen(3000,(req,res)=>{
    return "server is running"
})