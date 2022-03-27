const Cookies = require("../classes/Cookies.class")

const cookies = new Cookies()

test("testing cookies class - parsing data", () => {
    expect(cookies.getCookies()).toBeInstanceOf(Array)
})

test("testing cookies class - getting cookie by name (not found)", () => {
    expect(cookies.getCookie("some-cookie")).toBe(false)
})

test("testing cookies class - getting cookie by value (not found)", () => {
    expect(cookies.getCookieByValue("some value")).toBe(false)
})