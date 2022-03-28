const Cookies = require("../classes/Cookies.class")

const cookies = new Cookies()

test("testing cookies class - setting new cookie", () => {
    expect(cookies.setCookie("test", "testing")).toBeInstanceOf(Object)
})


test("testing cookies class - parsing data", () => {
    expect(cookies.getCookies()).toBeInstanceOf(Array)
})

test("testing cookies class - getting cookie by name (found)", () => {
    expect(cookies.getCookie("test")).toBeInstanceOf(Object)
})

test("testing cookies class - getting cookie by name (not found)", () => {
    expect(cookies.getCookie("some-cookie")).toBe(false)
})

test("testing cookies class - getting cookie by value (not found)", () => {
    expect(cookies.getCookieByValue("some value")).toBe(false)
})

test("testing cookies class - deleting cookie", () => {
    cookies.deleteCookie("test")
    expect(cookies.getCookie("test")).toBe(false)
})
