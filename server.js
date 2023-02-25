const express = require('express')
const connectDatabase = require('./src/database/db')

const app = express()
const PORT = 3333

connectDatabase()
app.use(express.json())

const mulheresRoutes = require('./src/routes/mulheres.routes')
app.use('/', mulheresRoutes)

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
