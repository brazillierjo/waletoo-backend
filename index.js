const express = require('express')
const router = express.Router()

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log('Server running on port ' + port)
})

