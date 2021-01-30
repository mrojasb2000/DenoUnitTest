import { Application, Router } from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { superoak } from "https://deno.land/x/superoak@3.0.1/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// run: deno test --allow-net --location http://localhost demo.test.ts
Deno.test("it should support the Oak framework", async () => {
  const request = await superoak(app);
  await request.get("/").expect("Hello Deno!");
});