import { Hono } from 'hono';

const ssr = new Hono();

ssr.get('/:name', (c) => {
  const { name } = c.req.param();
  return c.html(`Hello ${name} - JSX Sample`);
});

export default ssr;
