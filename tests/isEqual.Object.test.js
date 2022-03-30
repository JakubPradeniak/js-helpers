require("../prototypes/isEqual")

/* Equality of simple objects */
test("Simple - unequal, different count of props", () => {
    const objectA = {
        "a": 1,
        "b": 2,
        "c": 3
    }
    const objectB = {
        "a": 1,
        "b": 2
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})

test("Simple - unequal, different prop names", () => {
    const objectA = {
        "a": 1,
        "c": 2,
    }
    const objectB = {
        "a": 1,
        "b": 2
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})

test("Simple - unequal, different prop values", () => {
    const objectA = {
        "a": 1,
        "b": 2,
    }
    const objectB = {
        "a": 3,
        "b": 2
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})


test("Simple - equal", () => {
    const objectA = {
        "a": 1,
        "b": 2
    }
    const objectB = {
        "a": 1,
        "b": 2
    }
    expect(objectA.isEqual(objectB)).toBe(true)
})
/* Equality of simple objects */

/* Equality of nested objects */
test("Nested - unequal, different count of props", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2
        }
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})

test("Nested - unequal, different prop names", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "e": 3
        }
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})

test("Nested - unequal, different prop values", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 6
        }
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})


test("Nested - equal", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3
        }
    }
    expect(objectA.isEqual(objectB)).toBe(true)
})
/* Equality of nested objects */

/* Equality of deeply nested objects */
test("Deeply nested - equal", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    expect(objectA.isEqual(objectB)).toBe(true)
})

test("Deeply nested - equal test 2", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                },
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                }
            },
            "q": 11
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    expect(objectA.isEqual(objectB)).toBe(true)
})

test("Deeply nested - equal test 3", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": [1,2,3],
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": [1,2,3],
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    expect(objectA.isEqual(objectB)).toBe(true)
})

test("Deeply nested - unequal", () => {
    const objectA = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 4,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    const objectB = {
        "a": 1,
        "b": {
            "c": 2,
            "d": 3,
            "e": {
                "f": 4,
                "g": {
                    "h": 5,
                    "j": 6,
                    "k": {
                        "l": 7
                    }
                },
                "m": 8,
                "n": {
                    "o": 9,
                    "p": 10
                }
            },
            "q": 11
        }
    }
    expect(objectA.isEqual(objectB)).toBe(false)
})
/* Equality of deeply nested objects */