import expres from 'express';
const app = expres()

import {routes} from './routes/routes'

app.use(expres.json())
app.use(routes)

app.listen(3333, () => {
  console.log('server runing...')
})