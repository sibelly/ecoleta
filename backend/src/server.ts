import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('pppppppp')
  response.send('tesete')
})

app.listen(3333)