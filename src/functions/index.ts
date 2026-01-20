import { Hono } from 'hono';
import ssr from './ssr';

const app = new Hono().basePath('/');

app.route('/ssr', ssr);


async function handleRequest(request: Request) {
  return app.fetch(request);
}

export default {
  async fetch(request: Request) {
    return handleRequest(request);
  }
};