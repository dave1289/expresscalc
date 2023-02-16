const express = require('express');
const ExpressError = require('./expresserror.js')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true }))

app.get('/mean/:nums', (req, res) => {
   console.log(req.params.nums)
   res.send('test')
})

app.get('/median/:nums', (req, res) => {

})

app.get('/mode/:nums', (req, res) => {

})

app.use((err, req, res, next) => {
   let status = err.status || 500;
   let message = err.message;

   return res.status(status).json({
      error: {message, status}
   })
})

app.listen('3000', () => {
   console.log('app on port 3000')
})