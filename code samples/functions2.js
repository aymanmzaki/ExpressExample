let shahd= 10


function print(){
    console.log('Hello World');
    console.log(shahd)
}
function printv2(param){
    console.log(`Hello ${param}`)
}

const printv3 = function (param) {
    console.log(`Hello ${param}`)
};

const printv4 = (param) => {
    let val = JSON.stringify(param)
    console.log(`Hello ${val}`)
};

const add = (a,b) => {
    let p=15;
    return a+b+p;
};
const subtract = (a,b) => a-b-global;

const executor = (operation,a,b) => {
    console.log(operation(a,b))
}

print()
