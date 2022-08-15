const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 //if deploy on cloud


app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})







   