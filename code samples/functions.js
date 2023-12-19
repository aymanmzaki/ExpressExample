var x = 5;

function test() {
    console.log(x)
}

function print(text) {
    console.log(`Hello ${text}`)
}

const myfunciton = function execute(text, f) {
    f(text);
};

const myfunciton2 = (text) => {
    console.log(`Hello ${text}`)
}
var st = {
    "firstName": "Ahmed",
    "LastName": "Ali",
    "Email": "ahmedAli@gmail.com",
    "Phone": 1010222554869,
    "speakArabic": true
}

const testObj = (obj) => {
    console.log(obj)
}

testObj(st)