const express = require('express')
const connectDatabase = require('./src/database/db')
const cors = require('cors')

const app = express()
const PORT = 3333
app.use(cors())

connectDatabase()
app.use(express.json())

const mulheresRoutes = require('./src/routes/mulheres.routes')
app.use('/', mulheresRoutes)

app.listen(PORT, console.log(`Server is starting at ${PORT}`))
