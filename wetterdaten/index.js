const express = require('express')
const app = express()
const port = 3000

function getAPIPath(zip) {
  return `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${zip}00`
}

app.get('/:zip', async (request, response) => {
  // fetch(getAPIPath(request.params.zip))
  //   .then((data) => data.json())
  //   .then((json) => response.send(json.currentWeather?.temperature?.toString()));

  const data = await fetch(getAPIPath(request.params.zip))
  const json = await data.json()

  response.send(json.currentWeather?.temperature?.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// request.get({
//   url: url,
//   json: true,
//   headers: {'User-Agent': 'request'}
// }, (err, res, data) => {
//   if (err) {
//     console.log('Error:', err);
//   } else if (res.statusCode !== 200) {
//     console.log('Status:', res.statusCode);
//   } else {
//     // data is already parsed as JSON:
//     console.log(data);
//   }
// });
