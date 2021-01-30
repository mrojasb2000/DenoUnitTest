import { bgBlue, red, bold } from "https://deno.land/std/fmt/colors.ts"

const sayHello = (name: string = "world") => {
    console.log(bgBlue(red(bold(`Hello ${name}`))));
}

const checkEquals = () => {
    class Foo{}
    const foo1 = new Foo()
    const foo2 = new Foo()
   
    console.log(foo1 === foo2)
}

sayHello();

sayHello("Conlin");

//sayHello(15);

checkEquals();