const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookRoute = require('./routes/book_route');
app.use('/api/books', bookRoute);

const userRoute = require('./routes/user_route');
app.use('/api/user', userRoute);

const lendingRoute = require('./routes/lending_route');
app.use('/api/lending', lendingRoute);

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})
