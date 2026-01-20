import { Hono } from 'hono';
import ssr from './ssr';

const app = new Hono().basePath('/er');

app.route('/ssr', ssr);


async function handleRequest(request) {
  return app.fetch(request);
}

export default {
  async fetch(request) {
    return handleRequest(request);
  }
};