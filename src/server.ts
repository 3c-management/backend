import app from './app';
import { DatabaseSource } from '../typeorm.config';

DatabaseSource
  .initialize()
  .then(() => {
    app.listen(8080, () => {
      console.log(`server running on http://localhost:8080/`);
    })
  })
  .catch(err => {
    console.log(err);
  })