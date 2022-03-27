/**
 * Cookies class -> easy work with cookies
 * TODO: finish setCookie, add deleteCookie
 * @author Jakub Pradeniak (https://github.com/JakubPradeniak)
 */

module.exports = class Cookies {

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
        return result.keys.length === 0 ? false : result
    }

    /**
     * Return cookie object with specified value.
     * TODO: implement value comparison for arrays, objects (recursive algo)
     * @param {*} value Value of cookie we want to find
     * @returns {Object|Boolean} Cookie object on success, False on failure
     */
    getCookieByValue(value) {
        const result = this.cookies.filter(cookie => {
            return JSON.stringify(cookie.value) === JSON.stringify(value)
        })
        return result.keys.length === 0 ? false : result
    }

    /**
     * Sets new cookie
     * TODO: finish adding cookie with options
     * @param {String} name Cookie name
     * @param {*} value Cookie content
     * @param {Object} options Additional options (not required)
     */
    setCookie(name, value, options = {lifeTime: 7, path: "/"}) {

    }

}