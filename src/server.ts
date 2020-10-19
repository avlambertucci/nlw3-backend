import express from 'express';
import './database/connection'
import routes from './routes';

const app = express()
const port = 3333;

app.use(express.json())
app.use(routes) // it has to be after app.use in order to use routes from route file

//importing routes

app.listen(port, ()=>{
  console.log('server on!')
})

