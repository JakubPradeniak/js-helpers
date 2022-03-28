/**
 * Returns Cookie as object with JSON.parsed value, false on fail.
 * @param {String} name Name of cookie
 * @returns {Object|Boolean}
 */
function getCookie(name) {
    let cookie = document.cookie.split("; ").filter(cookie => {
        return cookie.includes(`${name}=`)
    })
    // No cookies, return false
    if(cookie.length === 0) return false
    cookie = cookie[0].split("=")
    let value
    try {
        value = JSON.parse(cookie[1])
    } catch(err) {
        value = cookie[1]
    }
    return {
        name: cookie[0],
        value: value
    }
}

/**
 * Creates cookie with specified name and value (JSON.stringified).
 * @param {String} name Name of new cookie
 * @param {*} value Value to be stored in cookie
 * @param {Object} options Options: expiration in days, path (not required, default values: 1, "/")
 * @returns {Object}
 */
function setCookie(name, value, options = {expireIn: 1, path: "/"}) {
    // Create expiration date
    const dayInMilliseconds = 864e5
    const expirationDate = new Date(
        Date.now()
        + (options.expireIn * dayInMilliseconds)
    ).toGMTString()
    // Create cookie
    document.cookie = `${name}=${JSON.stringify(value)}; expires=${expirationDate}; path=${options.path}`
    // Return Cookie Object
    return {
        name: name,
        value: value
    }
}

/**
 * Deletes cookie with specified name
 * @param {String} name Name of cookie
 */
function deleteCookie(name) {
    document.cookie = `${name}=""; expires="Thu, 01 Jan 1970 00:00:00 GMT"`
}

// Export for testing
module.exports = {
    getCookie,
    setCookie,
    deleteCookie
}