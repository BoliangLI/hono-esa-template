import { Hono } from "hono"

const app = new Hono()


app.use('/' , async(c,next)=>{
  c.setRenderer((content)=>{
    return c.html(
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
        </head>
        <body>
          {content}
        </body>
      </html>
    )
  })
  await next()
})

app.get('/', (c) => c.render('Hello, Hono ESA!'))


export default app