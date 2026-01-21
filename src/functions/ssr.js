import { Hono } from 'hono';

const ssr = new Hono();

ssr.get('/:name', (c) => {
  const { name } = c.req.param();
  return c.html(`Hello ${name} - This is SSR Page!`);
});

export default ssr;
