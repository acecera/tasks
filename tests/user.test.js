const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    await (await request(app).post('/users')).setEncoding({
        name: 'Ace',
        email: 'anthonycera@icloud.com',
        password: "Passthisnow"
    }).expect(201)
})
