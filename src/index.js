const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000 

app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.send('Get requests are disabled')
    } else {
        next()
    }
})

app.use((req, res, next) => {
    res.status(503).send('Site is currently down. Check back soon!')
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'webtoken', { expiresIn: '30 minutes' })

    const data = jwt.verify(token, 'webtoken')
}

myFunction()