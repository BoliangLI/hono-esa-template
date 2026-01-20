import { Hono } from "hono"
import { renderer } from "./renderer"

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => c.render('Hello, World!'))

app.get('/about', (c) => {
  return c.render(
    <>
      <title>Hono SSG Page</title>Hello!
    </>
  )
})

export default app