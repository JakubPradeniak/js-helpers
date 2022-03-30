/**
 * Extends Object with object equality check
 * TODO: how to do this in better way
 * @param {Object} object Object to compare
 * @returns {Boolean}
 */
Object.prototype.isEqual = function(object) {
    // If objects has different count of props they cannot be equal
    if(Object.keys(this).length !== Object.keys(object).length) return false
    let isEqual = true
    for(const [key, value] of Object.entries(this)) {
        if(!object.hasOwnProperty(key)) {
            isEqual = false
            break
        }
        if(typeof value === "object" && typeof object[key] === "object") {
            if(!value.isEqual(object[key])) {
                isEqual = false
                break
            }
        } else if(value !== object[key]) {
            isEqual = false
            break
        }
    }

    return isEqual
}
