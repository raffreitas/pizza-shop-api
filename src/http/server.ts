import { Elysia } from 'elysia'
import { registerRestaurant } from './routes/register-restaurant'
import { sendAuthLink } from './routes/send-auth-link'
import swagger from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .use(registerRestaurant)
  .use(sendAuthLink)

app.listen(3333, () => {
  console.log('HTTP server running!')
})
