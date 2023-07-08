import { serve } from 'https://deno.land/std/http/server.ts';
import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts';

const app = new Hono();

app.use('/', serveStatic({ root: './dist/' }));

app.use('/favicon.ico', serveStatic({ path: './dist/vite.svg' }));
app.use('/robots.txt', serveStatic({ path: './dist/robots.txt' }));

serve(app.fetch.bind(app));
