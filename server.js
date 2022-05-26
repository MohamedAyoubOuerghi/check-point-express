
const express = require("express")


const app = express()

function session (req, res, next) {
    let   d =new Date()
     let day =d.getDay()
     let hour = d.getHours(); 
       if (day>1 && day<5  && hour >9 && hour < 17 ) {
           app.use(express.static('public'));
       } else {
           res.send("votre session est fermé")
       }
   }

   app.use(session)
const port = process.env.PORT || 5000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on port ${port} ....`)
})