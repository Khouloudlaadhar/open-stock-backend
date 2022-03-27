const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use((req, res) => {
    res.json({ message: "My APP WEB API v1" });
});

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
