const hobbies=['abc',1,true];

for (let hobby of hobbies){
    console.log(hobby);
};

console.log(hobbies.map((hobby)=>{
    return "hobby: "+hobby;
}));