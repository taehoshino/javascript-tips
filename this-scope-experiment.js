apple = "Global apple"

// This is how standard function handles "this"
function getApple() {
    console.log(this.apple)
}

const obj1 = {
    apple: "Object apple 1", 
    func: getApple
}

const obj2 = {
    apple: "Object apple 2",
    func: getApple
}

obj1.func() // Object apple 1 ("this" == obj1)
obj2.func() // Object apple 2 ("this" == obj2)

// How about Arrow function?
const catchApple = () => {
    console.log(this.apple)
}

const obj1_a = {
    apple: "Object apple 1a", 
    func: catchApple
}

const obj2_a = {
    apple: "Object apple 2a",
    func: catchApple
}

obj1_a.func() // -> undefined
obj2_a.func() // -> undefined

// Summary : 
// Inside Arrow function, "this" == globalThis and is defined when the function is defined.
// On the contrary, inside standard function, "this" == object that calls that function, 
// i.e. "this" will be defined when the function gets called        


