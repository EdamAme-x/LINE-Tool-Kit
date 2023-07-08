import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono/middleware.ts'

const app = new Hono()

app.use('/*', serveStatic({ root: './dist' }))
app.use('/favicon.ico', serveStatic({ path: './public/vite.ico' }))
app.get('/', serveStatic({ path: './dist/index.html' }))

serve(app.fetch)
