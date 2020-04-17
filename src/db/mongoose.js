const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please use a valid email')
            }
        }
    },
    password: {
        type: String,
        required: true, 
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }    
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must a positive number')
            }
        }
    }
})

const me = new User({
    name: 'Andrew',
    email: 'mike@yahoo.com',
    password: 'phone818',

})  

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})
// const me = new User({
//     name: 'Ace',
//     age: 29
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     }, 
//     completed: {
//         Boolean
//     }
// })

// const task = new Task({
//     description: 'Clean up room',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })