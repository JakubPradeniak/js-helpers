/**
 * Extends Object with object equality check
 * TODO: how to do this in better way
 * @param {Object} object Object to compare
 * @returns {Boolean}
 */
Object.prototype.isEqual = function(object) {
    /*
     * If objects has different count of props they cannot be equal
     */
    if(Object.keys(this).length !== Object.keys(object).length) return false
    
    let isEqual = true
    for(const [key, value] of Object.entries(this)) {
        /*
         * If Object does not have a property of object we are
         * comparing it to return FALSE, objects are unequal
         */
        if(!object.hasOwnProperty(key)) {
            isEqual = false
            break
        }
        /*
         * If prop values are objects (nesting) call isEqual
         * recursively and break comparison in case of unequality
         */
        if(typeof value === "object" && typeof object[key] === "object") {
            if(!value.isEqual(object[key])) {
                isEqual = false
                break
            }
        } else if(value !== object[key]) {
            /*
             * Prop values are unequal - return false
             */
            isEqual = false
            break
        }
    }

    return isEqual
}
