import { Application, Router } from "https://deno.land/x/oak@v6.0.1/mod.ts"

const router = new Router()
router.get("/", (ctx) => {
    ctx.response.body = "Hello Deno!"
    ctx.response.status = 200
})

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

export default app