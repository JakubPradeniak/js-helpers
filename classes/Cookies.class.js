/**
 * Cookies class -> easy work with cookies
 *
 * @author Jakub Pradeniak (https://github.com/JakubPradeniak)
 */
class Cookies {

    /**
     * {Array<Object>} storing all cookies.
     */
    #cookies

    /**
     * Constructor processes document.cookie string to store
     * cookies as array of objects in format
     * {
     *  name: String,
     *  value: JSON parsed data od String
     * }
     */
    constructor() {
        this.processCookies()
    }

    /**
     * Gets all cookies from document.cookie and processes them into array
     */
    processCookies() {
        // If there are no cookies -> set this.cookies to empty array
        if(document.cookie === "") {
            this.cookies = []
            return
        }
        const cookies = document.cookie.split("; ")
        // Process cookies
        this.cookies = cookies.map(cookie => {
            const cookieParts = cookie.split("=")
            let value
            try {
                value = JSON.parse(cookieParts[1])
            } catch(e) {
                value = cookieParts[1]
            }
            // Return Cookie Object
            return {
                name: cookieParts[0],
                value: value
            }
        })
    }

    /**
     * Return all cookies
     * @returns {Array<Object>}
     */
    getCookies() {
        return this.cookies
    }

    /**
     * Return cookie object with specified name.
     * @param {String} name Name of cookie we want to find
     * @returns {Object|Boolean} Cookie object on success, False on failure
     */
    getCookie(name) {
        const result = this.cookies.filter(cookie => {
            return cookie.name === name
        })
        return result.length === 1 ? result[0] : false
    }

    /**
     * Return cookie object with specified value.
     * TODO: implement value comparison for arrays, objects (recursive algo), now using JSON.stringify -> bad performance, not going to work if props are in different order
     * @param {*} value Value of cookie we want to find
     * @returns {Object|Boolean} Cookie object on success, False on failure
     */
    getCookieByValue(value) {
        const result = this.cookies.filter(cookie => {
            return JSON.stringify(cookie.value) === JSON.stringify(value)
        })
        return result.length === 1 ? result[0] : false
    }

    /**
     * Sets new cookie
     * options.expireIn - expiration in days
     * @param {String} name Cookie name
     * @param {*} value Cookie content
     * @param {Object} options Additional options (not required)
     * @returns {Object} cookie object
     */
    setCookie(name, value, options = {expireIn: 7, path: "/"}) {
        // Create expiration date
        const dayInMilliseconds = 864e5
        const expirationDate = new Date(
            Date.now()
            + (options.expireIn * dayInMilliseconds)
        ).toGMTString()
        // Create cookie
        document.cookie = `${name}=${JSON.stringify(value)}; expires=${expirationDate}; path=${options.path}`
        // Update this.cookies
        this.processCookies()
        // Return Cookie Object
        return {
            name: name,
            value: value
        }
    }

    /**
     * Deletes cookie with specified name
     * @param {String} name Name of cookie to be deleted
     */
    deleteCookie(name) {
        document.cookie = `${name}=""; expires="Thu, 01 Jan 1970 00:00:00 GMT"`
        // Update this.cookies
        this.processCookies()
    }

}

// Export for testing
module.exports = Cookies