/**
 * Extends Array with array equality check
 * TODO: implement recursive check for arrays and objects
 * @param {Array} array Array to compare
 * @returns {Boolean}
 */
Array.prototype.isEqual = function(array) {
    if(this.length !== array.length) return false
    let equal = true
    this.forEach((element, index) => {
        if(element !== array[index]) {
            equal = false
            return
        }
    })

    return equal
}
