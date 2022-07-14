const person={
    name:'arh',
    age:22,
    greet() {
        console.log(this.name);
    }
}

const personName=({name})=>{
    console.log(name);

}

const {name,age}=person;
personName(person);
console.log(name,age);

const hobbies=[1,2,3,4,5];

const [h1,h2]=hobbies;
console.log(h1,h2);