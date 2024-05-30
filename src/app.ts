import express from 'express';
import bodyParser from 'body-parser';
import doctorRouter from './modules/example/routers/DoctorRouter';

const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/example', doctorRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});