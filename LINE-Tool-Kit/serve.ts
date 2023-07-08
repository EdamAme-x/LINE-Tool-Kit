import { serve } from 'https://deno.land/std/http/server.ts';
import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts';

const app = new Hono();

app.use('/', serveStatic({ root: './dist/' }));

serve(app.fetch.bind(app));


// distが読み込めない
// distだけ分離してデプロイ
