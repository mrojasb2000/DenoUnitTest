import { assert, assertEquals, assertNotEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test("Test Assert", () => {
    assert("Hello")
    assert(1)
    assert(true)
});

Deno.test("Test Assert Equals", () => {
    assertEquals(1,1)
    assertEquals("Hello", "Hello")
    assertEquals(true, true)
    assertEquals(undefined, undefined)
    assertEquals(null, null)
    assertEquals(new Date(), new Date())
    assertEquals(new RegExp("abc"), new RegExp("abc"))

    class Foo{}
    const foo1 = new Foo()
    const foo2 = new Foo()

    assertEquals(foo1, foo2)

})

Deno.test("Test Assert not Equals", () => {
    assertNotEquals(1,2)
    assertNotEquals("Hello", "World")
    assertNotEquals(true, false)
    assertNotEquals(undefined, "")
    assertNotEquals(new Date(), Date.now())
    assertNotEquals(new RegExp("abc"), new RegExp("def"))
})