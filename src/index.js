const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
    const password = 'caddyman'
    const hashedPassword = await bcrypt.hash(password, 8)

    const isMatch = await bcrypt.compare('', hashedPassword)
}

myFunction()