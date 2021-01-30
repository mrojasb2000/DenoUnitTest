import { assert, 
    assertEquals, 
    assertNotEquals, 
    assertStrictEquals, 
    assertStringIncludes,
    assertArrayIncludes,
    assertMatch } from "https://deno.land/std/testing/asserts.ts";

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

Deno.test("Test Assert Strict Equals", () => {
    assertStrictEquals(1,1)
    assertStrictEquals(true, true)
    assertStrictEquals("Hello", "Hello")
    assertStrictEquals(undefined, undefined)
})

/* Deno.test("Test Floats", () => {
    assertEquals(0.1 + 0.2, 0.3)
})

Deno.test("Test Floats Strict", () => {
    assertStrictEquals(0.1 + 0.2, 0.3)
}) */

Deno.test("Test Assert String Includes", () => {
    assertStringIncludes("Hello World", "Hello")
})

Deno.test("Test Assert Array Includes", () => {
    assertArrayIncludes([1,2,3], [1])
    assertArrayIncludes([1,2,3], [1,2])
    assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"))
})

Deno.test("Test Assert Match", () => {
    assertMatch("abcdefghi", new RegExp("def"))

    const basicUrl = new RegExp("^https?:\/\/[a-z\.]+\.com$")
    assertMatch("https://www.google.com", basicUrl)
    assertMatch("http://facebook.com", basicUrl)
})