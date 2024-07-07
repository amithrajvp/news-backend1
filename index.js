const express = require('express')
const articlesRouter = require('./routes/articles')
const authorsRouter = require('./routes/authors')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


// Routes
app.use('/api/articles', articlesRouter);
app.use('/api/authors', authorsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})