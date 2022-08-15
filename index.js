const express = require('express')
const image =require('./models/img')
const mongoose = require('./DB/mongoose');
const app = express()
const PORT = process.env.PORT || 3000 //if deploy on cloud


app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


app.get('/api', (request, response) => {

  const database = new image.find()

  // if(database) (err, data) => {
  //   if (err) {
  //     response.end();
  //     return;
  //   }
  //   response.json(data);
  // });
});

app.post('/api', (req, res) => {

  try{
      const {lat,lon,name,mood,desc,image64}=req.body
      const IMAGE = new image({lat,lon,name,mood,desc,image64})

      IMAGE.save()
      .then(() => {

        res.status(200).json({ status: 200, message: "Image Uploaded" });
          })
        .catch((err) => {
            res.status(500).json({ status: 500, message: "failed to upload." })
        })
  } catch(err){console.log(err)}
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})







   