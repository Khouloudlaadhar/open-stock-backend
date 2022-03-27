const express = require('express');
const cors=require('cors')
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: [process.env.WEB_APP_URL] }))
// app.use((req, res) => {
//     res.json({ message: "My APP WEB API v1" });
// });
const TECHNOLOGIES=[
    {
        _id:"1",
        name:"react"
    },
    {
        _id:"2",
        name:"Nodejs"
    }


]
app.get('/technologies',(req,res)=>{
  return res.json(TECHNOLOGIES)

})
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Successfully connected to MongoDB');
            app.listen(PORT, () => {
                console.log(`Server is listening on port ${PORT}`);
            });
        })
        .catch(error => {
            console.log(error);
        })
