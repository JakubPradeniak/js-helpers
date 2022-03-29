/**
 * Extends Array with array equality check
 * TODO: how to do this in better way
 * @param {Array} array Array to compare
 * @returns {Boolean}
 */
Array.prototype.isEqual = function(array) {
    if(this.length !== array.length) return false
    let equal = true
    for(let i = 0; i < this.length; i++) {
        if(typeof this[i] === 'object' && typeof array[i] === 'object') {
            if(!this[i].isEqual(array[i])) {
                equal = false
                break;
            }
        } else if(this[i] !== array[i]) {
            equal = false
            break;
        }
    }

    return equal
}
