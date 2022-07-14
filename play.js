const person ={
    greet() {
        console.log(this.name);
    }
}

const array=['a',1,true];

const copiedperson={...person};
const copiedArray=[...array];

console.log(copiedperson,copiedArray);

const toArray=(...args)=>{
    return args;
}

console.log(toArray(1,2,3,4));