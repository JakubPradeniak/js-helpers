require("../prototypes/isEqual")

test("Array equality (equal arrays)", () => {
    const arrayA = [1,2,3,4,5,6]
    const arrayB = [1,2,3,4,5,6]
    expect(arrayA.isEqual(arrayB)).toBe(true)
})

test("Array equality (unequal arrays)", () => {
    const arrayA = [1,2,3,4,5,6]
    const arrayB = [1,2,3,7,5,6]
    expect(arrayA.isEqual(arrayB)).toBe(false)
})
