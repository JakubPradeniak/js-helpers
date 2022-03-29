require("../prototypes/isEqual")

test("Array equality (equal)", () => {
    const arrayA = ["a","b"]
    const arrayB = ["a","b"]
    expect(arrayA.isEqual(arrayB)).toBe(true)
})

test("Array equality (unequal)", () => {
    const arrayA = [1,2,3,4,5,6]
    const arrayB = [1,2,3,7,5,6]
    expect(arrayA.isEqual(arrayB)).toBe(false)
})

test("Array equality - 2D array (equal)", () => {
    const arrayA = [["a","b"],1,2]
    const arrayB = [["a","b"],1,2]
    expect(arrayA.isEqual(arrayB)).toBe(true)
})

test("Array equality - 2D array (unequal)", () => {
    const arrayA = [1,2,["a","c"]]
    const arrayB = [1,2,["a","b"]]
    expect(arrayA.isEqual(arrayB)).toBe(false)
})

test("Array equality - multidimensional array (equal)", () => {
    const arrayA = [1,2,["a","b"],3,[1,[2,3,["c", "d", ["e","F","g"]]], 4],5, ["a",1,"b",2]]
    const arrayB = [1,2,["a","b"],3,[1,[2,3,["c", "d", ["e","F","g"]]], 4],5, ["a",1,"b",2]]
    expect(arrayA.isEqual(arrayB)).toBe(true)
})

test("Array equality - multidimensional array (unequal)", () => {
    const arrayA = [1,2,["a","b"],3,[1,[2,3,["c", "d", ["e","F","g"]]], 4],5, ["a",1,"b",2]]
    const arrayB = [1,2,["a","b"],3,[1,[2,3,[1, "d", ["e","F","g"]]], 4],5, ["a",1,"b",2]]
    expect(arrayA.isEqual(arrayB)).toBe(false)
})