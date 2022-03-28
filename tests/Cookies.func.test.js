const cookieFunctions = require("../functions/Cookies")


test("set new cookie - function", () => {
    expect(cookieFunctions.setCookie("test", "testing")).toBeInstanceOf(Object)
})


test("get cookie - function (cookie found)", () => {
    expect(cookieFunctions.getCookie("test")).toBeInstanceOf(Object)
})

test("get cookie - function (cookie not found)", () => {
    expect(cookieFunctions.getCookie("not-set")).toBe(false)
})

test("delete cookie - function", () => {
    cookieFunctions.deleteCookie("test")
    expect(cookieFunctions.getCookie("test")).toBe(false)
})
