const express = require('express')
const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.send('Hello World!')
})

const names = ["Lisa", "Max", "Denise"];

app.post('/name', (request, response) => {
  names.push(request.body.name);
  response.json(names);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
