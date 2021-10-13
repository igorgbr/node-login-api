const express = require('express');
const loginRouter = require('./routes/loginRoute')

const app = express()

app.use(express.json())

const PORT = '3000'

app.use('/login', loginRouter);


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});