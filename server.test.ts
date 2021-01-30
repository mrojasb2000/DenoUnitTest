import { superoak } from "https://deno.land/x/superoak@3.0.1/mod.ts"
import app from "./server.ts"

// run: deno test --allow-net --location http://localhost server.test.ts
Deno.test("it should return some JSON with status code 200", async () => {
    const request = await superoak(app)
    await request.get("/")
        .expect(200)
        .expect("Hello Deno!")
})