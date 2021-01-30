import { Rhum } from "https://deno.land/x/rhum@v1.1.7/mod.ts";
//import { Rhum } from "https://deno.land/x/rhum@v1.1.4/mod.ts";

//run: deno test --allow-env
Rhum.testPlan("Some_file_test.ts", () => {
    Rhum.testSuite("MyFunctions", () => {
        Rhum.testCase("does stuff", () => {
            // Assert some stuff
            
        })
    })
})